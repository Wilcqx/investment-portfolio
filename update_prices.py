#!/usr/bin/env python3
"""Portfolio price updater for GitHub Actions.

Reliability principle:
- Yahoo Finance via yfinance is the primary automatic data source.
- TradingView / FSMOne are recorded as reference sources only; this script does
  not pretend to fetch them automatically because there is no stable free API
  in this project.
- If a new quote looks abnormal versus the last saved quote, the script keeps
  the previous price and marks the row as validation-failed.
"""
from __future__ import annotations

import json
import re
from datetime import datetime, timezone, timedelta
from pathlib import Path
from typing import Any, Dict, Optional

try:
    import yfinance as yf
except Exception as exc:
    raise SystemExit("Missing dependency yfinance. Run: pip install -r requirements.txt") from exc

DATA_PATH = Path(__file__).with_name("data.js")
PREFIX_RE = re.compile(r"^\s*window\.PORTFOLIO_STATE\s*=\s*", re.S)
SGT = timezone(timedelta(hours=8))

REFERENCE_SOURCES = {
    "D05.SI": "Yahoo Finance primary; TradingView SGX:D05 and FSMOne as manual reference",
    "C38U.SI": "Yahoo Finance primary; TradingView SGX:C38U and FSMOne as manual reference",
    "BS6.SI": "Yahoo Finance primary; TradingView SGX:BS6 as manual reference",
    "8YZ.SI": "Yahoo Finance primary; TradingView SGX:8YZ as manual reference",
    "0P0000Z32L.SI": "Yahoo Finance primary; FSMOne fund page as manual reference",
}


def load_state() -> Dict[str, Any]:
    raw = DATA_PATH.read_text(encoding="utf-8")
    raw = PREFIX_RE.sub("", raw).strip()
    if raw.endswith(";"):
        raw = raw[:-1]
    return json.loads(raw)


def save_state(state: Dict[str, Any]) -> None:
    payload = json.dumps(state, ensure_ascii=False, indent=2)
    DATA_PATH.write_text(f"window.PORTFOLIO_STATE = {payload};\n", encoding="utf-8")


def quote_price(symbol: str) -> Optional[float]:
    if not symbol or symbol.upper() == "AMOVA ARK":
        return None
    try:
        ticker = yf.Ticker(symbol)
        fast = getattr(ticker, "fast_info", None)
        for key in ("last_price", "regular_market_previous_close", "previous_close"):
            try:
                value = fast.get(key) if hasattr(fast, "get") else None
                if value and float(value) > 0:
                    return float(value)
            except Exception:
                pass
        hist = ticker.history(period="5d", interval="1d", auto_adjust=False)
        if hist is not None and not hist.empty:
            close = hist["Close"].dropna()
            if not close.empty:
                return float(close.iloc[-1])
    except Exception:
        return None
    return None


def max_allowed_move(symbol: str) -> float:
    if symbol.endswith("-USD"):
        return 0.50  # crypto can move more
    if symbol.endswith(".SI"):
        return 0.18
    return 0.25


def validated_price(symbol: str, old_price: Optional[float]) -> tuple[Optional[float], str]:
    new_price = quote_price(symbol)
    if new_price is None:
        return None, "fallback: quote unavailable; kept previous price"
    if old_price and old_price > 0:
        move = abs(new_price - old_price) / old_price
        if move > max_allowed_move(symbol):
            return None, f"validation-failed: Yahoo quote moved {move:.1%}; kept previous price"
    return new_price, "updated: Yahoo Finance primary; sanity-checked against previous saved price"


def fx_usd_sgd(state: Dict[str, Any]) -> float:
    old_fx = float(state.get("fx", {}).get("USD") or 1.0)
    price, status = validated_price("SGD=X", old_fx)
    return float(price or old_fx)


def value_sgd_from_holding(holding: Dict[str, Any], fx: Optional[float] = None) -> float:
    """Return the holding value in SGD using saved value first, then qty * price."""
    saved_value = holding.get("valueSgd")
    if saved_value is not None:
        try:
            return float(saved_value)
        except Exception:
            pass

    qty = float(holding.get("quantity") or 0)
    price = float(holding.get("price") or 0)
    currency = holding.get("currency", "SGD")
    rate = float(fx if fx is not None else 1.0) if currency == "USD" else 1.0
    return qty * price * rate


def portfolio_total_value_sgd(state: Dict[str, Any]) -> float:
    """Match the dashboard total-value logic before the next price refresh.

    This baseline is used for Daily Move. It includes normal holdings and
    standalone RSP positions such as Allianz, while avoiding double-counting
    tickers that already exist in holdings, such as IVV.
    """
    fx = float(state.get("fx", {}).get("USD") or 1.0)
    holdings = state.get("holdings", []) or []
    total = sum(value_sgd_from_holding(holding, fx) for holding in holdings)

    existing_tickers = {str(holding.get("ticker") or "") for holding in holdings}
    for item in state.get("rsp", []) or []:
        ticker = str(item.get("ticker") or item.get("name") or "")
        if ticker in existing_tickers:
            continue
        current_value = item.get("currentValueSgd")
        if current_value is None:
            continue
        try:
            total += float(current_value)
        except Exception:
            pass

    total += float(state.get("summaryAdjustment", {}).get("value") or 0)
    return round(total, 2)


def lpx_total_value_usd(state: Dict[str, Any]) -> float:
    """Return the LPX account market value in USD before the next refresh."""
    holdings = state.get("lpx", {}).get("holdings", []) or []
    total = 0.0
    for holding in holdings:
        qty = float(holding.get("quantity") or 0)
        price = float(holding.get("price") or 0)
        total += qty * price
    return round(total, 2)


def update_holding(holding: Dict[str, Any], fx: float) -> None:
    symbol = str(holding.get("quoteSymbol") or holding.get("ticker") or "").split(" /")[0].strip()
    is_new = "lastQuoteStatus" not in holding
    old_price = None if is_new else holding.get("price")
    price, status = validated_price(symbol, float(old_price) if old_price else None)
    if price is None:
        holding["lastQuoteStatus"] = status
        holding["lastQuoteSource"] = REFERENCE_SOURCES.get(symbol, "Yahoo Finance attempted; previous saved price retained")
        return

    currency = holding.get("currency", "SGD")
    qty = float(holding.get("quantity") or 0)
    avg = holding.get("avgCost")
    rate = fx if currency == "USD" else 1.0

    holding["price"] = round(price, 6)
    holding["valueSgd"] = round(qty * price * rate, 2)
    if avg is not None:
        holding["costSgd"] = round(qty * float(avg) * rate, 2)
    holding["pnlSgd"] = round(float(holding.get("valueSgd") or 0) - float(holding.get("costSgd") or 0), 2)
    holding["lastQuoteStatus"] = status
    holding["lastQuoteSource"] = REFERENCE_SOURCES.get(symbol, "Yahoo Finance primary; TradingView/FSMOne manual check if needed")


def update_rsp(item: Dict[str, Any], fx: float) -> None:
    symbol = item.get("quoteSymbol")
    if not symbol:
        return
    old_price = item.get("currentPrice")
    price, status = validated_price(symbol, float(old_price) if old_price else None)
    if price is None:
        item["lastQuoteStatus"] = status
        return
    qty = float(item.get("quantity") or 0)
    item["currentPrice"] = round(price, 6)
    item["currentValueSgd"] = round(qty * price, 2)
    item["lastQuoteStatus"] = status
    item["lastQuoteSource"] = REFERENCE_SOURCES.get(symbol, "Yahoo Finance primary")


def apply_monthly_rsp(state: Dict[str, Any], now: datetime, fx: float) -> list[str]:
    """Apply this month's RSP contribution once it's due, using the day's refreshed price/NAV.

    Allianz G&I: SGD 1,000/month, due from the 8th. IVV: SGD 1,500/month, due from
    the 22nd. Each item is only topped up once per calendar month, tracked via
    lastRspAppliedMonth, so re-running the refresh later the same month is a no-op.
    """
    month_key = now.strftime("%Y-%m")
    messages: list[str] = []

    allianz = next((r for r in state.get("rsp", []) or [] if r.get("ticker") == "Allianz G&I"), None)
    if allianz and now.day >= 8 and allianz.get("lastRspAppliedMonth") != month_key:
        price = float(allianz.get("currentPrice") or 0)
        if price > 0:
            amount = float(allianz.get("amountSgd") or 1000)
            old_qty = float(allianz.get("quantity") or 0)
            old_avg = float(allianz.get("avgCost") or price)
            units = amount / price
            new_qty = old_qty + units
            allianz["quantity"] = round(new_qty, 6)
            allianz["avgCost"] = round(((old_qty * old_avg) + amount) / new_qty, 6)
            allianz["currentValueSgd"] = round(new_qty * price, 2)
            allianz["lastRspAppliedMonth"] = month_key
            allianz["positionLog"] = "\n".join(filter(None, [
                allianz.get("positionLog", ""),
                f"{now.strftime('%Y-%m-%d')} RSP BUY {units:.4f} units @ S${price:.4f} (monthly S${amount:.0f})",
            ]))
            if allianz.get("account") == "SRS":
                state["srsCashSgd"] = round(float(state.get("srsCashSgd") or 0) - amount, 2)
            messages.append(f"Allianz RSP: added {units:.4f} units @ S${price:.4f} (S${amount:.0f} monthly contribution).")

    ivv = next((h for h in state.get("holdings", []) or [] if h.get("ticker") == "IVV"), None)
    if ivv and now.day >= 22 and ivv.get("lastRspAppliedMonth") != month_key:
        price = float(ivv.get("price") or 0)
        if price > 0:
            amount_sgd = 1500.0
            amount_usd = amount_sgd / fx if fx else amount_sgd
            old_qty = float(ivv.get("quantity") or 0)
            old_avg = float(ivv.get("avgCost") or price)
            units = amount_usd / price
            new_qty = old_qty + units
            new_avg = ((old_qty * old_avg) + amount_usd) / new_qty
            ivv["quantity"] = round(new_qty, 6)
            ivv["avgCost"] = round(new_avg, 6)
            ivv["costSgd"] = round(new_qty * new_avg * fx, 2)
            ivv["valueSgd"] = round(new_qty * price * fx, 2)
            ivv["pnlSgd"] = round(ivv["valueSgd"] - ivv["costSgd"], 2)
            ivv["lastRspAppliedMonth"] = month_key
            ivv["positionLog"] = "\n".join(filter(None, [
                ivv.get("positionLog", ""),
                f"{now.strftime('%Y-%m-%d')} RSP BUY {units:.4f} @ US${price:.2f} (monthly S${amount_sgd:.0f})",
            ]))
            messages.append(f"IVV RSP: added {units:.4f} units @ US${price:.2f} (S${amount_sgd:.0f} monthly contribution).")

    return messages


def main() -> None:
    state = load_state()

    # Capture the portfolio value before refreshing prices so the dashboard
    # Daily Move reflects the change since the previous refresh, not a stale
    # fixed baseline from the original setup.
    state["previousTotalValueSgd"] = portfolio_total_value_sgd(state)
    state.setdefault("lpx", {})["previousTotalValueUsd"] = lpx_total_value_usd(state)

    fx = fx_usd_sgd(state)
    state.setdefault("fx", {})["USD"] = round(fx, 6)
    state.setdefault("fx", {})["SGD"] = 1

    for holding in state.get("holdings", []):
        update_holding(holding, fx)

    for item in state.get("rsp", []):
        update_rsp(item, fx)

    now = datetime.now(SGT)
    rsp_messages = apply_monthly_rsp(state, now, fx)
    if rsp_messages:
        state.setdefault("history", [])
        state["history"].append({"date": now.strftime("%Y-%m-%d"), "text": " ".join(rsp_messages)})
        state["history"] = state["history"][-80:]

    for holding in state.get("lpx", {}).get("holdings", []):
        symbol = str(holding.get("quoteSymbol") or holding.get("ticker") or "").split(" /")[0].strip()
        is_new = "lastQuoteStatus" not in holding
        old_price = None if is_new else holding.get("price")
        price, status = validated_price(symbol, float(old_price) if old_price else None)
        if price:
            holding["price"] = round(price, 6)

        # LPX is displayed in USD in the dashboard. Keep local USD fields
        # in sync for easier inspection and future reporting, while the
        # frontend can still calculate from quantity * price if needed.
        qty = float(holding.get("quantity") or 0)
        avg = float(holding.get("avgCost") or 0)
        latest = float(holding.get("price") or 0)
        holding["costUsd"] = round(qty * avg, 2)
        holding["valueUsd"] = round(qty * latest, 2)
        holding["pnlUsd"] = round(holding["valueUsd"] - holding["costUsd"], 2)
        holding["lastQuoteStatus"] = status
        holding["lastQuoteSource"] = REFERENCE_SOURCES.get(symbol, "Yahoo Finance primary; manual reference if needed")

    state["asOf"] = now.strftime("%Y-%m-%d")
    state["version"] = "Portfolio Dashboard V1.1 Final Auto Refresh"
    state["quoteEvidence"] = [{
        "ticker": "AUTO PRICE REFRESH",
        "source": "Yahoo Finance via yfinance; TradingView/FSMOne kept as manual reference sources",
        "detail": f"Updated by GitHub Actions at {now.strftime('%Y-%m-%d %H:%M SGT')}. Quotes are sanity-checked against the previous saved price; abnormal or unavailable quotes keep the previous price."
    }]
    state.setdefault("updates", [])
    msg = f"Price refresh completed at {now.strftime('%Y-%m-%d %H:%M SGT')} with Yahoo primary and sanity validation."
    if not state["updates"] or state["updates"][-1] != msg:
        state["updates"].append(msg)
    state["updates"] = state["updates"][-20:]

    save_state(state)


if __name__ == "__main__":
    main()

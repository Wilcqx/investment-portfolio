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


def update_holding(holding: Dict[str, Any], fx: float) -> None:
    symbol = str(holding.get("quoteSymbol") or holding.get("ticker") or "").split(" /")[0].strip()
    old_price = holding.get("price")
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


def main() -> None:
    state = load_state()
    fx = fx_usd_sgd(state)
    state.setdefault("fx", {})["USD"] = round(fx, 6)
    state.setdefault("fx", {})["SGD"] = 1

    for holding in state.get("holdings", []):
        update_holding(holding, fx)

    for item in state.get("rsp", []):
        update_rsp(item, fx)

    for holding in state.get("lpx", {}).get("holdings", []):
        symbol = str(holding.get("quoteSymbol") or holding.get("ticker") or "").split(" /")[0].strip()
        old_price = holding.get("price")
        price, status = validated_price(symbol, float(old_price) if old_price else None)
        if price:
            holding["price"] = round(price, 6)
        holding["lastQuoteStatus"] = status
        holding["lastQuoteSource"] = REFERENCE_SOURCES.get(symbol, "Yahoo Finance primary; manual reference if needed")

    now = datetime.now(SGT)
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

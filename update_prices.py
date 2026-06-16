#!/usr/bin/env python3
"""Daily portfolio price updater.

This script updates data.js for the static Portfolio Dashboard.
Primary data source: Yahoo Finance through yfinance.
Fallback behavior: keep last saved price if a quote cannot be refreshed.

Run locally:
  pip install -r requirements.txt
  python update_prices.py
"""
from __future__ import annotations

import json
import re
from datetime import datetime, timezone, timedelta
from pathlib import Path
from typing import Any, Dict, Optional

try:
    import yfinance as yf
except Exception as exc:  # pragma: no cover
    raise SystemExit("Missing dependency yfinance. Run: pip install -r requirements.txt") from exc

DATA_PATH = Path(__file__).with_name("data.js")
PREFIX_RE = re.compile(r"^\s*window\.PORTFOLIO_STATE\s*=\s*", re.S)
SGT = timezone(timedelta(hours=8))

# Manual fallback references for assets where Yahoo may be delayed/unavailable.
FALLBACK_REFERENCES = {
    "D05.SI": "Yahoo Finance SG / TradingView SGX:D05 / FSMOne",
    "C38U.SI": "Yahoo Finance SG / TradingView SGX:C38U / FSMOne",
    "BS6.SI": "Yahoo Finance SG / TradingView SGX:BS6",
    "8YZ.SI": "Yahoo Finance SG / TradingView SGX:8YZ",
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
    """Return latest available Yahoo close/regular-market price."""
    if not symbol or symbol.upper() == "AMOVA ARK":
        return None
    try:
        ticker = yf.Ticker(symbol)
        # fast_info usually works for equities, ETFs and crypto.
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


def fx_usd_sgd(state: Dict[str, Any]) -> float:
    price = quote_price("SGD=X")
    if price and price > 0:
        return float(price)
    return float(state.get("fx", {}).get("USD") or 1.0)


def update_holding(holding: Dict[str, Any], fx: float) -> Dict[str, Any]:
    symbol = holding.get("quoteSymbol") or holding.get("ticker")
    symbol = str(symbol).split(" /")[0].strip()
    price = quote_price(symbol)
    if price is None:
        holding["lastQuoteStatus"] = "fallback: kept previous price"
        return holding

    currency = holding.get("currency", "SGD")
    qty = float(holding.get("quantity") or 0)
    avg = holding.get("avgCost")
    rate = fx if currency == "USD" else 1.0

    holding["price"] = round(price, 6)
    holding["valueSgd"] = round(qty * price * rate, 2)
    if avg is not None:
        holding["costSgd"] = round(qty * float(avg) * rate, 2)
    holding["pnlSgd"] = round(float(holding.get("valueSgd") or 0) - float(holding.get("costSgd") or 0), 2)
    holding["lastQuoteStatus"] = "updated"
    holding["lastQuoteSource"] = "Yahoo Finance"
    return holding


def update_rsp(item: Dict[str, Any], fx: float) -> Dict[str, Any]:
    symbol = item.get("quoteSymbol")
    if not symbol:
        return item
    price = quote_price(symbol)
    if price is None:
        item["lastQuoteStatus"] = "fallback: kept previous price"
        return item
    qty = float(item.get("quantity") or 0)
    item["currentPrice"] = round(price, 6)
    item["currentValueSgd"] = round(qty * price, 2)
    item["lastQuoteStatus"] = "updated"
    item["lastQuoteSource"] = "Yahoo Finance"
    return item


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
        symbol = holding.get("quoteSymbol") or holding.get("ticker")
        price = quote_price(symbol)
        if price:
            holding["price"] = round(price, 6)

    now = datetime.now(SGT)
    state["asOf"] = now.strftime("%Y-%m-%d")
    state["version"] = "Portfolio Dashboard V1.0 Auto Refresh"
    state["quoteEvidence"] = [{
        "ticker": "AUTO PRICE REFRESH",
        "source": "Yahoo Finance primary; TradingView/FSMOne manual fallback references",
        "detail": f"Updated by GitHub Actions at {now.strftime('%Y-%m-%d %H:%M SGT')}. If a quote is unavailable, last saved price is retained."
    }]
    state.setdefault("history", []).append({
        "date": now.strftime("%Y-%m-%d"),
        "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    })
    # Keep history compact enough for the website.
    state["history"] = state.get("history", [])[-60:]

    save_state(state)


if __name__ == "__main__":
    main()

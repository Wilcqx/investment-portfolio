window.PORTFOLIO_STATE = {
  "version": "Portfolio Dashboard V1.0 Auto Refresh",
  "schemaVersion": 100,
  "asOf": "2026-06-27",
  "previousTotalValueSgd": 82902.01,
  "fireTargetSgd": 300000,
  "actualCashSgd": 300000,
  "srsCashSgd": 11237,
  "fireCashflowTargetMonthly": 6000,
  "stage": "Build-up phase",
  "fx": {
    "USD": 1.29385,
    "SGD": 1
  },
  "summaryAdjustment": {
    "cost": 0,
    "value": 0,
    "pnl": 0
  },
  "rsp": [
    {
      "name": "Allianz Income and Growth CL AMi3 Dis H2-SGD",
      "ticker": "Allianz G&I",
      "quoteSymbol": "0P0000Z32L.SI",
      "isin": "LU0943347566",
      "amountSgd": 1000,
      "quantity": 1630.29,
      "avgCost": 6.791,
      "currentPrice": 7.8498,
      "currentValueSgd": 12797.45,
      "countedInFire": true,
      "account": "SRS",
      "status": "Locked",
      "lastQuoteStatus": "updated",
      "lastQuoteSource": "Yahoo Finance"
    },
    {
      "name": "IVV",
      "amountSgd": 1500,
      "countedInFire": true,
      "account": "US brokerage",
      "status": "Active"
    }
  ],
  "rspRules": [
    "Allianz Income and Growth CL AMi3 Dis H2-SGD: SGD 1,000/month via SRS, tracked inside UT and counted into the 300k FIRE build target.",
    "IVV: SGD 1,500/month RSP, invested in USD-denominated IVV, counted into the 300k FIRE build target and shown inside Holdings under RSP.",
    "Monthly RSP run: on the monthly processing date, deduct SGD 1,500 from actual platform cash for IVV and SGD 1,000 from SRS cash for Allianz, then add units at the verified latest price/NAV and append the position log."
  ],
  "cashflowDraft": [
    {
      "ticker": "DBS",
      "yield": 0.051,
      "source": "Yahoo Finance D05.SI",
      "note": "Forward dividend & yield."
    },
    {
      "ticker": "CICT",
      "yield": 0.0665,
      "source": "Yahoo Finance C38U.SI",
      "note": "Forward dividend & yield."
    },
    {
      "ticker": "YZJ Shipbuilding",
      "yield": 0.0556,
      "source": "Yahoo Finance BS6.SI",
      "note": "Forward dividend & yield."
    },
    {
      "ticker": "YZJ Maritime",
      "yield": 0.0079,
      "source": "Yahoo Finance 8YZ.SI",
      "note": "Below 2% threshold; ignored in cashflow draft."
    },
    {
      "ticker": "MSFT",
      "yield": 0.0091,
      "source": "Yahoo Finance MSFT",
      "note": "Below 2% threshold; ignored in cashflow draft."
    },
    {
      "ticker": "NVDA",
      "yield": 0.0047,
      "source": "Yahoo Finance NVDA",
      "note": "Below 2% threshold; ignored in cashflow draft."
    },
    {
      "ticker": "MCD",
      "yield": 0.026,
      "source": "Yahoo Finance MCD",
      "note": "Forward dividend & yield."
    },
    {
      "ticker": "IVV",
      "yield": 0.0108,
      "source": "Yahoo Finance IVV",
      "note": "Below 2% threshold; ignored in cashflow draft."
    },
    {
      "ticker": "Allianz G&I",
      "yield": 0.0713,
      "source": "FSMOne ALZ210 / Yahoo if available",
      "note": "Monthly income fund reference."
    },
    {
      "ticker": "AMOVA ARK",
      "yield": 0,
      "source": "Manual",
      "note": "RSP stopped; no cashflow counted in draft."
    }
  ],
  "targetPlan": [
    {
      "category": "Index",
      "targetSgd": 100000,
      "note": "Core SP500 / IVV engine"
    },
    {
      "category": "Bank",
      "targetSgd": 85000,
      "note": "DBS plus future OCBC sleeve"
    },
    {
      "category": "US Tech",
      "targetSgd": 50000,
      "note": "MSFT, GOOGL, NVDA, PLTR"
    },
    {
      "category": "US Defensive",
      "targetSgd": 10000,
      "note": "MCD / defensive consumer"
    },
    {
      "category": "Cyclical",
      "targetSgd": 30000,
      "note": "YZJ shipbuilding and maritime"
    },
    {
      "category": "REIT",
      "targetSgd": 10000,
      "note": "CICT income sleeve"
    },
    {
      "category": "Crypto",
      "targetSgd": 15000,
      "note": "BTC and ETH satellite"
    }
  ],
  "quoteEvidence": [
    {
      "ticker": "AUTO PRICE REFRESH",
      "source": "Yahoo Finance primary; TradingView/FSMOne manual fallback references",
      "detail": "Updated by GitHub Actions at 2026-06-27 00:33 SGT. If a quote is unavailable, last saved price is retained."
    }
  ],
  "notesByDate": {},
  "checks": {},
  "holdings": [
    {
      "id": "DBS",
      "ticker": "DBS",
      "name": "DBS Group Holdings",
      "quoteSymbol": "D05.SI",
      "category": "Bank",
      "market": "SG",
      "currency": "SGD",
      "quantity": 300,
      "avgCost": 49,
      "price": 66.07,
      "costSgd": 14700.0,
      "valueSgd": 19821.0,
      "pnlSgd": 5121.0,
      "completion": 12,
      "notes": "Cash-flow core",
      "positionLog": "",
      "lastQuoteStatus": "updated",
      "lastQuoteSource": "Yahoo Finance"
    },
    {
      "id": "CICT",
      "ticker": "CICT",
      "name": "CapitaLand Integrated Commercial Trust",
      "quoteSymbol": "C38U.SI",
      "category": "REIT",
      "market": "SG",
      "currency": "SGD",
      "quantity": 3000,
      "avgCost": 2.18,
      "price": 2.38,
      "costSgd": 6540.0,
      "valueSgd": 7140.0,
      "pnlSgd": 600.0,
      "completion": 44,
      "notes": "Singapore REIT sleeve",
      "positionLog": "",
      "lastQuoteStatus": "updated",
      "lastQuoteSource": "Yahoo Finance"
    },
    {
      "id": "YZJ Shipbuilding",
      "ticker": "YZJ Shipbuilding",
      "name": "Yangzijiang Shipbuilding",
      "quoteSymbol": "BS6.SI",
      "category": "Cyclical",
      "market": "SG",
      "currency": "SGD",
      "quantity": 1500,
      "avgCost": 3.41,
      "price": 3.5,
      "costSgd": 5115.0,
      "valueSgd": 5250.0,
      "pnlSgd": 135.0,
      "completion": 34,
      "notes": "Shipbuilding cycle",
      "positionLog": "",
      "lastQuoteStatus": "updated",
      "lastQuoteSource": "Yahoo Finance"
    },
    {
      "id": "YZJ Maritime",
      "ticker": "YZJ Maritime",
      "name": "Yangzijiang Maritime Development Ltd.",
      "quoteSymbol": "8YZ.SI",
      "category": "Cyclical",
      "market": "SG",
      "currency": "SGD",
      "quantity": 6000,
      "avgCost": 0.609,
      "price": 0.59,
      "costSgd": 3654.0,
      "valueSgd": 3540.0,
      "pnlSgd": -114.0,
      "completion": 18,
      "notes": "Yahoo 8YZ.SI and TradingView SGX:8YZ validated",
      "positionLog": "",
      "quoteUrl": "https://www.tradingview.com/symbols/SGX-8YZ/",
      "lastQuoteStatus": "updated",
      "lastQuoteSource": "Yahoo Finance"
    },
    {
      "id": "MSFT",
      "ticker": "MSFT",
      "name": "Microsoft",
      "quoteSymbol": "MSFT",
      "category": "US Tech",
      "market": "US",
      "currency": "USD",
      "quantity": 5,
      "avgCost": 395,
      "price": 368.480011,
      "costSgd": 2555.35,
      "valueSgd": 2383.79,
      "pnlSgd": -171.56,
      "completion": 10,
      "notes": "AI platform compounder",
      "positionLog": "",
      "lastQuoteStatus": "updated",
      "lastQuoteSource": "Yahoo Finance"
    },
    {
      "id": "GOOGL",
      "ticker": "GOOGL",
      "name": "Google Class A",
      "quoteSymbol": "GOOGL",
      "category": "US Tech",
      "market": "US",
      "currency": "USD",
      "quantity": 5,
      "avgCost": 351,
      "price": 343.529999,
      "costSgd": 2270.71,
      "valueSgd": 2222.38,
      "pnlSgd": -48.33,
      "completion": 9,
      "notes": "Valuation recovery",
      "positionLog": "",
      "lastQuoteStatus": "updated",
      "lastQuoteSource": "Yahoo Finance"
    },
    {
      "id": "NVDA",
      "ticker": "NVDA",
      "name": "NVIDIA",
      "quoteSymbol": "NVDA",
      "category": "US Tech",
      "market": "US",
      "currency": "USD",
      "quantity": 13,
      "avgCost": 109,
      "price": 194.380005,
      "costSgd": 1833.39,
      "valueSgd": 3269.48,
      "pnlSgd": 1436.09,
      "completion": 7,
      "notes": "AI leader",
      "positionLog": "",
      "lastQuoteStatus": "updated",
      "lastQuoteSource": "Yahoo Finance"
    },
    {
      "id": "PLTR",
      "ticker": "PLTR",
      "name": "Palantir Technologies",
      "quoteSymbol": "PLTR",
      "category": "US Tech",
      "market": "US",
      "currency": "USD",
      "quantity": 4,
      "avgCost": 129,
      "price": 113.529999,
      "costSgd": 667.63,
      "valueSgd": 587.56,
      "pnlSgd": -80.07,
      "completion": 9,
      "notes": "High growth, high volatility",
      "positionLog": "",
      "lastQuoteStatus": "updated",
      "lastQuoteSource": "Yahoo Finance"
    },
    {
      "id": "MCD",
      "ticker": "MCD",
      "name": "McDonald's",
      "quoteSymbol": "MCD",
      "category": "US Defensive",
      "market": "US",
      "currency": "USD",
      "quantity": 17,
      "avgCost": 283,
      "price": 268.959991,
      "costSgd": 6224.71,
      "valueSgd": 5915.9,
      "pnlSgd": -308.81,
      "completion": 62,
      "notes": "Defensive consumer",
      "positionLog": "",
      "lastQuoteStatus": "updated",
      "lastQuoteSource": "Yahoo Finance"
    },
    {
      "id": "IVV",
      "ticker": "IVV",
      "name": "iShares Core S&P 500 ETF",
      "quoteSymbol": "IVV",
      "category": "Index",
      "market": "US",
      "currency": "USD",
      "quantity": 14.345,
      "avgCost": 556.461,
      "price": 737.809998,
      "costSgd": 10328.07,
      "valueSgd": 13693.96,
      "pnlSgd": 3365.89,
      "completion": 12,
      "notes": "Core global equity engine · IVV RSP SGD 1,500/month · USD product · counts toward 300k",
      "positionLog": "",
      "lastQuoteStatus": "updated",
      "lastQuoteSource": "Yahoo Finance"
    },
    {
      "id": "AMOVA ARK",
      "ticker": "AMOVA ARK",
      "name": "AMOVA ARK Disruptive Innovation B USD",
      "quoteSymbol": "AMOVA ARK",
      "category": "RSP",
      "market": "Fund",
      "currency": "USD",
      "quantity": 54.93,
      "avgCost": 29.925,
      "price": 17.54,
      "costSgd": 2109.13,
      "valueSgd": 1236.23,
      "pnlSgd": -872.9,
      "completion": 0,
      "notes": "Formerly Nikko AM · RSP stopped · loss position",
      "positionLog": "",
      "lastQuoteStatus": "fallback: kept previous price"
    },
    {
      "id": "BTC",
      "ticker": "BTC",
      "name": "Bitcoin",
      "quoteSymbol": "BTC-USD",
      "category": "Crypto",
      "market": "Crypto",
      "currency": "USD",
      "quantity": 0.0405,
      "avgCost": 99288,
      "price": 60039.988281,
      "costSgd": 5202.78,
      "valueSgd": 3146.15,
      "pnlSgd": -2056.63,
      "completion": 10,
      "notes": "Small non-correlated sleeve",
      "positionLog": "",
      "lastQuoteStatus": "updated",
      "lastQuoteSource": "Yahoo Finance"
    },
    {
      "id": "ETH",
      "ticker": "ETH",
      "name": "Ethereum",
      "quoteSymbol": "ETH-USD",
      "category": "Crypto",
      "market": "Crypto",
      "currency": "USD",
      "quantity": 0.2568,
      "avgCost": 3652,
      "price": 1577.670044,
      "costSgd": 1213.42,
      "valueSgd": 524.2,
      "pnlSgd": -689.22,
      "completion": 8,
      "notes": "Small crypto satellite",
      "positionLog": "",
      "lastQuoteStatus": "updated",
      "lastQuoteSource": "Yahoo Finance"
    }
  ],
  "lpx": {
    "initialCashUsd": 9983,
    "previousTotalValueUsd": 5264.95,
    "holdings": [
      {
        "id": "lpx-GOOGL",
        "virtual": true,
        "ticker": "GOOGL",
        "name": "Google Class A",
        "quoteSymbol": "GOOGL",
        "category": "WATCH",
        "market": "US",
        "currency": "USD",
        "quantity": 5,
        "avgCost": 350,
        "price": 343.529999,
        "completion": 0,
        "notes": "LPX observation account"
      },
      {
        "id": "lpx-MCD",
        "virtual": true,
        "ticker": "MCD",
        "name": "McDonald's",
        "quoteSymbol": "MCD",
        "category": "WATCH",
        "market": "US",
        "currency": "USD",
        "quantity": 5,
        "avgCost": 282.18,
        "price": 268.959991,
        "completion": 0,
        "notes": "LPX observation account"
      },
      {
        "id": "lpx-MSFT",
        "virtual": true,
        "ticker": "MSFT",
        "name": "Microsoft",
        "quoteSymbol": "MSFT",
        "category": "WATCH",
        "market": "US",
        "currency": "USD",
        "quantity": 5,
        "avgCost": 395,
        "price": 368.480011,
        "completion": 0,
        "notes": "LPX observation account"
      }
    ]
  },
  "history": [
    {
      "date": "2026-06-16",
      "text": "Auto-update version prepared: holdings data separated into data.js; GitHub Actions can refresh market prices daily; FIRE target S$300,000."
    },
    {
      "date": "2026-06-16",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-16",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-17",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-18",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-18",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-19",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-20",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-20",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-20",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-21",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-21",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-23",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-23",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-23",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-24",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-24",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-25",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-25",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-26",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-26",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-27",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    }
  ],
  "updates": [
    "Auto-update version: holdings are user-controlled; prices are refreshed by scheduled GitHub Action using Yahoo Finance primary data source."
  ]
};

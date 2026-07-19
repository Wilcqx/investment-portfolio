window.PORTFOLIO_STATE = {
  "version": "Portfolio Dashboard V1.1 Final Auto Refresh",
  "schemaVersion": 101,
  "asOf": "2026-07-20",
  "previousTotalValueSgd": 102892.83,
  "fireTargetSgd": 300000,
  "actualCashSgd": 300000,
  "srsCashSgd": 10237,
  "fireCashflowTargetMonthly": 6000,
  "stage": "Build-up phase",
  "fx": {
    "USD": 1.2915,
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
      "quantity": 1767.89249,
      "avgCost": 6.82691,
      "currentPrice": 7.6855,
      "currentValueSgd": 13587.14,
      "countedInFire": true,
      "account": "SRS",
      "status": "Locked",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; FSMOne fund page as manual reference",
      "lastRspAppliedMonth": "2026-07",
      "positionLog": "2026-07-08 RSP BUY 127.5185 units @ S$7.8420 (monthly S$1000)"
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
      "source": "Yahoo Finance via yfinance; TradingView/FSMOne kept as manual reference sources",
      "detail": "Updated by GitHub Actions at 2026-07-20 02:50 SGT. Quotes are sanity-checked against the previous saved price; abnormal or unavailable quotes keep the previous price."
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
      "avgCost": 49.82,
      "price": 71.959999,
      "costSgd": 14946.0,
      "valueSgd": 21588.0,
      "pnlSgd": 6642.0,
      "completion": 17.58,
      "notes": "Cash-flow core",
      "positionLog": "",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView SGX:D05 and FSMOne as manual reference"
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
      "price": 2.47,
      "costSgd": 6540.0,
      "valueSgd": 7410.0,
      "pnlSgd": 870.0,
      "completion": 44,
      "notes": "Singapore REIT sleeve",
      "positionLog": "",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView SGX:C38U and FSMOne as manual reference"
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
      "price": 3.63,
      "costSgd": 5115.0,
      "valueSgd": 5445.0,
      "pnlSgd": 330.0,
      "completion": 34,
      "notes": "Shipbuilding cycle",
      "positionLog": "",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView SGX:BS6 as manual reference"
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
      "price": 0.57,
      "costSgd": 3654.0,
      "valueSgd": 3420.0,
      "pnlSgd": -234.0,
      "completion": 18,
      "notes": "Yahoo 8YZ.SI and TradingView SGX:8YZ validated",
      "positionLog": "",
      "quoteUrl": "https://www.tradingview.com/symbols/SGX-8YZ/",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView SGX:8YZ as manual reference"
    },
    {
      "id": "MSFT",
      "ticker": "MSFT",
      "name": "Microsoft",
      "quoteSymbol": "MSFT",
      "category": "US Tech",
      "market": "US",
      "currency": "USD",
      "quantity": 15,
      "avgCost": 365,
      "price": 393.820007,
      "costSgd": 7070.96,
      "valueSgd": 7629.28,
      "pnlSgd": 558.32,
      "completion": 35.35,
      "notes": "AI platform compounder",
      "positionLog": "2026-07-04 BUY 10 @ US$350.00",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView/FSMOne manual check if needed"
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
      "price": 346.769989,
      "costSgd": 2266.58,
      "valueSgd": 2239.27,
      "pnlSgd": -27.31,
      "completion": 22.66,
      "notes": "Valuation recovery",
      "positionLog": "",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView/FSMOne manual check if needed"
    },
    {
      "id": "NVDA",
      "ticker": "NVDA",
      "name": "NVIDIA",
      "quoteSymbol": "NVDA",
      "category": "US Tech",
      "market": "US",
      "currency": "USD",
      "quantity": 23,
      "avgCost": 147.2,
      "price": 202.809998,
      "costSgd": 4372.5,
      "valueSgd": 6024.37,
      "pnlSgd": 1651.87,
      "completion": 21.86,
      "notes": "AI leader",
      "positionLog": "2026-06-25 BUY 10 @ US$195.00",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView/FSMOne manual check if needed"
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
      "avgCost": 129.79,
      "price": 132.380005,
      "costSgd": 670.5,
      "valueSgd": 683.88,
      "pnlSgd": 13.38,
      "completion": 13.41,
      "notes": "High growth, high volatility",
      "positionLog": "",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView/FSMOne manual check if needed"
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
      "avgCost": 282.27,
      "price": 267.709991,
      "costSgd": 6197.38,
      "valueSgd": 5877.71,
      "pnlSgd": -319.67,
      "completion": 61.97,
      "notes": "Defensive consumer",
      "positionLog": "",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView/FSMOne manual check if needed"
    },
    {
      "id": "IVV",
      "ticker": "IVV",
      "name": "iShares Core S&P 500 ETF",
      "quoteSymbol": "IVV",
      "category": "Index",
      "market": "US",
      "currency": "USD",
      "quantity": 24.5782,
      "avgCost": 632.954,
      "price": 746.719971,
      "costSgd": 20091.7,
      "valueSgd": 23702.94,
      "pnlSgd": 3611.24,
      "completion": 20.09,
      "notes": "Core global equity engine · IVV RSP SGD 1,500/month · USD product · counts toward 300k",
      "positionLog": "2026-06-23 BUY 4 @ US$737.09999\n2026-07-04 BUY 4 @ US$737.92",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView/FSMOne manual check if needed"
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
      "price": 18.35,
      "costSgd": 2122.73,
      "valueSgd": 1301.66,
      "pnlSgd": -821.07,
      "completion": 0,
      "notes": "Formerly Nikko AM · RSP stopped · loss position",
      "positionLog": "",
      "lastQuoteStatus": "fallback: quote unavailable; kept previous price",
      "lastQuoteSource": "Yahoo Finance attempted; previous saved price retained"
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
      "price": 64366.890625,
      "costSgd": 5193.33,
      "valueSgd": 3366.76,
      "pnlSgd": -1826.57,
      "completion": 10,
      "notes": "Small non-correlated sleeve",
      "positionLog": "",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView/FSMOne manual check if needed"
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
      "price": 1858.23999,
      "costSgd": 1211.21,
      "valueSgd": 616.3,
      "pnlSgd": -594.91,
      "completion": 8,
      "notes": "Small crypto satellite",
      "positionLog": "",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView/FSMOne manual check if needed"
    }
  ],
  "lpx": {
    "initialCashUsd": 9983,
    "previousTotalValueUsd": 29528.94,
    "holdings": [
      {
        "id": "lpx-GOOGL",
        "virtual": true,
        "ticker": "GOOGL",
        "name": "Google Class A",
        "quoteSymbol": "GOOGL",
        "category": "US Tech",
        "market": "US",
        "currency": "USD",
        "quantity": 5,
        "avgCost": 350,
        "price": 346.769989,
        "completion": 0,
        "notes": "LPX observation account",
        "quoteUrl": "https://sg.finance.yahoo.com/quote/GOOGL",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 1750.0,
        "valueUsd": 1733.85,
        "pnlUsd": -16.15
      },
      {
        "id": "lpx-MCD",
        "virtual": true,
        "ticker": "MCD",
        "name": "McDonald's",
        "quoteSymbol": "MCD",
        "category": "US Defensive",
        "market": "US",
        "currency": "USD",
        "quantity": 5,
        "avgCost": 282.18,
        "price": 267.709991,
        "completion": 0,
        "notes": "LPX observation account",
        "quoteUrl": "https://sg.finance.yahoo.com/quote/MCD",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 1410.9,
        "valueUsd": 1338.55,
        "pnlUsd": -72.35
      },
      {
        "id": "lpx-MSFT",
        "virtual": true,
        "ticker": "MSFT",
        "name": "Microsoft",
        "quoteSymbol": "MSFT",
        "category": "US Tech",
        "market": "US",
        "currency": "USD",
        "quantity": 5,
        "avgCost": 395,
        "price": 393.820007,
        "completion": 0,
        "notes": "LPX observation account",
        "quoteUrl": "https://sg.finance.yahoo.com/quote/MSFT",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 1975.0,
        "valueUsd": 1969.1,
        "pnlUsd": -5.9
      },
      {
        "id": "lpx-IVV",
        "virtual": false,
        "ticker": "IVV",
        "name": "iShares Core S&P 500 ETF",
        "quoteSymbol": "IVV",
        "category": "Index",
        "market": "US",
        "currency": "USD",
        "quantity": 2,
        "avgCost": 736.56,
        "price": 746.719971,
        "completion": 0,
        "notes": "LPX holding account",
        "positionLog": "2026-06-23 BUY 2 @ US$735.56",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 1473.12,
        "valueUsd": 1493.44,
        "pnlUsd": 20.32
      },
      {
        "id": "lpx-BABA",
        "virtual": false,
        "fundedExternally": true,
        "ticker": "BABA",
        "name": "BABA",
        "quoteSymbol": "BABA",
        "category": "US Tech",
        "market": "US",
        "currency": "USD",
        "quantity": 200,
        "avgCost": 54.7,
        "price": 114.970001,
        "completion": 0,
        "notes": "Company-granted stock (RSU/ESOP), not funded from tracked cash pool",
        "positionLog": "2026-07-09 BUY 200 @ US$54.7",
        "costUsd": 10940.0,
        "valueUsd": 22994.0,
        "pnlUsd": 12054.0,
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed"
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
    },
    {
      "date": "2026-06-27",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-27",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-28",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-28",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-29",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-30",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-30",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-07-01",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-07-01",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-07-02",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-07-02",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-07-03",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-07-03",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-07-03",
      "text": "Automated price refresh completed via GitHub Actions. Holdings unchanged; prices, market values and P/L refreshed from latest available Yahoo Finance data."
    },
    {
      "date": "2026-06-23",
      "text": "Main Portfolio BUY IVV 4 @ US$737.09999; LPX BUY IVV 2 @ US$735.56."
    },
    {
      "date": "2026-06-25",
      "text": "Main Portfolio BUY NVDA 10 @ US$195.00. NVDA total 23 shares; average cost US$146.39."
    },
    {
      "date": "2026-07-04",
      "text": "Main Portfolio BUY MSFT 10 @ US$350.00 and BUY IVV 4 @ US$737.92."
    },
    {
      "date": "2026-07-07",
      "text": "Manual reconciliation against broker app: corrected avgCost for DBS/NVDA/PLTR/MCD, updated IVV (main) to 24.5782 units @ 632.954, updated Allianz RSP to 1640.374 units @ 6.748 (Jul RSP top-up), corrected LPX IVV avgCost to 736.56, refreshed all prices to broker snapshot. Daily Move baseline reset to reflect only market movement going forward."
    },
    {
      "date": "2026-07-08",
      "text": "Allianz RSP: added 127.5185 units @ S$7.8420 (S$1000 monthly contribution)."
    },
    {
      "date": "2026-07-09",
      "text": "Manual correction: deducted SGD 1,000 from SRS cash balance for the July Allianz RSP top-up that was auto-applied on 2026-07-08, before the SRS-deduction logic existed."
    },
    {
      "date": "2026-07-09",
      "text": "LPX BUY BABA 200 @ 54.7. (新建持仓)"
    }
  ],
  "updates": [
    "Price refresh completed at 2026-07-18 09:26 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-18 12:39 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-18 15:26 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-18 17:15 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-18 18:55 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-18 20:51 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-18 22:43 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-19 00:44 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-19 02:46 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-19 04:37 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-19 06:38 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-19 09:43 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-19 13:11 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-19 15:58 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-19 17:50 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-19 19:04 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-19 20:53 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-19 22:47 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-20 00:44 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-07-20 02:50 SGT with Yahoo primary and sanity validation."
  ]
};

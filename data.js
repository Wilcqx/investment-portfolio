window.PORTFOLIO_STATE = {
  "version": "Portfolio Dashboard V1.1 Final Auto Refresh",
  "schemaVersion": 101,
  "asOf": "2026-08-04",
  "previousTotalValueSgd": 107935.06,
  "fireTargetSgd": 300000,
  "actualCashSgd": 300000,
  "srsCashSgd": 10237,
  "fireCashflowTargetMonthly": 6000,
  "stage": "Build-up phase",
  "fx": {
    "USD": 1.28242,
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
      "currentPrice": 7.6832,
      "currentValueSgd": 13583.07,
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
      "detail": "Updated by GitHub Actions at 2026-08-04 19:55 SGT. Quotes are sanity-checked against the previous saved price; abnormal or unavailable quotes keep the previous price."
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
      "price": 74.5,
      "costSgd": 14946.0,
      "valueSgd": 22350.0,
      "pnlSgd": 7404.0,
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
      "price": 2.49,
      "costSgd": 6540.0,
      "valueSgd": 7470.0,
      "pnlSgd": 930.0,
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
      "price": 3.96,
      "costSgd": 5115.0,
      "valueSgd": 5940.0,
      "pnlSgd": 825.0,
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
      "price": 0.6,
      "costSgd": 3654.0,
      "valueSgd": 3600.0,
      "pnlSgd": -54.0,
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
      "price": 487.65,
      "costSgd": 7021.25,
      "valueSgd": 9380.58,
      "pnlSgd": 2359.33,
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
      "price": 373.51,
      "costSgd": 2250.65,
      "valueSgd": 2394.98,
      "pnlSgd": 144.33,
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
      "price": 206.64,
      "costSgd": 4341.76,
      "valueSgd": 6094.98,
      "pnlSgd": 1753.22,
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
      "price": 125.65,
      "costSgd": 665.78,
      "valueSgd": 644.54,
      "pnlSgd": -21.24,
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
      "price": 265.23,
      "costSgd": 6153.81,
      "valueSgd": 5782.32,
      "pnlSgd": -371.49,
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
      "quantity": 26.122259,
      "avgCost": 640.000732,
      "price": 761.32,
      "costSgd": 21439.84,
      "valueSgd": 25504.0,
      "pnlSgd": 4064.16,
      "completion": 20.09,
      "notes": "Core global equity engine · IVV RSP SGD 1,500/month · USD product · counts toward 300k",
      "positionLog": "2026-06-23 BUY 4 @ US$737.09999\n2026-07-04 BUY 4 @ US$737.92\n2026-07-22 RSP BUY 1.5441 @ US$752.17 (monthly S$1500)",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView/FSMOne manual check if needed",
      "lastRspAppliedMonth": "2026-07"
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
      "price": 63879.66,
      "costSgd": 5156.82,
      "valueSgd": 3317.78,
      "pnlSgd": -1839.04,
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
      "price": 1871.05,
      "costSgd": 1202.7,
      "valueSgd": 616.18,
      "pnlSgd": -586.52,
      "completion": 8,
      "notes": "Small crypto satellite",
      "positionLog": "",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView/FSMOne manual check if needed"
    }
  ],
  "lpx": {
    "initialCashUsd": 9983,
    "previousTotalValueUsd": 34898.55,
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
        "price": 373.51,
        "completion": 0,
        "notes": "LPX observation account",
        "quoteUrl": "https://sg.finance.yahoo.com/quote/GOOGL",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 1750.0,
        "valueUsd": 1867.55,
        "pnlUsd": 117.55
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
        "price": 265.23,
        "completion": 0,
        "notes": "LPX observation account",
        "quoteUrl": "https://sg.finance.yahoo.com/quote/MCD",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 1410.9,
        "valueUsd": 1326.15,
        "pnlUsd": -84.75
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
        "price": 487.65,
        "completion": 0,
        "notes": "LPX observation account",
        "quoteUrl": "https://sg.finance.yahoo.com/quote/MSFT",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 1975.0,
        "valueUsd": 2438.25,
        "pnlUsd": 463.25
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
        "quantity": 5,
        "avgCost": 743.58,
        "price": 761.32,
        "completion": 0,
        "notes": "LPX holding account",
        "positionLog": "2026-06-23 BUY 2 @ US$735.56\n2026-08-04 BUY 3 @ US$748.26",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 3717.9,
        "valueUsd": 3806.6,
        "pnlUsd": 88.7
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
        "price": 127.3,
        "completion": 0,
        "notes": "Company-granted stock (RSU/ESOP), not funded from tracked cash pool",
        "positionLog": "2026-07-09 BUY 200 @ US$54.7",
        "costUsd": 10940.0,
        "valueUsd": 25460.0,
        "pnlUsd": 14520.0,
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
    },
    {
      "date": "2026-07-22",
      "text": "IVV RSP: added 1.5441 units @ US$752.17 (S$1500 monthly contribution)."
    },
    {
      "date": "2026-08-04",
      "text": "LPX BUY IVV 3 @ 748.26."
    }
  ],
  "updates": [
    "Price refresh completed at 2026-08-02 19:10 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-02 20:58 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-02 22:53 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-03 00:46 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-03 02:54 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-03 04:42 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-03 06:44 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-03 09:51 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-03 13:32 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-03 17:21 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-03 20:49 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-04 00:14 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-04 03:18 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-04 04:54 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-04 06:52 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-04 09:26 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-04 12:54 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-04 14:00 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-04 16:19 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-04 19:55 SGT with Yahoo primary and sanity validation."
  ]
};

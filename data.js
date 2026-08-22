window.PORTFOLIO_STATE = {
  "version": "Portfolio Dashboard V1.1 Final Auto Refresh",
  "schemaVersion": 101,
  "asOf": "2026-08-22",
  "previousTotalValueSgd": 112733.2,
  "fireTargetSgd": 300000,
  "actualCashSgd": 300000,
  "srsCashSgd": 9237.0,
  "fireCashflowTargetMonthly": 6000,
  "stage": "Build-up phase",
  "fx": {
    "USD": 1.2693,
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
      "quantity": 1896.463551,
      "avgCost": 6.891376,
      "currentPrice": 7.6679,
      "currentValueSgd": 14541.89,
      "countedInFire": true,
      "account": "SRS",
      "status": "Locked",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; FSMOne fund page as manual reference",
      "lastRspAppliedMonth": "2026-08",
      "positionLog": "2026-07-08 RSP BUY 127.5185 units @ S$7.8420 (monthly S$1000)\n2026-08-08 RSP BUY 128.5711 units @ S$7.7778 (monthly S$1000)"
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
      "detail": "Updated by GitHub Actions at 2026-08-22 12:22 SGT. Quotes are sanity-checked against the previous saved price; abnormal or unavailable quotes keep the previous price."
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
      "price": 76.0,
      "costSgd": 14946.0,
      "valueSgd": 22800.0,
      "pnlSgd": 7854.0,
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
      "price": 2.4,
      "costSgd": 6540.0,
      "valueSgd": 7200.0,
      "pnlSgd": 660.0,
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
      "price": 4.76,
      "costSgd": 5115.0,
      "valueSgd": 7140.0,
      "pnlSgd": 2025.0,
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
      "price": 0.58,
      "costSgd": 3654.0,
      "valueSgd": 3480.0,
      "pnlSgd": -174.0,
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
      "price": 483.24,
      "costSgd": 6949.42,
      "valueSgd": 9200.65,
      "pnlSgd": 2251.23,
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
      "price": 344.82,
      "costSgd": 2227.62,
      "valueSgd": 2188.4,
      "pnlSgd": -39.22,
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
      "price": 214.72,
      "costSgd": 4297.34,
      "valueSgd": 6268.51,
      "pnlSgd": 1971.17,
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
      "price": 179.94,
      "costSgd": 658.97,
      "valueSgd": 913.59,
      "pnlSgd": 254.62,
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
      "price": 270.95,
      "costSgd": 6090.85,
      "valueSgd": 5846.59,
      "pnlSgd": -244.26,
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
      "quantity": 27.657585,
      "avgCost": 647.19837,
      "price": 769.31,
      "costSgd": 22720.4,
      "valueSgd": 27007.22,
      "pnlSgd": 4286.82,
      "completion": 20.09,
      "notes": "Core global equity engine · IVV RSP SGD 1,500/month · USD product · counts toward 300k",
      "positionLog": "2026-06-23 BUY 4 @ US$737.09999\n2026-07-04 BUY 4 @ US$737.92\n2026-07-22 RSP BUY 1.5441 @ US$752.17 (monthly S$1500)\n2026-08-22 RSP BUY 1.5353 @ US$769.66 (monthly S$1500)",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView/FSMOne manual check if needed",
      "lastRspAppliedMonth": "2026-08"
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
      "price": 78371.13,
      "costSgd": 5104.06,
      "valueSgd": 4028.8,
      "pnlSgd": -1075.26,
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
      "price": 2510.84,
      "costSgd": 1190.39,
      "valueSgd": 818.42,
      "pnlSgd": -371.97,
      "completion": 8,
      "notes": "Small crypto satellite",
      "positionLog": "",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView/FSMOne manual check if needed"
    }
  ],
  "lpx": {
    "initialCashUsd": 9983,
    "previousTotalValueUsd": 33209.6,
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
        "price": 344.82,
        "completion": 0,
        "notes": "LPX observation account",
        "quoteUrl": "https://sg.finance.yahoo.com/quote/GOOGL",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 1750.0,
        "valueUsd": 1724.1,
        "pnlUsd": -25.9
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
        "price": 270.95,
        "completion": 0,
        "notes": "LPX observation account",
        "quoteUrl": "https://sg.finance.yahoo.com/quote/MCD",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 1410.9,
        "valueUsd": 1354.75,
        "pnlUsd": -56.15
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
        "price": 483.24,
        "completion": 0,
        "notes": "LPX observation account",
        "quoteUrl": "https://sg.finance.yahoo.com/quote/MSFT",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 1975.0,
        "valueUsd": 2416.2,
        "pnlUsd": 441.2
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
        "price": 769.31,
        "completion": 0,
        "notes": "LPX holding account",
        "positionLog": "2026-06-23 BUY 2 @ US$735.56\n2026-08-04 BUY 3 @ US$748.26",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 3717.9,
        "valueUsd": 3846.55,
        "pnlUsd": 128.65
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
        "price": 119.34,
        "completion": 0,
        "notes": "Company-granted stock (RSU/ESOP), not funded from tracked cash pool",
        "positionLog": "2026-07-09 BUY 200 @ US$54.7",
        "costUsd": 10940.0,
        "valueUsd": 23868.0,
        "pnlUsd": 12928.0,
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
    },
    {
      "date": "2026-08-08",
      "text": "Allianz RSP: added 128.5711 units @ S$7.7778 (S$1000 monthly contribution)."
    },
    {
      "date": "2026-08-22",
      "text": "IVV RSP: added 1.5353 units @ US$769.66 (S$1500 monthly contribution)."
    }
  ],
  "updates": [
    "Price refresh completed at 2026-08-20 22:25 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-21 00:22 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-21 02:22 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-21 04:17 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-21 06:16 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-21 08:40 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-21 10:54 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-21 12:28 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-21 14:27 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-21 16:26 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-21 18:19 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-21 20:25 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-21 22:24 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-22 00:20 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-22 02:22 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-22 04:14 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-22 06:12 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-22 08:38 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-22 10:45 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-22 12:22 SGT with Yahoo primary and sanity validation."
  ]
};

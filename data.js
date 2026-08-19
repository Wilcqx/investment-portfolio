window.PORTFOLIO_STATE = {
  "version": "Portfolio Dashboard V1.1 Final Auto Refresh",
  "schemaVersion": 101,
  "asOf": "2026-08-19",
  "previousTotalValueSgd": 110809.29,
  "fireTargetSgd": 300000,
  "actualCashSgd": 300000,
  "srsCashSgd": 9237.0,
  "fireCashflowTargetMonthly": 6000,
  "stage": "Build-up phase",
  "fx": {
    "USD": 1.27816,
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
      "currentPrice": 7.7903,
      "currentValueSgd": 14774.02,
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
      "detail": "Updated by GitHub Actions at 2026-08-19 08:37 SGT. Quotes are sanity-checked against the previous saved price; abnormal or unavailable quotes keep the previous price."
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
      "price": 75.72,
      "costSgd": 14946.0,
      "valueSgd": 22716.0,
      "pnlSgd": 7770.0,
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
      "price": 2.39,
      "costSgd": 6540.0,
      "valueSgd": 7170.0,
      "pnlSgd": 630.0,
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
      "price": 4.7,
      "costSgd": 5115.0,
      "valueSgd": 7050.0,
      "pnlSgd": 1935.0,
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
      "price": 0.585,
      "costSgd": 3654.0,
      "valueSgd": 3510.0,
      "pnlSgd": -144.0,
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
      "price": 481.63,
      "costSgd": 6997.93,
      "valueSgd": 9234.0,
      "pnlSgd": 2236.07,
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
      "price": 344.2,
      "costSgd": 2243.17,
      "valueSgd": 2199.71,
      "pnlSgd": -43.46,
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
      "price": 219.74,
      "costSgd": 4327.34,
      "valueSgd": 6459.85,
      "pnlSgd": 2132.51,
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
      "price": 171.54,
      "costSgd": 663.57,
      "valueSgd": 877.02,
      "pnlSgd": 213.45,
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
      "price": 266.99,
      "costSgd": 6133.37,
      "valueSgd": 5801.35,
      "pnlSgd": -332.02,
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
      "price": 770.98,
      "costSgd": 21368.62,
      "valueSgd": 25741.81,
      "pnlSgd": 4373.19,
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
      "price": 64588.15,
      "costSgd": 5139.69,
      "valueSgd": 3343.44,
      "pnlSgd": -1796.25,
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
      "price": 1915.22,
      "costSgd": 1198.7,
      "valueSgd": 628.64,
      "pnlSgd": -570.06,
      "completion": 8,
      "notes": "Small crypto satellite",
      "positionLog": "",
      "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
      "lastQuoteSource": "Yahoo Finance primary; TradingView/FSMOne manual check if needed"
    }
  ],
  "lpx": {
    "initialCashUsd": 9983,
    "previousTotalValueUsd": 34949.0,
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
        "price": 344.2,
        "completion": 0,
        "notes": "LPX observation account",
        "quoteUrl": "https://sg.finance.yahoo.com/quote/GOOGL",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 1750.0,
        "valueUsd": 1721.0,
        "pnlUsd": -29.0
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
        "price": 266.99,
        "completion": 0,
        "notes": "LPX observation account",
        "quoteUrl": "https://sg.finance.yahoo.com/quote/MCD",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 1410.9,
        "valueUsd": 1334.95,
        "pnlUsd": -75.95
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
        "price": 481.63,
        "completion": 0,
        "notes": "LPX observation account",
        "quoteUrl": "https://sg.finance.yahoo.com/quote/MSFT",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 1975.0,
        "valueUsd": 2408.15,
        "pnlUsd": 433.15
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
        "price": 770.98,
        "completion": 0,
        "notes": "LPX holding account",
        "positionLog": "2026-06-23 BUY 2 @ US$735.56\n2026-08-04 BUY 3 @ US$748.26",
        "lastQuoteStatus": "updated: Yahoo Finance primary; sanity-checked against previous saved price",
        "lastQuoteSource": "Yahoo Finance primary; manual reference if needed",
        "costUsd": 3717.9,
        "valueUsd": 3854.9,
        "pnlUsd": 137.0
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
        "price": 128.15,
        "completion": 0,
        "notes": "Company-granted stock (RSU/ESOP), not funded from tracked cash pool",
        "positionLog": "2026-07-09 BUY 200 @ US$54.7",
        "costUsd": 10940.0,
        "valueUsd": 25630.0,
        "pnlUsd": 14690.0,
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
    }
  ],
  "updates": [
    "Price refresh completed at 2026-08-17 18:21 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-17 20:21 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-17 22:17 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-18 00:14 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-18 02:22 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-18 04:14 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-18 06:13 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-18 08:37 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-18 10:47 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-18 12:25 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-18 14:24 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-18 16:23 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-18 18:17 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-18 20:23 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-18 22:22 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-19 00:19 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-19 02:21 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-19 04:11 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-19 06:12 SGT with Yahoo primary and sanity validation.",
    "Price refresh completed at 2026-08-19 08:37 SGT with Yahoo primary and sanity validation."
  ]
};

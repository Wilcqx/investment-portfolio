const storageKey = "daily-investment-portfolio-v2";
const yahooBase = "https://sg.finance.yahoo.com/quote/";

const defaultState = window.PORTFOLIO_STATE || {
  version: "Portfolio Dashboard V1.0",
  schemaVersion: 35,
  asOf: "2026-06-16",
  previousTotalValueSgd: 82902.01,
  fireTargetSgd: 300000,
  actualCashSgd: 300000,
  srsCashSgd: 11237,
  fireCashflowTargetMonthly: 6000,
  stage: "Build-up phase",
  fx: {
    USD: 1.2831,
    SGD: 1
  },
  summaryAdjustment: {
    cost: 0,
    value: 0,
    pnl: 0
  },
  rsp: [
    { name: "Allianz Income and Growth CL AMi3 Dis H2-SGD", ticker: "Allianz G&I", quoteSymbol: "0P0000Z32L.SI", isin: "LU0943347566", amountSgd: 1000, quantity: 1630.29, avgCost: 6.791, currentPrice: 7.9384, currentValueSgd: 12941.89, countedInFire: true, account: "SRS", status: "Locked" },
    { name: "IVV", amountSgd: 1500, countedInFire: true, account: "US brokerage", status: "Active" }
  ],
  rspRules: [
    "Allianz Income and Growth CL AMi3 Dis H2-SGD: SGD 1,000/month via SRS, tracked inside UT and counted into the 300k FIRE build target.",
    "IVV: SGD 1,500/month RSP, invested in USD-denominated IVV, counted into the 300k FIRE build target and shown inside Holdings under RSP.",
    "Monthly RSP run: on the monthly processing date, deduct SGD 1,500 from actual platform cash for IVV and SGD 1,000 from SRS cash for Allianz, then add units at the verified latest price/NAV and append the position log."
  ],
  cashflowDraft: [
    { ticker: "DBS", yield: 0.051, source: "Yahoo Finance D05.SI", note: "Forward dividend & yield 3.24 (5.10%)." },
    { ticker: "CICT", yield: 0.0665, source: "Yahoo Finance C38U.SI", note: "Forward dividend & yield 0.16 (6.65%)." },
    { ticker: "YZJ Shipbuilding", yield: 0.0556, source: "Yahoo Finance BS6.SI", note: "Forward dividend & yield 0.20 (5.56%)." },
    { ticker: "YZJ Maritime", yield: 0.0079, source: "Yahoo Finance 8YZ.SI", note: "Below 2% threshold; ignored in cashflow draft." },
    { ticker: "MSFT", yield: 0.0091, source: "Yahoo Finance MSFT", note: "Below 2% threshold; ignored in cashflow draft." },
    { ticker: "NVDA", yield: 0.0047, source: "Yahoo Finance NVDA", note: "Below 2% threshold; ignored in cashflow draft." },
    { ticker: "MCD", yield: 0.026, source: "Yahoo Finance MCD", note: "Forward dividend & yield 7.44 (2.60%)." },
    { ticker: "IVV", yield: 0.0108, source: "TradingView AMEX:IVV", note: "Below 2% threshold; ignored in cashflow draft." },
    { ticker: "Allianz G&I", yield: 0.0713, source: "FSMOne ALZ210", note: "Dividend Yield 7.13%, Monthly frequency, NAV S$7.9384, last updated 08 Jun 2026 9:00:45 PM SGT." },
    { ticker: "AMOVA ARK", yield: 0, source: "Manual", note: "RSP stopped; no cashflow counted in draft." }
  ],
  targetPlan: [
    { category: "Index", targetSgd: 100000, note: "Core SP500 / IVV engine" },
    { category: "Bank", targetSgd: 85000, note: "DBS plus future OCBC sleeve" },
    { category: "US Tech", targetSgd: 50000, note: "MSFT, GOOGL, NVDA, PLTR" },
    { category: "US Defensive", targetSgd: 10000, note: "MCD / defensive consumer" },
    { category: "Cyclical", targetSgd: 30000, note: "YZJ shipbuilding and maritime" },
    { category: "REIT", targetSgd: 10000, note: "CICT income sleeve" },
    { category: "Crypto", targetSgd: 15000, note: "BTC and ETH satellite" }
  ],
  quoteEvidence: [
    { ticker: "DBS", source: "Yahoo D05.SI / TradingView SGX:D05", detail: "Yahoo 63.56 at 11:09:39 SGT; TradingView 63.60 at 11:12 GMT+8. Dashboard uses 63.60." },
    { ticker: "CICT", source: "Yahoo C38U.SI / TradingView SGX:C38U", detail: "Yahoo 2.36 at 11:09:48 SGT; TradingView 2.36 at 11:12 GMT+8." },
    { ticker: "YZJ Shipbuilding", source: "Yahoo BS6.SI / TradingView SGX:BS6", detail: "Yahoo 3.64 at 11:08:26 SGT; TradingView 3.65 at 11:12 GMT+8. Dashboard uses 3.65." },
    { ticker: "YZJ Maritime", source: "Yahoo 8YZ.SI / TradingView SGX:8YZ", detail: "Yahoo 0.63 at 11:09:56 SGT; TradingView 0.630 at 11:12 GMT+8." },
    { ticker: "US equities", source: "Yahoo / TradingView", detail: "MSFT, GOOGL, NVDA, PLTR, MCD, IVV matched between Yahoo and TradingView at US market close." },
    { ticker: "Crypto", source: "Yahoo / TradingView", detail: "BTC and ETH checked as market open; Yahoo around 3:20 UTC and TradingView around 11:22 GMT+8." },
    { ticker: "FX", source: "Yahoo SGD=X", detail: "USD/SGD updated to 1.2831, timestamped 4:23:03 am GMT+1." }
  ],
  notesByDate: {},
  checks: {},
  holdings: [
    makeHolding("DBS", "DBS Group Holdings", "D05.SI", "Bank", "SG", "SGD", 300, 49, 63.6, 14700, 19080, 4380, 12, "Cash-flow core"),
    makeHolding("CICT", "CapitaLand Integrated Commercial Trust", "C38U.SI", "REIT", "SG", "SGD", 3000, 2.18, 2.36, 6540, 7080, 540, 44, "Singapore REIT sleeve"),
    makeHolding("YZJ Shipbuilding", "Yangzijiang Shipbuilding", "BS6.SI", "Cyclical", "SG", "SGD", 1500, 3.41, 3.65, 5115, 5475, 360, 34, "Shipbuilding cycle"),
    {
      ...makeHolding("YZJ Maritime", "Yangzijiang Maritime Development Ltd.", "8YZ.SI / SGX:8YZ", "Cyclical", "SG", "SGD", 6000, 0.609, 0.63, 3655, 3780, 125, 18, "Yahoo 8YZ.SI and TradingView SGX:8YZ validated"),
      quoteUrl: "https://www.tradingview.com/symbols/SGX-8YZ/"
    },
    makeHolding("MSFT", "Microsoft", "MSFT", "US Tech", "US", "USD", 5, 395, 399.76, 2530, 2564.56, 34.56, 10, "AI platform compounder"),
    makeHolding("GOOGL", "Google Class A", "GOOGL", "US Tech", "US", "USD", 5, 351, 367.11, 2246, 2354.72, 108.72, 9, "Valuation recovery"),
    makeHolding("NVDA", "NVIDIA", "NVDA", "US Tech", "US", "USD", 13, 109, 212.45, 1814, 3543.68, 1729.68, 7, "AI leader"),
    makeHolding("PLTR", "Palantir Technologies", "PLTR", "US Tech", "US", "USD", 4, 129, 134.71, 660, 691.31, 31.31, 9, "High growth, high volatility"),
    makeHolding("MCD", "McDonald's", "MCD", "US Defensive", "US", "USD", 17, 283, 286.12, 6158, 6240.61, 82.61, 62, "Defensive consumer"),
    makeHolding("IVV", "iShares Core S&P 500 ETF", "IVV", "Index", "US", "USD", 14.345, 556.461, 756.35, 10242.26, 13921.43, 3679.17, 12, "Core global equity engine · IVV RSP SGD 1,500/month · USD product · counts toward 300k"),
    makeHolding("AMOVA ARK", "AMOVA ARK Disruptive Innovation B USD", "AMOVA ARK", "RSP", "Fund", "USD", 54.93, 29.925, 17.54, 2109.13, 1236.23, -872.9, 0, "Formerly Nikko AM · RSP stopped · loss position"),
    makeHolding("BTC", "Bitcoin", "BTC-USD", "Crypto", "Crypto", "USD", 0.0405, 99288, 65631, 5159.56, 3410.55, -1749.01, 10, "Small non-correlated sleeve"),
    makeHolding("ETH", "Ethereum", "ETH-USD", "Crypto", "Crypto", "USD", 0.2568, 3652, 1766.4, 1203.33, 582.03, -621.3, 8, "Small crypto satellite")
  ],
  lpx: {
    initialCashUsd: 9983,
    previousTotalValueUsd: 5264.95,
    holdings: [
      makeWatchHolding("GOOGL", "Google Class A", "GOOGL", 5, 350, 367.11),
      makeWatchHolding("MCD", "McDonald's", "MCD", 5, 282.18, 286.12),
      makeWatchHolding("MSFT", "Microsoft", "MSFT", 5, 395, 399.76)
    ]
  },
  history: [
    { date: "2026-06-16", text: "Current baseline locked: FIRE target S$300,000; Application Plan excludes UT/SRS and non-UT targets sum to S$300,000; actual balance S$230,039.88 from S$300,000 stock-platform pool minus non-SRS holdings; SRS cash S$11,237; UT shows S$14,178.12 invested out of S$25,415.12 total pool; Daily Move baseline reset to S$82,902.01 to reflect future market price changes only." }
  ],
  updates: [
    "Current rules only: FIRE target S$300,000; Application Plan excludes UT/SRS and non-UT targets sum to S$300,000; Actual Balance = S$300,000 stock-platform pool minus non-SRS holdings; SRS Cash Balance = tracked SRS cash S$11,237; UT current = Allianz + AMOVA, UT total = Allianz + AMOVA + SRS cash; Daily Move baseline = S$82,902.01."
  ]
};

let state = loadState();
let summaryHidden = false;

const els = {
  totalValue: document.querySelector("#totalValue"),
  totalCost: document.querySelector("#totalCost"),
  totalPnl: document.querySelector("#totalPnl"),
  dailyMove: document.querySelector("#dailyMove"),
  buildProgress: document.querySelector("#buildProgress"),
  monthlyRsp: document.querySelector("#monthlyRsp"),
  progressFill: document.querySelector("#progressFill"),
  progressText: document.querySelector("#progressText"),
  fireMeta: document.querySelector("#fireMeta"),
  cashflowFill: document.querySelector("#cashflowFill"),
  cashflowText: document.querySelector("#cashflowText"),
  cashflowMeta: document.querySelector("#cashflowMeta"),
  actualCashBalance: document.querySelector("#actualCashBalance"),
  srsCashBalance: document.querySelector("#srsCashBalance"),
  lastUpdated: document.querySelector("#lastUpdated"),
  holdingsBody: document.querySelector("#holdingsBody"),
  lpxHoldingsBody: document.querySelector("#lpxHoldingsBody"),
  lpxSummary: document.querySelector("#lpxSummary"),
  lpxTotalValue: document.querySelector("#lpxTotalValue"),
  lpxTotalCost: document.querySelector("#lpxTotalCost"),
  lpxPnl: document.querySelector("#lpxPnl"),
  lpxDailyMove: document.querySelector("#lpxDailyMove"),
  lpxCashBalance: document.querySelector("#lpxCashBalance"),
  allocationPlanList: document.querySelector("#allocationPlanList"),
  cashflowList: document.querySelector("#cashflowList"),
  dailyNotes: document.querySelector("#dailyNotes"),
  submitNoteBtn: document.querySelector("#submitNoteBtn"),
  noteStatus: document.querySelector("#noteStatus"),
  bugLog: document.querySelector("#bugLog"),
  snapshotList: document.querySelector("#snapshotList"),
  attentionList: document.querySelector("#attentionList"),
  sourceList: document.querySelector("#sourceList"),
  historyList: document.querySelector("#historyList"),
  dialog: document.querySelector("#holdingDialog"),
  form: document.querySelector("#holdingForm"),
  dialogTitle: document.querySelector("#dialogTitle"),
  deleteHoldingBtn: document.querySelector("#deleteHoldingBtn")
};

let showAllHistory = false;

document.querySelector("#addHoldingBtn").addEventListener("click", () => openHoldingDialog());
document.querySelector("#privacyToggleBtn").addEventListener("click", toggleSummaryPrivacy);
document.querySelector("#closeDialogBtn").addEventListener("click", () => els.dialog.close());
document.querySelector("#cancelDialogBtn").addEventListener("click", () => els.dialog.close());
document.querySelector("#toggleHistoryBtn").addEventListener("click", toggleHistory);
els.form.addEventListener("submit", saveHolding);
els.deleteHoldingBtn.addEventListener("click", deleteHolding);
els.submitNoteBtn.addEventListener("click", submitDailyNote);
els.dailyNotes.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || event.shiftKey) return;
  event.preventDefault();
  submitDailyNote();
});
els.dailyNotes.addEventListener("input", () => {
  if (!els.noteStatus) return;
  els.noteStatus.textContent = els.dailyNotes.value.trim() ? "DRAFT" : noteStatusText();
});

render();

function makeHolding(ticker, name, quoteSymbol, category, market, currency, quantity, avgCost, price, costSgd, valueSgd, pnlSgd, completion, notes) {
  return {
    id: crypto.randomUUID(),
    ticker,
    name,
    quoteSymbol,
    category,
    market,
    currency,
    quantity,
    avgCost,
    price,
    costSgd,
    valueSgd,
    pnlSgd,
    completion,
    notes,
    positionLog: ""
  };
}

function makeWatchHolding(ticker, name, quoteSymbol, quantity, avgCost, price) {
  return {
    id: `lpx-${ticker}`,
    virtual: true,
    ticker,
    name,
    quoteSymbol,
    category: "WATCH",
    market: "US",
    currency: "USD",
    quantity,
    avgCost,
    price,
    completion: 0,
    notes: "LPX observation account"
  };
}

function loadState() {
  if (window.PORTFOLIO_STATE) return structuredClone(defaultState);
  const stored = localStorage.getItem(storageKey);
  if (!stored) return structuredClone(defaultState);

  try {
    const parsed = JSON.parse(stored);
    return migrateState({
      ...structuredClone(defaultState),
      ...parsed,
      holdings: Array.isArray(parsed.holdings) ? parsed.holdings : structuredClone(defaultState.holdings)
    });
  } catch {
    return structuredClone(defaultState);
  }
}

function migrateState(nextState) {
  const needsSchemaRefresh = Number(nextState.schemaVersion) < defaultState.schemaVersion;
  const refreshedByTicker = new Map(defaultState.holdings.map((holding) => [holding.ticker, holding]));
  if (needsSchemaRefresh) {
    nextState.holdings = nextState.holdings.map((holding) => {
      const refreshed = refreshedByTicker.get(holding.ticker);
      if (!refreshed) return holding;
      return {
        ...holding,
        name: refreshed.name,
        quoteSymbol: refreshed.quoteSymbol,
        quoteUrl: refreshed.quoteUrl,
        category: refreshed.category,
        market: refreshed.market,
        currency: refreshed.currency,
        quantity: refreshed.quantity,
        avgCost: refreshed.avgCost,
        price: refreshed.price,
        costSgd: refreshed.costSgd,
        valueSgd: refreshed.valueSgd,
        pnlSgd: refreshed.pnlSgd,
        completion: refreshed.completion,
        notes: refreshed.notes,
        positionLog: holding.positionLog || refreshed.positionLog || ""
      };
    });
  }
  const existingTickers = new Set(nextState.holdings.map((holding) => holding.ticker));
  defaultState.holdings.forEach((holding) => {
    if (!existingTickers.has(holding.ticker)) nextState.holdings.push(structuredClone(holding));
  });
  nextState.schemaVersion = defaultState.schemaVersion;
  nextState.asOf = defaultState.asOf;
  nextState.previousTotalValueSgd = defaultState.previousTotalValueSgd;
  nextState.fireTargetSgd = defaultState.fireTargetSgd;
  nextState.actualCashSgd = defaultState.actualCashSgd;
  nextState.srsCashSgd = defaultState.srsCashSgd;
  nextState.fx = defaultState.fx;
  nextState.summaryAdjustment = defaultState.summaryAdjustment;
  nextState.targetPlan = defaultState.targetPlan;
  nextState.quoteEvidence = defaultState.quoteEvidence;
  nextState.cashflowDraft = defaultState.cashflowDraft;
  nextState.rsp = defaultState.rsp;
  nextState.lpx = defaultState.lpx;
  nextState.history = defaultState.history;
  nextState.updates = defaultState.updates;
  return nextState;
}

function persist() {
  if (window.PORTFOLIO_STATE) return;
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function render() {
  const totals = getTotals();
  const fireValue = getFireValue();
  const progress = fireValue / state.fireTargetSgd;
  const monthlyRsp = state.rsp.reduce((sum, item) => sum + item.amountSgd, 0);
  const returnRate = totals.cost ? (totals.pnl / totals.cost) * 100 : 0;
  const cashflow = getCashflowDraft();

  els.totalValue.textContent = money(totals.value);
  els.totalCost.textContent = money(totals.cost);
  els.totalPnl.textContent = `${money(totals.pnl)} (${formatPercent(returnRate)})`;
  els.totalPnl.className = totals.pnl >= 0 ? "positive" : "negative";
  const dailyMove = totals.value - (Number(state.previousTotalValueSgd) || totals.value);
  els.dailyMove.textContent = money(dailyMove);
  els.dailyMove.className = dailyMove >= 0 ? "positive" : "negative";
  els.buildProgress.textContent = `${(progress * 100).toFixed(2)}%`;
  els.monthlyRsp.textContent = money(monthlyRsp);
  updateSummaryRealValues();
  applySummaryPrivacy();
  els.progressFill.style.width = `${Math.min(progress * 100, 100)}%`;
  els.progressText.textContent = `${moneyWhole(fireValue)} / ${moneyWhole(state.fireTargetSgd)}`;
  els.fireMeta.textContent = `${(progress * 100).toFixed(2)}%`;
  els.lastUpdated.textContent = `${state.version} · As of ${state.asOf} · Source: Yahoo Finance, TradingView, FSMOne`;
  els.cashflowFill.style.width = `${Math.min(cashflow.progress * 100, 100)}%`;
  els.cashflowText.textContent = `${money(cashflow.monthly)} / ${money(state.fireCashflowTargetMonthly)}`;
  els.cashflowMeta.textContent = `${formatPlainPercent(cashflow.progress * 100)}`;

  state.notesByDate ||= {};
  els.dailyNotes.value = "";
  if (els.noteStatus) els.noteStatus.textContent = noteStatusText();

  renderHoldings(totals.value);
  renderLpxHoldings();
  renderCashBalances();
  renderAttention(totals);
  renderAllocationPlan(totals.value);
  renderCashflowSources(cashflow);
  renderSnapshot();
  renderSources();
  renderHistory();
  renderBugLog();
  persist();
}

function getTotals() {
  return holdingsForTotals().reduce(
    (sum, holding) => {
      sum.cost += Number(holding.costSgd) || calculatedCostSgd(holding);
      sum.value += Number(holding.valueSgd) || calculatedValueSgd(holding);
      sum.pnl += Number(holding.pnlSgd) || (calculatedValueSgd(holding) - calculatedCostSgd(holding));
      return sum;
    },
    {
      cost: Number(state.summaryAdjustment?.cost) || 0,
      value: Number(state.summaryAdjustment?.value) || 0,
      pnl: Number(state.summaryAdjustment?.pnl) || 0
    }
  );
}

function getFireValue() {
  return holdingsForTotals().reduce((sum, holding) => sum + (Number(holding.valueSgd) || calculatedValueSgd(holding)), Number(state.summaryAdjustment?.value) || 0);
}

function actualCashBalance() {
  return Number(state.actualCashSgd || defaultState.actualCashSgd) - nonSrsHoldingsValue();
}

function nonSrsHoldingsValue(totalValue = getTotals().value) {
  return totalValue - allianzValueSgd();
}

function allianzValueSgd() {
  const allianz = standaloneRspHoldings().find((holding) => holding.ticker === "Allianz G&I");
  return allianz ? holdingValueSgd(allianz) : 0;
}

function srsCashBalance() {
  return Number(state.srsCashSgd || defaultState.srsCashSgd);
}

function utInvestedValue(currentByCategory) {
  return currentByCategory.get("UT") || 0;
}

function utTotalValue(currentByCategory) {
  return utInvestedValue(currentByCategory) + srsCashBalance();
}

function renderCashBalances() {
  if (!els.actualCashBalance || !els.srsCashBalance) return;
  els.actualCashBalance.textContent = money(actualCashBalance());
  els.srsCashBalance.textContent = money(srsCashBalance());
}

function holdingsForTotals() {
  return [...state.holdings, ...standaloneRspHoldings()];
}

function getCashflowDraft() {
  const byTicker = new Map(holdingsForTotals().map((holding) => [holding.ticker, holding]));
  const rows = state.cashflowDraft.map((item) => {
    const holding = byTicker.get(item.ticker);
    const value = holding ? holdingValueSgd(holding) : 0;
    const counted = isCashflowCounted(item);
    const annual = counted ? value * Number(item.yield) : 0;
    return { ...item, counted, valueSgd: value, annualSgd: annual, monthlySgd: annual / 12 };
  });
  const annual = rows.reduce((sum, row) => sum + (Number(row.annualSgd) || 0), 0);
  const monthly = annual / 12;
  const progress = state.fireCashflowTargetMonthly ? monthly / state.fireCashflowTargetMonthly : 0;
  return { rows, annual, monthly, progress };
}

function isCashflowCounted(item) {
  return item.ticker === "Allianz G&I" || Number(item.yield) > 0.02;
}

function calculatedCostSgd(holding) {
  if (!Number.isFinite(Number(holding.avgCost))) return Number(holding.costSgd) || 0;
  return holding.quantity * holding.avgCost * fxRate(holding.currency);
}

function calculatedValueSgd(holding) {
  return holding.quantity * holding.price * fxRate(holding.currency);
}

function fxRate(currency) {
  return Number(state.fx?.[currency]) || 1;
}

function renderHoldings(totalValue) {
  els.holdingsBody.innerHTML = "";

  const groups = [
    { title: "STOCKS", holdings: sortStockHoldings(state.holdings.filter((holding) => holding.category !== "Crypto" && holding.category !== "RSP" && holding.ticker !== "IVV")) },
    { title: "RSP", holdings: sortByValue(rspHoldings()) },
    { title: "CRYPTO", holdings: sortByValue(state.holdings.filter((holding) => holding.category === "Crypto")) }
  ];

  groups.forEach((group) => {
    if (!group.holdings.length) return;
    const groupValue = group.holdings.reduce((sum, holding) => sum + (Number(holding.valueSgd) || calculatedValueSgd(holding)), 0);
    const header = document.createElement("tr");
    header.className = "group-row";
    header.innerHTML = `<td colspan="12">${escapeHtml(group.title)} <span>${money(groupValue)}</span></td>`;
    els.holdingsBody.append(header);
    group.holdings.forEach((holding) => renderHoldingRow(holding, totalValue));
  });

  els.holdingsBody.querySelectorAll("[data-edit]").forEach((button) => {
    button.addEventListener("click", () => openHoldingDialog(button.dataset.edit));
  });
}

function renderLpxHoldings() {
  if (!els.lpxHoldingsBody || !els.lpxSummary) return;
  const rows = state.lpx?.holdings || [];
  const initialCash = Number(state.lpx?.initialCashUsd ?? state.lpx?.cashUsd) || 0;
  const totalCost = rows.reduce((sum, holding) => sum + holdingCostLocal(holding), 0);
  const totalValue = rows.reduce((sum, holding) => sum + holdingValueLocal(holding), 0);
  const totalPnl = totalValue - totalCost;
  const dailyMove = totalValue - (Number(state.lpx?.previousTotalValueUsd) || totalValue);
  const cashBalance = initialCash - totalCost;

  els.lpxTotalValue.textContent = localMoney(totalValue, "USD");
  els.lpxTotalCost.textContent = localMoney(totalCost, "USD");
  els.lpxPnl.textContent = localMoney(totalPnl, "USD");
  els.lpxPnl.className = totalPnl >= 0 ? "positive" : "negative";
  els.lpxDailyMove.textContent = localMoney(dailyMove, "USD");
  els.lpxDailyMove.className = dailyMove >= 0 ? "positive" : "negative";
  els.lpxCashBalance.textContent = localMoney(cashBalance, "USD");
  els.lpxHoldingsBody.innerHTML = "";

  const header = document.createElement("tr");
  header.className = "group-row lpx-group-row";
  header.innerHTML = `<td colspan="12">HOLDING - LPX <span>${localMoney(totalValue, "USD")}</span></td>`;
  els.lpxHoldingsBody.append(header);
  sortByValue(rows).forEach((holding) => renderHoldingRow(holding, totalValue, els.lpxHoldingsBody));
}

function renderHoldingRow(holding, totalValue, targetBody = els.holdingsBody) {
    const value = Number(holding.valueSgd) || calculatedValueSgd(holding);
    const cost = Number(holding.costSgd) || calculatedCostSgd(holding);
    const pnl = Number(holding.pnlSgd) || value - cost;
    const localCost = holdingCostLocal(holding);
    const localValue = holdingValueLocal(holding);
    const localPnl = localValue - localCost;
    const weight = totalValue ? (value / totalValue) * 100 : 0;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <span class="asset-name">${escapeHtml(holding.ticker)}</span>
        <span class="asset-sub">${escapeHtml(holding.name)}</span>
      </td>
      <td>${escapeHtml(holding.category)}<span class="asset-sub">${escapeHtml(holding.market)} / ${escapeHtml(holding.currency)}</span></td>
      <td>${number(holding.quantity)}</td>
      <td>${holding.avgCost ? localMoney(holding.avgCost, holding.currency) : "Unknown"}</td>
      <td>${localMoney(holding.price, holding.currency)}</td>
      <td>${localMoney(localCost, holding.currency)}</td>
      <td>${localMoney(localValue, holding.currency)}</td>
      <td class="${localPnl >= 0 ? "positive" : "negative"}">${localMoney(localPnl, holding.currency)}</td>
      <td>${Number(holding.completion || 0).toFixed(2)}%</td>
      <td>${weight.toFixed(2)}%</td>
      <td><a class="quote-link" href="${quoteUrl(holding)}" target="_blank" rel="noreferrer">${quoteLabel(holding)}</a></td>
      <td>${holding.virtual ? "" : `<button class="icon-button small" data-edit="${holding.id}" title="Edit ${escapeHtml(holding.ticker)}" aria-label="Edit ${escapeHtml(holding.ticker)}">E</button>`}</td>
    `;
    targetBody.append(row);
}

function sortStockHoldings(holdings) {
  const marketRank = { SG: 0, US: 1 };
  return [...holdings].sort((a, b) => {
    const marketDiff = (marketRank[a.market] ?? 9) - (marketRank[b.market] ?? 9);
    if (marketDiff !== 0) return marketDiff;
    return holdingValueSgd(b) - holdingValueSgd(a);
  });
}

function sortByValue(holdings) {
  return [...holdings].sort((a, b) => holdingValueSgd(b) - holdingValueSgd(a));
}

function holdingValueSgd(holding) {
  return Number(holding.valueSgd) || calculatedValueSgd(holding);
}

function holdingCostLocal(holding) {
  if (Number.isFinite(Number(holding.avgCost))) return Number(holding.quantity || 0) * Number(holding.avgCost);
  return (Number(holding.costSgd) || calculatedCostSgd(holding)) / fxRate(holding.currency);
}

function holdingValueLocal(holding) {
  return Number(holding.quantity || 0) * Number(holding.price || 0);
}

function rspHoldings() {
  const rspRows = [];
  const ivv = state.holdings.find((holding) => holding.ticker === "IVV");
  if (ivv) {
    rspRows.push({
      ...ivv,
      category: "RSP",
      notes: `${ivv.notes} · IVV RSP ${money(1500)}/month · counts toward 300k`
    });
  }

  rspRows.push(...state.holdings.filter((holding) => holding.category === "RSP"));
  rspRows.push(...standaloneRspHoldings());

  return rspRows;
}

function standaloneRspHoldings() {
  const holdingTickers = new Set(state.holdings.map((holding) => holding.ticker));
  return state.rsp
    .filter((item) => Number(item.currentValueSgd) > 0 && !holdingTickers.has(item.ticker))
    .map((item) => {
      const cost = Number(item.quantity || 0) * Number(item.avgCost || 0);
      const value = Number(item.currentValueSgd) || cost;
      return {
        id: `rsp-${item.ticker || item.name}`,
        virtual: true,
        ticker: item.ticker || item.name,
        name: item.name,
        quoteSymbol: item.quoteSymbol || "",
        quoteUrl: item.quoteSymbol ? `${yahooBase}${encodeURIComponent(item.quoteSymbol)}/` : "",
        category: "RSP",
        market: item.account,
        currency: "SGD",
        quantity: Number(item.quantity) || 1,
        avgCost: Number(item.avgCost) || null,
        price: Number(item.currentPrice) || value,
        costSgd: cost || value,
        valueSgd: value,
        pnlSgd: value - (cost || value),
        completion: 0,
        notes: `${money(item.amountSgd)}/month · ${item.countedInFire ? "counts toward 300k" : "SRS / tracked separately"} · ${item.status}`
      };
    });
}

function renderAllocationPlan(totalValue) {
  els.allocationPlanList.innerHTML = "";
  const currentByCategory = categoryValues();
  const membersByCategory = categoryMembers();

  state.targetPlan.forEach((target) => {
    const current = currentByCategory.get(target.category) || 0;
    const targetAmount = target.targetSgd;
    const members = membersByCategory.get(target.category) || [];
    const progress = targetAmount ? Math.min((current / targetAmount) * 100, 999) : 0;
    const detail = members.length ? members.join(" · ") : target.note;
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${escapeHtml(target.category.toUpperCase())} <em>${progress.toFixed(2)}%</em></strong>
      <span>${money(current)} / ${money(targetAmount)}</span>
      <span class="mini-track"><span style="width:${Math.min(progress, 100)}%"></span></span>
      <span>${escapeHtml(detail)}</span>
    `;
    els.allocationPlanList.append(li);
  });
  renderUtReferenceRow(currentByCategory, membersByCategory);
}

function renderUtReferenceRow(currentByCategory, membersByCategory) {
  const current = utInvestedValue(currentByCategory);
  const targetAmount = utTotalValue(currentByCategory);
  const members = membersByCategory.get("UT") || [];
  const progress = targetAmount ? Math.min((current / targetAmount) * 100, 999) : 0;
  const li = document.createElement("li");
  li.className = "reference-row";
  li.innerHTML = `
    <strong>UT / SRS <em>${progress.toFixed(2)}%</em></strong>
    <span>${money(current)} / ${money(targetAmount)}</span>
    <span class="mini-track"><span style="width:${Math.min(progress, 100)}%"></span></span>
    <span>${escapeHtml(members.join(" · "))}</span>
  `;
  els.allocationPlanList.append(li);
}

function renderCashflowSources(cashflow) {
  if (!els.cashflowList) return;
  els.cashflowList.innerHTML = "";
  cashflow.rows
    .filter((row) => row.valueSgd > 0 || row.yield === null)
    .forEach((row) => {
      const li = document.createElement("li");
      const yieldText = row.yield === null ? "TBC" : formatPlainPercent(row.yield * 100);
      const incomeText = row.counted ? `${money(row.monthlySgd)}/month · ${money(row.annualSgd)}/year` : "ignored under 2% threshold";
      li.innerHTML = `<strong>${escapeHtml(row.ticker)} <em>${yieldText}</em></strong><span>${incomeText}</span><span>${escapeHtml(row.source)} · ${escapeHtml(row.note)}</span>`;
      els.cashflowList.append(li);
    });
}

function renderAttention(totals) {
  const currentByCategory = categoryValues();
  const items = [];
  const sgValue = state.holdings
    .filter((holding) => holding.market === "SG")
    .reduce((sum, holding) => sum + (Number(holding.valueSgd) || calculatedValueSgd(holding)), 0);
  const sgWeight = totals.value ? (sgValue / totals.value) * 100 : 0;
  const bankValue = currentByCategory.get("Bank") || 0;
  const bankWeight = totals.value ? (bankValue / totals.value) * 100 : 0;
  const cryptoValue = currentByCategory.get("Crypto") || 0;
  const cryptoWeight = totals.value ? (cryptoValue / totals.value) * 100 : 0;
  const topHolding = [...state.holdings].sort((a, b) => (Number(b.valueSgd) || 0) - (Number(a.valueSgd) || 0))[0];
  const topWeight = topHolding && totals.value ? ((Number(topHolding.valueSgd) || 0) / totals.value) * 100 : 0;

  const usValue = state.holdings.filter((holding) => holding.market === "US").reduce((sum, holding) => sum + holdingValueSgd(holding), 0);
  const usWeight = totals.value ? (usValue / totals.value) * 100 : 0;
  const techValue = state.holdings.filter((holding) => holding.category === "US Tech").reduce((sum, holding) => sum + holdingValueSgd(holding), 0);
  const techWeight = totals.value ? (techValue / totals.value) * 100 : 0;
  const fireProgress = state.fireTargetSgd ? (getFireValue() / state.fireTargetSgd) * 100 : 0;

  items.push(["FIRE PROGRESS", `${moneyWhole(getFireValue())} / ${moneyWhole(state.fireTargetSgd)} · ${formatPlainPercent(fireProgress)} built.`]);
  items.push(["US / SG EXPOSURE", `US ${formatPlainPercent(usWeight)} · Singapore ${formatPlainPercent(sgWeight)}.`]);
  items.push(["TECH CONCENTRATION", `US Tech is ${formatPlainPercent(techWeight)} of current portfolio.`]);
  if (bankWeight > 25) items.push(["BANK CONCENTRATION", `Bank sleeve is ${formatPlainPercent(bankWeight)}, above the 25% watch line.`]);
  if (topHolding) items.push(["LARGEST SINGLE LINE", `${topHolding.ticker} is ${formatPlainPercent(topWeight)} of current portfolio.`]);
  if (cryptoWeight > 8) items.push(["CRYPTO WATCH", `Crypto is ${formatPlainPercent(cryptoWeight)}, close to the planned satellite size.`]);
  items.push(["NEXT CAPITAL GAP", nextGapLine(currentByCategory)]);

  els.attentionList.innerHTML = "";
  items.forEach(([title, text]) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span>`;
    els.attentionList.append(li);
  });
}

function categoryValues() {
  const currentByCategory = new Map();
  holdingsForTotals().forEach((holding) => {
    const value = Number(holding.valueSgd) || calculatedValueSgd(holding);
    const category = allocationCategoryFor(holding);
    currentByCategory.set(category, (currentByCategory.get(category) || 0) + value);
  });
  return currentByCategory;
}

function categoryMembers() {
  const members = new Map();
  holdingsForTotals().forEach((holding) => {
    const category = allocationCategoryFor(holding);
    const list = members.get(category) || [];
    list.push(holding.ticker);
    members.set(category, list);
  });
  return members;
}

function allocationCategoryFor(holding) {
  if (holding.ticker === "IVV") return "Index";
  if (holding.ticker === "Allianz G&I" || holding.ticker === "AMOVA ARK") return "UT";
  return holding.category;
}

function nextGapLine(currentByCategory) {
  const ranked = state.targetPlan
    .map((target) => ({
      ...target,
      current: currentByCategory.get(target.category) || 0,
      gap: target.targetSgd - (currentByCategory.get(target.category) || 0)
    }))
    .filter((target) => target.gap > 0)
    .sort((a, b) => b.gap - a.gap);
  const next = ranked[0];
  return next ? `${next.category} has the largest remaining gap: ${money(next.gap)}.` : "All tracked categories are at or above target.";
}

function renderSnapshot() {
  if (!els.snapshotList) return;
  const sorted = [...state.holdings].sort((a, b) => (Number(b.pnlSgd) || 0) - (Number(a.pnlSgd) || 0));
  const highCompletion = [...state.holdings].sort((a, b) => (Number(b.completion) || 0) - (Number(a.completion) || 0));
  const lowCompletion = [...state.holdings].sort((a, b) => (Number(a.completion) || 0) - (Number(b.completion) || 0));
  const items = [
    ["TOP PROFIT CONTRIBUTORS", sorted.slice(0, 4).map((h) => `${h.ticker}: ${money(h.pnlSgd)}`).join(" · ")],
    ["CURRENT LOSING POSITIONS", sorted.filter((h) => Number(h.pnlSgd) < 0).map((h) => `${h.ticker}: ${money(h.pnlSgd)}`).join(" · ") || "None"],
    ["HIGHEST BUILD COMPLETION", highCompletion.slice(0, 3).map((h) => `${h.ticker}: ${h.completion}%`).join(" · ")],
    ["LOWEST BUILD COMPLETION", lowCompletion.slice(0, 4).map((h) => `${h.ticker}: ${h.completion}%`).join(" · ")]
  ];

  els.snapshotList.innerHTML = "";
  items.forEach(([title, text]) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${escapeHtml(title)}</strong><span>${escapeHtml(text)}</span>`;
    els.snapshotList.append(li);
  });
}

function renderHistory() {
  els.historyList.innerHTML = "";
  const items = showAllHistory ? state.history : state.history.slice(-1);
  document.querySelector("#toggleHistoryBtn").textContent = showAllHistory ? "SHOW LATEST" : "SHOW ALL";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${escapeHtml(item.date)}</strong><span>${escapeHtml(item.text)}</span>`;
    els.historyList.append(li);
  });
}

function toggleHistory() {
  showAllHistory = !showAllHistory;
  renderHistory();
}

function renderSources() {
  if (!els.sourceList) return;
  els.sourceList.innerHTML = "";
  state.quoteEvidence.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${escapeHtml(item.ticker)}</strong><span>${escapeHtml(item.source)} · ${escapeHtml(item.detail)}</span>`;
    els.sourceList.append(li);
  });
}

function renderBugLog() {
  if (!els.bugLog) return;
  els.bugLog.innerHTML = "";
  state.updates.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    els.bugLog.append(li);
  });
}

function toggleSummaryPrivacy() {
  summaryHidden = !summaryHidden;
  applySummaryPrivacy();
}

function updateSummaryRealValues() {
  document.querySelectorAll(".summary-grid .metric strong").forEach((el) => {
    el.dataset.realValue = el.textContent;
  });
}

function applySummaryPrivacy() {
  const button = document.querySelector("#privacyToggleBtn");
  button.classList.toggle("is-hidden", summaryHidden);
  button.title = summaryHidden ? "Show summary values" : "Hide summary values";
  button.setAttribute("aria-label", summaryHidden ? "Show summary values" : "Hide summary values");
  document.querySelectorAll(".summary-grid .metric strong").forEach((el) => {
    if (!summaryHidden) {
      el.textContent = el.dataset.realValue;
      el.classList.remove("masked-value");
      return;
    }
    el.textContent = "S$••••";
    el.classList.add("masked-value");
  });
}

function openHoldingDialog(id = "") {
  const holding = state.holdings.find((item) => item.id === id);
  els.dialogTitle.textContent = holding ? "EDIT HOLDING" : "ADD HOLDING";
  els.deleteHoldingBtn.hidden = !holding;
  setValue("holdingId", holding?.id || "");
  setValue("assetName", holding?.name || "");
  setValue("ticker", holding?.ticker || "");
  setValue("quoteSymbol", holding?.quoteSymbol || "");
  setValue("category", holding?.category || "US Tech");
  setValue("market", holding?.market || "US");
  setValue("currency", holding?.currency || "USD");
  setValue("quantity", holding?.quantity || "");
  setValue("avgCost", holding?.avgCost ?? "");
  setValue("price", holding?.price || "");
  setValue("costSgd", holding?.costSgd || "");
  setValue("valueSgd", holding?.valueSgd || "");
  setValue("completion", holding?.completion || "");
  setValue("assetNotes", holding?.notes || "");
  setValue("positionLog", holding?.positionLog || "");
  els.dialog.showModal();
}

function saveHolding(event) {
  event.preventDefault();
  const id = getValue("holdingId") || crypto.randomUUID();
  const costSgd = Number(getValue("costSgd"));
  const valueSgd = Number(getValue("valueSgd"));
  const next = {
    id,
    name: getValue("assetName"),
    ticker: getValue("ticker").toUpperCase(),
    quoteSymbol: getValue("quoteSymbol").toUpperCase() || guessQuoteSymbol(getValue("ticker"), getValue("market")),
    category: getValue("category"),
    market: getValue("market"),
    currency: getValue("currency"),
    quantity: Number(getValue("quantity")),
    avgCost: getValue("avgCost") ? Number(getValue("avgCost")) : null,
    price: Number(getValue("price")),
    costSgd,
    valueSgd,
    pnlSgd: valueSgd - costSgd,
    completion: Number(getValue("completion")),
    notes: getValue("assetNotes"),
    positionLog: getValue("positionLog")
  };

  const existingIndex = state.holdings.findIndex((holding) => holding.id === id);
  if (existingIndex >= 0) state.holdings[existingIndex] = next;
  else state.holdings.push(next);

  els.dialog.close();
  render();
}

function deleteHolding() {
  const id = getValue("holdingId");
  state.holdings = state.holdings.filter((holding) => holding.id !== id);
  els.dialog.close();
  render();
}

function submitDailyNote() {
  const draft = els.dailyNotes.value.trim();
  if (!draft) {
    if (els.noteStatus) els.noteStatus.textContent = noteStatusText();
    return;
  }

  const applied = applyTradeNote(draft);
  const key = todayKey();
  state.notesByDate ||= {};
  state.notesByDate[key] = [state.notesByDate[key], draft].filter(Boolean).join("\n");

  els.dailyNotes.value = "";
  if (els.noteStatus) {
    if (applied.failedLines.length) {
      els.noteStatus.textContent = `APPLIED ${applied.count}, 未识别 ${applied.failedLines.length} 行: ${applied.failedLines.join(" | ")}`;
    } else {
      els.noteStatus.textContent = applied.count ? `APPLIED ${applied.count}` : "SAVED";
    }
  }
  render();

  if (applied.count) {
    downloadCurrentDataJs();
  } else {
    persist();
  }
}


function applyTradeNote(draft) {
  const lines = draft.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  let currentAccount = "Main";
  let count = 0;
  const messages = [];
  const failedLines = [];

  lines.forEach((line) => {
    const lower = line.toLowerCase();
    if (/^(main|主仓)\s*:?$/i.test(line)) {
      currentAccount = "Main";
      return;
    }
    if (/^lpx\s*:?$/i.test(line)) {
      currentAccount = "LPX";
      return;
    }
    if (lower.includes("lpx")) currentAccount = "LPX";
    if (line.includes("主仓") || lower.includes("main")) currentAccount = "Main";

    const trade = parseTradeLine(line, currentAccount);
    if (!trade) {
      failedLines.push(line);
      return;
    }
    const result = applyTrade(trade);
    if (result.ok) {
      count += 1;
      messages.push(result.text);
    } else {
      failedLines.push(`${line} (${result.text})`);
    }
  });

  if (messages.length) {
    state.history ||= [];
    state.history.push({ date: todayKey(), text: messages.join(" ") });
    state.history = state.history.slice(-80);
    state.version = "Portfolio Dashboard V1.1 Note Update";
    state.asOf = todayKey();
  }

  return { count, messages, failedLines };
}

const fuzzyAssetAliases = [
  { ticker: "YZJ Shipbuilding", aliases: ["YZJ SHIPBUILDING", "YZJ SB"] },
  { ticker: "YZJ Maritime", aliases: ["YZJ MARITIME", "YZJ MT", "YZJ MTM"] },
  { ticker: "AMOVA ARK", aliases: ["AMOVA ARK", "AMOVA"] },
  { ticker: "Allianz G&I", aliases: ["ALLIANZ GI", "ALLIANZ"] },
  { ticker: "IVV", aliases: ["SP500", "SPX500"] }
];

const noteStopWords = new Set(["BUY", "SELL", "LPX", "MAIN", "SHARE", "SHARES", "STOCK", "STOCKS"]);

function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}

function noteCandidateWords(line) {
  const cleaned = line.toUpperCase().replace(/[^A-Z0-9\s]/g, " ");
  const words = cleaned.split(/\s+/).filter((word) => word && !noteStopWords.has(word) && !/^\d+(\.\d+)?$/.test(word));
  const candidates = [];
  words.forEach((word, i) => {
    candidates.push(word);
    if (i + 1 < words.length) candidates.push(`${word} ${words[i + 1]}`);
  });
  return candidates;
}

function bestFuzzyAssetMatch(line) {
  const candidates = noteCandidateWords(line);
  let best = null;
  fuzzyAssetAliases.forEach(({ ticker, aliases }) => {
    aliases.forEach((alias) => {
      candidates.forEach((candidate) => {
        const distance = levenshtein(candidate, alias);
        const threshold = alias.length > 6 ? 2 : 1;
        if (distance <= threshold && (!best || distance < best.distance)) {
          best = { ticker, distance };
        }
      });
    });
  });
  return best;
}

function extractUnknownTicker(line) {
  const cleaned = line.toUpperCase().replace(/[^A-Z0-9\s.]/g, " ");
  const matches = cleaned.match(/\b[A-Z]{2,10}\b/g) || [];
  return matches.find((word) => !noteStopWords.has(word)) || "";
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function parseTradeLine(line, account) {
  const priceMatch = line.match(/@\s*([0-9]+(?:\.[0-9]+)?)/);
  if (!priceMatch) return null;
  const price = Number(priceMatch[1]);

  let ticker = "";
  let fuzzyMatch = null;

  const fuzzy = bestFuzzyAssetMatch(line);
  if (fuzzy) {
    ticker = fuzzy.ticker;
    if (fuzzy.distance > 0) fuzzyMatch = fuzzy;
  }

  if (!ticker) {
    const knownTickers = ["MSFT", "NVDA", "IVV", "GOOGL", "GOOG", "PLTR", "MCD", "DBS", "CICT", "BTC", "ETH"];
    const upperLine = line.toUpperCase();
    let known = knownTickers.find((item) => upperLine.includes(item));
    if (known === "GOOG") known = "GOOGL";
    if (known) ticker = known;
  }

  if (!ticker) ticker = extractUnknownTicker(line);
  if (!ticker) return null;

  let qty = null;
  const qtyBeforeShare = line.match(/([0-9]+(?:\.[0-9]+)?)\s*(?:shares?|share|股)/i);
  if (qtyBeforeShare) qty = Number(qtyBeforeShare[1]);
  if (qty === null) {
    const upperLine = line.toUpperCase();
    const anchor = escapeRegex(ticker.split(" ")[0]);
    const afterTicker = upperLine.match(new RegExp(`${anchor}[^0-9]*([0-9]+(?:\\.[0-9]+)?)`));
    if (afterTicker) qty = Number(afterTicker[1]);
  }
  if (!qty || qty <= 0) return null;

  const action = /(SELL|卖|卖出|减仓)/i.test(line) ? "SELL" : "BUY";
  return { account, action, ticker, qty, price, fuzzyMatch };
}

function applyTrade(trade) {
  if (trade.account === "LPX") return applyLpxTrade(trade);
  return applyMainTrade(trade);
}

function createAutoHolding(ticker, price) {
  const market = ticker.includes(".SI") ? "SG" : "US";
  const currency = market === "SG" ? "SGD" : "USD";
  return {
    id: crypto.randomUUID(),
    ticker,
    name: tickerName(ticker),
    quoteSymbol: guessQuoteSymbol(ticker, market),
    category: "Uncategorized",
    market,
    currency,
    quantity: 0,
    avgCost: null,
    price,
    costSgd: 0,
    valueSgd: 0,
    pnlSgd: 0,
    completion: 0,
    notes: "笔记自动建仓，请检查分类/市场/币种",
    positionLog: ""
  };
}

function applyMainTrade({ action, ticker, qty, price, fuzzyMatch }) {
  const holding = state.holdings.find((item) => item.ticker.toUpperCase() === ticker.toUpperCase());
  if (holding) return applyHoldingTrade(holding, { action, qty, price, fuzzyMatch }, false);

  const rspItem = (state.rsp || []).find((item) => (item.ticker || item.name || "").toUpperCase() === ticker.toUpperCase());
  if (rspItem) return applyRspTrade(rspItem, { action, ticker, qty, price, fuzzyMatch });

  if (action === "SELL") return { ok: false, text: `未找到持仓 ${ticker}，无法卖出` };

  const newHolding = createAutoHolding(ticker, price);
  state.holdings.push(newHolding);
  return applyHoldingTrade(newHolding, { action, qty, price, fuzzyMatch }, true);
}

function applyHoldingTrade(holding, { action, qty, price, fuzzyMatch }, createdNew) {
  const oldQty = Number(holding.quantity) || 0;
  const oldAvg = Number(holding.avgCost) || price;
  let newQty = oldQty;
  let newAvg = oldAvg;

  if (action === "BUY") {
    newQty = oldQty + qty;
    newAvg = newQty ? ((oldQty * oldAvg) + (qty * price)) / newQty : price;
  } else {
    newQty = Math.max(0, oldQty - qty);
  }

  holding.quantity = round6(newQty);
  holding.avgCost = round6(newAvg);
  refreshHoldingAmounts(holding);
  holding.completion = buildCompletionFor(holding);
  holding.positionLog = [holding.positionLog, `${todayKey()} ${action} ${qty} @ ${holding.currency === "SGD" ? "S$" : "US$"}${price}`].filter(Boolean).join("\n");

  const fuzzyNote = fuzzyMatch ? ` (模糊匹配: ${fuzzyMatch.ticker})` : "";
  const newNote = createdNew ? " (新建持仓，请检查分类/市场/币种)" : "";
  return { ok: true, text: `Main ${action} ${holding.ticker} ${qty} @ ${price}.${fuzzyNote}${newNote}` };
}

function applyRspTrade(item, { action, ticker, qty, price, fuzzyMatch }) {
  const oldQty = Number(item.quantity) || 0;
  const oldAvg = Number(item.avgCost) || price;
  let newQty = oldQty;
  let newAvg = oldAvg;

  if (action === "BUY") {
    newQty = oldQty + qty;
    newAvg = newQty ? ((oldQty * oldAvg) + (qty * price)) / newQty : price;
  } else {
    newQty = Math.max(0, oldQty - qty);
  }

  item.quantity = round6(newQty);
  item.avgCost = round6(newAvg);
  const currentPrice = Number(item.currentPrice) || price;
  item.currentValueSgd = round2(newQty * currentPrice);
  item.positionLog = [item.positionLog, `${todayKey()} ${action} ${qty} @ S$${price}`].filter(Boolean).join("\n");

  const fuzzyNote = fuzzyMatch ? ` (模糊匹配: ${fuzzyMatch.ticker})` : "";
  return { ok: true, text: `Main ${action} ${ticker} ${qty} @ ${price} (定投持仓).${fuzzyNote}` };
}

function applyLpxTrade({ action, ticker, qty, price, fuzzyMatch }) {
  state.lpx ||= { initialCashUsd: 0, holdings: [] };
  state.lpx.holdings ||= [];
  let holding = state.lpx.holdings.find((item) => item.ticker.toUpperCase() === ticker.toUpperCase());
  let createdNew = false;

  if (!holding) {
    if (action === "SELL") return { ok: false, text: `未找到 LPX 持仓 ${ticker}，无法卖出` };
    holding = {
      id: `lpx-${ticker}`,
      virtual: false,
      ticker,
      name: tickerName(ticker),
      quoteSymbol: ticker,
      category: "HOLDING",
      market: ticker.includes(".SI") ? "SG" : "US",
      currency: ticker.includes(".SI") ? "SGD" : "USD",
      quantity: 0,
      avgCost: price,
      price,
      completion: 0,
      notes: "LPX holding account",
      positionLog: ""
    };
    state.lpx.holdings.push(holding);
    createdNew = true;
  }

  const oldQty = Number(holding.quantity) || 0;
  const oldAvg = Number(holding.avgCost) || price;
  let newQty = oldQty;
  let newAvg = oldAvg;
  if (action === "BUY") {
    newQty = oldQty + qty;
    newAvg = newQty ? ((oldQty * oldAvg) + (qty * price)) / newQty : price;
  } else {
    newQty = Math.max(0, oldQty - qty);
  }
  holding.quantity = round6(newQty);
  holding.avgCost = round6(newAvg);
  holding.price ||= price;
  holding.positionLog = [holding.positionLog, `${todayKey()} ${action} ${qty} @ US$${price}`].filter(Boolean).join("\n");

  const fuzzyNote = fuzzyMatch ? ` (模糊匹配: ${fuzzyMatch.ticker})` : "";
  const newNote = createdNew ? " (新建持仓)" : "";
  return { ok: true, text: `LPX ${action} ${ticker} ${qty} @ ${price}.${fuzzyNote}${newNote}` };
}

function refreshHoldingAmounts(holding) {
  const rate = fxRate(holding.currency);
  const qty = Number(holding.quantity) || 0;
  const avg = Number(holding.avgCost) || 0;
  const price = Number(holding.price) || avg;
  holding.costSgd = round2(qty * avg * rate);
  holding.valueSgd = round2(qty * price * rate);
  holding.pnlSgd = round2(holding.valueSgd - holding.costSgd);
}

function buildCompletionFor(holding) {
  const targetMap = { IVV: 100000, DBS: 85000, MSFT: 20000, GOOGL: 10000, NVDA: 20000, PLTR: 5000, MCD: 10000, CICT: 10000, BTC: 10000, ETH: 5000 };
  const target = targetMap[holding.ticker] || state.targetPlan.find((item) => item.category === allocationCategoryFor(holding))?.targetSgd || 0;
  if (!target) return Number(holding.completion) || 0;
  return round2((holding.costSgd || calculatedCostSgd(holding)) / target * 100);
}

function tickerName(ticker) {
  const names = { IVV: "iShares Core S&P 500 ETF", MSFT: "Microsoft", NVDA: "NVIDIA", GOOGL: "Google Class A", MCD: "McDonald's", PLTR: "Palantir Technologies" };
  return names[ticker] || ticker;
}

function downloadCurrentDataJs() {
  const payload = `window.PORTFOLIO_STATE = ${JSON.stringify(state, null, 2)};\n`;
  const blob = new Blob([payload], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "data.js";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function round2(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
}

function round6(value) {
  return Math.round((Number(value) || 0) * 1000000) / 1000000;
}

function noteStatusText() {
  return state.notesByDate?.[todayKey()] ? "SAVED TODAY" : "READY";
}

function setValue(id, value) {
  document.querySelector(`#${id}`).value = value;
}

function getValue(id) {
  return document.querySelector(`#${id}`).value.trim();
}

function guessQuoteSymbol(ticker, market) {
  const symbol = ticker.trim().toUpperCase();
  if (!symbol) return "";
  if (market === "SG" && !symbol.endsWith(".SI")) return `${symbol}.SI`;
  if (market === "Crypto" && !symbol.endsWith("-USD")) return `${symbol}-USD`;
  return symbol;
}

function quoteUrl(holding) {
  if (holding.virtual && !holding.quoteUrl) return "#";
  if (holding.quoteUrl) return holding.quoteUrl;
  return `${yahooBase}${encodeURIComponent(holding.quoteSymbol || holding.ticker)}`;
}

function quoteLabel(holding) {
  if (holding.virtual && !holding.quoteUrl) return "N/A";
  return holding.quoteUrl?.includes("tradingview.com") ? "TV" : "Yahoo";
}

function money(value) {
  return currencyText(value, "SGD");
}

function moneyWhole(value) {
  return money(value);
}

function localMoney(value, currency) {
  return currencyText(value, currency);
}

function compactMoney(value) {
  const amount = Number.isFinite(Number(value)) ? Number(value) : 0;
  if (Math.abs(amount) >= 1000) return `S$${(amount / 1000).toFixed(2)}K`;
  return money(amount);
}

function currencyText(value, currency) {
  const amount = Number.isFinite(Number(value)) ? Number(value) : 0;
  const prefix = currency === "SGD" ? "S$" : currency === "USD" ? "US$" : `${currency} `;
  return `${prefix}${new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)}`;
}

function number(value) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 4
  }).format(Number.isFinite(Number(value)) ? Number(value) : 0);
}

function formatPercent(value) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
}

function formatPlainPercent(value) {
  return `${value.toFixed(2)}%`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

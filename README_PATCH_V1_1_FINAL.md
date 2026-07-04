# Portfolio Dashboard V1.1 Final Patch

Replace only these files in the GitHub repo:

- `app.js`
- `data.js`
- `update_prices.py`
- `requirements.txt`
- `.github/workflows/update-prices.yml`

Do not replace:

- `index.html`
- `styles.css`
- `assets/`
- `favicon.ico`
- `site.webmanifest`

## Included holding updates

- Main NVDA: 23 shares, avg cost USD 146.391304
- Main MSFT: 15 shares, avg cost USD 365
- Main IVV: 22.345 shares, avg cost USD 621.28051
- LPX IVV: 2 shares, avg cost USD 735.56

## Price engine

- Yahoo Finance/yfinance remains the automatic primary source.
- TradingView/FSMOne are not falsely marked as automatic sources.
- Quotes are sanity-checked against the last saved price.
- If a quote is unavailable or abnormal, the previous saved price is retained and status is marked.

## Workflow

- Runs hourly via GitHub Actions.
- Manual `Run workflow` remains available.

## Notes

- Notes can parse simple trade lines and update the browser state.
- After a parsed trade, the app downloads a new `data.js` file.
- Upload the downloaded `data.js` to GitHub to persist the change.
- The app does not store a GitHub token in the browser.

## Local checks performed

- `node --check app.js`
- `python3 -m py_compile update_prices.py`
- `data.js` JSON parse check


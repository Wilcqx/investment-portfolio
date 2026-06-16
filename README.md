# Investment Portfolio Dashboard

This is a static Portfolio Dashboard designed for GitHub Pages.

## Files

- `index.html` — dashboard page
- `styles.css` — page styling
- `app.js` — dashboard rendering logic
- `data.js` — portfolio holdings and latest prices
- `update_prices.py` — daily price refresh script
- `.github/workflows/update-prices.yml` — GitHub Actions scheduled job

## How it works

1. Holdings and cost basis are stored in `data.js`.
2. The dashboard reads `data.js` when the page loads.
3. GitHub Actions runs `update_prices.py` every day at 08:10 Singapore time.
4. The script uses Yahoo Finance via `yfinance` as the primary price source.
5. If a quote cannot be refreshed, the script keeps the previous saved price.
6. GitHub Actions commits the refreshed `data.js` back to the repository.
7. GitHub Pages shows the updated dashboard on mobile/desktop.

## Manual run

```bash
pip install -r requirements.txt
python update_prices.py
```

## Manual trigger in GitHub

Go to:

Actions → Daily Portfolio Price Refresh → Run workflow


# Portfolio Dashboard V1.2 Final Patch

Replace these files in the GitHub repository:

- `app.js`
- `data.js`
- `index.html`
- `update_prices.py`
- `requirements.txt`
- `.github/workflows/update-prices.yml`

Do not replace icons/assets/styles unless you intentionally want to change them.

Key fixes:

1. `update_prices.py` captures `previousTotalValueSgd` before refreshing prices, so Dashboard Daily Move reflects the change since the previous refresh.
2. LPX `previousTotalValueUsd` is captured before refresh, and LPX holdings now also receive `costUsd`, `valueUsd`, and `pnlUsd` after price refresh.
3. Workflow runs every 2 hours and still supports manual Run Workflow.
4. `index.html` cache-busts `data.js` and `app.js` by hour.
5. `app.js` includes FIRE progress, US/SG exposure, and Tech concentration in Highlights, and Note update can parse simple BUY/SELL instructions and download a refreshed `data.js`.

After upload:

1. Commit to `main`.
2. Run Actions → Daily Portfolio Price Refresh → Run workflow.
3. Open the dashboard with a cache-busting query string, e.g. `?v=20260707-v12`.

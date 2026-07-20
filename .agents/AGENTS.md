# Project Customization Rules & Lessons Learned

## Vite + React + GitHub Pages Deployment Rules
1. **Root `index.html` Blank Screen Prevention**:
   - Default Vite `index.html` references `/src/main.jsx`, which cannot be executed by browsers without a running Vite dev server.
   - When deploying to GitHub Pages, ALWAYS build the production bundle (`npm run build`) and ensure compiled assets (`dist/index.html` and `dist/assets/`) are deployed or copied to the target branch/root directory.
2. **Custom Domain `public/CNAME`**:
   - Always place a `CNAME` file in the `public/` directory containing the exact domain (e.g., `kpssnotlarim.me`). Vite will automatically copy it to `dist/CNAME` during build.
3. **GitHub Actions Workflow**:
   - In `.github/workflows/deploy.yml`, use `npm install` instead of `npm ci` to prevent build failures caused by minor `package-lock.json` cross-platform discrepancies.
4. **Static Hosting Router**:
   - Always use `HashRouter` instead of `BrowserRouter` for GitHub Pages to avoid 404 errors on route refresh and direct navigation.
5. **Navbar Links**:
   - Ensure all `Navbar` links point to valid routes (e.g. `<Link to="/hakkimizda">` instead of `to="/"`).

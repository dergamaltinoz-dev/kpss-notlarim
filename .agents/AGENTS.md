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

## Vite Bundle İçerik Doğrulama Kuralı (KRİTİK)
6. **Yeni data dosyası ekledikten sonra deploy öncesi bundle doğrulaması zorunludur:**
   - `npm run build` sonrası, `git push` ve `gh-pages` deploy YAPILMADAN ÖNCE:
     ```bash
     node -e "const fs=require('fs'); const b=fs.readFileSync('dist/assets/<bundle>.js','utf8'); console.log('İçerik var mı:', b.includes('ARANAN_ANAHTAR_KELIME'));"
     ```
   - Eğer içerik bulunamazsa: import'ların doğruluğunu kontrol et, `vite.config.js`'de
     `build.rollupOptions` ile ilgili dosyaları zorla dahil etmeyi dene veya tree-shaking
     sorununa karşı import yapısını doğrudan component içine taşı.
   - Doğrulama geçmeden asla deploy yapma!

## Geliştirilmiş GitHub Pages Deploy Kontrol Adımları
7. **Deploy sonrası HTML hash doğrulaması:**
   - Deploy tamamlandıktan sonra canlı URL'den HTML'i çek ve `<script src=...>` hash'inin
     yeni build hash'i ile eşleşip eşleşmediğini doğrula:
     ```powershell
     (Invoke-WebRequest -Uri https://SITE_URL -UseBasicParsing).Content
     ```
   - Eski hash görünüyorsa `npx gh-pages -d dist --no-history` ile gh-pages branch'ini sıfırla.
   - Doğrulama adımını her deploy sonrası tekrarla; CDN cache sebebiyle gecikme olabilir.

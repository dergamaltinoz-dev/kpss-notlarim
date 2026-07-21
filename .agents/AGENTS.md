# Project Customization Rules & Lessons Learned

## Vite + React + GitHub Pages Deployment Rules
1. **Root `index.html` Integrity (KRİTİK)**:
   - Kök `index.html` dosyası HER ZAMAN `<script type="module" src="/src/main.jsx"></script>` içermelidir.
   - Kök `index.html` dosyasını ASLA `dist/assets/index-xxx.js` gibi derlenmiş dosyalara yönlendirmeyin.
   - Derlenmiş asset'leri (`assets/` klasörünü) projenin kök dizinine kopyalamayın; aksi takdirde Vite kaynak kodlar yerine eski derlenmiş asset'leri paketler.
2. **Custom Domain `public/CNAME`**:
   - Always place a `CNAME` file in the `public/` directory containing the exact domain (e.g., `kpssnotlarim.me`). Vite will automatically copy it to `dist/CNAME` during build.
3. **GitHub Actions Workflow**:
   - In `.github/workflows/deploy.yml`, use `npm install` instead of `npm ci` to prevent build failures caused by minor `package-lock.json` cross-platform discrepancies.
4. **Static Hosting Router**:
   - Always use `HashRouter` instead of `BrowserRouter` for GitHub Pages to avoid 404 errors on route refresh and direct navigation.
5. **Navbar Links**:
   - Ensure all `Navbar` links point to valid routes (e.g. `<Link to="/hakkimizda">` instead of `to="/"`).

## Vite Bundle İçerik Doğrulama Kuralı
6. **Yeni data dosyası ekledikten sonra deploy öncesi bundle doğrulaması zorunludur:**
   - `npm run build` sonrası, `git push` yapmadan önce `dist/assets/index-*.js` bundle'ını doğrulayın.
   - Kök `index.html` dosyasının `/src/main.jsx` işaret ettiğinden emin olun.


## Vite 8 Tree-Shaking Sorunu ve public/JSON Çözümü (KRİTİK)
7. **Vite 8 (Rolldown) dinamik property erişiminde agresif tree-shaking yapar:**
   - `topicContents[dynamicId]` gibi dinamik erişimler kullanıldığında Vite, objenin
     hangi key'lerinin kullanıldığını statik analiz edemez ve tüm objeyi bundle'dan siler.
   - **Belirti:** Build hash hiç değişmez (örn. `index-CWbAT23E.js`), içerik bulunamaz.
   - **Kök Neden:** Vite 8 build hash'ini modül grafiğine göre üretir, dosya içeriğine göre değil.
     Dolayısıyla kaynak dosya değişse bile hash sabit kalır — cache bypass edemezsiniz.
   - **Kalıcı Çözüm:** Büyük/dinamik erişilen veri objelerini `public/<dosya>.json` olarak kaydet
     ve component içinden `fetch()` ile yükle. Vite `public/` klasörüne hiç dokunmaz:
     ```js
     // public/matData.json → node ile üret, Vite build'den bağımsız
     fetch('/matData.json').then(r => r.json()).then(data => setContent(data[id]));
     ```
   - **JSON Oluşturma:** ES module dosyalarından JSON üretmek için:
     ```bash
     node --input-type=module -e "import {data} from './src/data/file.js'; import fs from 'fs'; fs.writeFileSync('public/data.json', JSON.stringify(data));"
     ```

## Geliştirilmiş GitHub Pages Deploy Kontrol Adımları
8. **Deploy sonrası HTML hash doğrulaması:**
   - Deploy tamamlandıktan sonra canlı URL'den HTML'i çek ve `<script src=...>` hash'inin
     yeni build hash'i ile eşleşip eşleşmediğini doğrula:
     ```powershell
     (Invoke-WebRequest -Uri https://SITE_URL -UseBasicParsing).Content
     ```
   - Eski hash görünüyorsa `npx gh-pages -d dist --no-history` ile gh-pages branch'ini sıfırla.
   - Doğrulama adımını her deploy sonrası tekrarla; CDN cache sebebiyle gecikme olabilir.
   - **JSON dosyaları için doğrulama:**
     ```powershell
     (Invoke-WebRequest -Uri https://SITE_URL/data.json -UseBasicParsing).Content | ConvertFrom-Json
     ```

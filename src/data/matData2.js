// matData2.js - Matematik Konu İçerikleri (2/3)
// Konular: Mutlak Değer, Üslü Sayılar, Köklü Sayılar, Özdeşlikler-Çarpanlara Ayırma, Oran-Orantı

export const matTopicContents2 = {

  mat_mutlak: {
    title: 'Mutlak Değer',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Mutlak Değer Tanımı</h2>
      <p>Bir sayının sayı doğrusundaki <strong>0 noktasına uzaklığıdır</strong>. Her zaman sıfır veya pozitiftir.</p>
      <ul>
        <li>|a| = a &nbsp;&nbsp; (a ≥ 0 ise)</li>
        <li>|a| = −a &nbsp; (a &lt; 0 ise)</li>
        <li>|a| ≥ 0 (daima sıfırdan büyük veya eşittir)</li>
        <li>|a| = 0 ⟺ a = 0</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası: Negatif Sayının Mutlak Değeri</strong><br/>
        |−7| = 7 olduğu bilinmesine karşın, şu tuzak sıkça soruluyor:<br/>
        a &lt; 0 ise |a| = −a ifadesindeki "−a" pozitiftir! (−(negatif) = pozitif)<br/>
        "−a ifadesi daima negatiftir" YANLIŞ! a'nın işaretine bağlıdır.
      </div>

      <h2>Mutlak Değer Özellikleri</h2>
      <ul>
        <li>|a × b| = |a| × |b|</li>
        <li>|a / b| = |a| / |b| (b ≠ 0)</li>
        <li>|a + b| ≤ |a| + |b| (Üçgen Eşitsizliği)</li>
        <li>|a − b| ≥ | |a| − |b| |</li>
        <li>√(a²) = |a|</li>
      </ul>

      <h2>Mutlak Değerli Denklemler</h2>
      <p><strong>|ax + b| = c</strong> (c ≥ 0)</p>
      <ul>
        <li>ax + b = c &nbsp;&nbsp; → Çözüm 1</li>
        <li>ax + b = −c → Çözüm 2</li>
      </ul>
      <p>c &lt; 0 ise çözüm kümesi boştur (∅).</p>

      <h2>Geometrik Yorum</h2>
      <p><strong>|x − a| &lt; r</strong>: a noktasına uzaklığı r'den küçük olan noktalar → (a−r, a+r) aralığı</p>
      <div class="alert-box">
        <strong>⚠️ Sık Çıkan Soru Tipi</strong><br/>
        |x − 2| + |x + 3| ifadesinin minimum değeri nedir?<br/>
        Bu ifade, sayı doğrusunda −3 ile 2 noktaları arasındaki toplam uzaklıktır.<br/>
        Minimum değer = iki noktanın birbirine uzaklığı = |2 − (−3)| = <strong>5</strong><br/>
        x, −3 ile 2 arasında herhangi bir değer alabilir.
      </div>
    `
  },

  mat_uslu: {
    title: 'Üslü Sayılar',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Üs Kuralları</h2>
      <ul>
        <li>a^m × a^n = a^(m+n)</li>
        <li>a^m ÷ a^n = a^(m−n) (a ≠ 0)</li>
        <li>(a^m)^n = a^(m×n)</li>
        <li>(a × b)^n = a^n × b^n</li>
        <li>(a/b)^n = a^n / b^n (b ≠ 0)</li>
        <li>a^0 = 1 (a ≠ 0)</li>
        <li>a^(−n) = 1 / a^n (a ≠ 0)</li>
        <li>a^(1/n) = ⁿ√a</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 Sıfırın Üssü ile İlgili Tuzaklar</strong>
        <ul>
          <li>0⁰ = <strong>tanımsız</strong> (Matematikte tartışmalıdır, ÖSYM sormaktan kaçınır)</li>
          <li>0^n = 0 (n > 0 için)</li>
          <li>a^0 = 1 (a ≠ 0 için)</li>
        </ul>
      </div>

      <h2>Büyük Sayılarda Üs Hesabı (Son Rakam)</h2>
      <p>2'nin kuvvetlerinin son rakamı: 2, 4, 8, 6, 2, 4, 8, 6 … (periyot 4)</p>
      <p>3'ün kuvvetlerinin son rakamı: 3, 9, 7, 1, 3, 9, 7, 1 … (periyot 4)</p>
      <p>7'nin kuvvetlerinin son rakamı: 7, 9, 3, 1, 7, 9, 3, 1 … (periyot 4)</p>
      <div class="alert-box">
        <strong>🎯 Son Rakam Bulma Kısa Yolu</strong><br/>
        2²⁰²³'ün son rakamı: 2023 ÷ 4 = 505 kalan 3 → Son rakam 2'nin 3. kuvveti = 2³ = 8 → son rakam <strong>8</strong><br/>
        Kalan 0 ise periyodun son elemanı alınır (2'de 6, 3'te 1 gibi).
      </div>

      <h2>Negatif Üsler ve Kesirli Üsler</h2>
      <ul>
        <li>2^(−3) = 1/8</li>
        <li>8^(1/3) = ³√8 = 2</li>
        <li>27^(2/3) = (³√27)² = 3² = 9</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ Karşılaştırma Soruları</strong><br/>
        2^10 vs 3^6: 2^10 = 1024, 3^6 = 729 → 2^10 > 3^6<br/>
        Aynı tabana veya aynı üsse getirmeye çalışın. Mümkün değilse tahminen karşılaştırın.
      </div>
    `
  },

  mat_koklu: {
    title: 'Köklü Sayılar',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Kök Kuralları</h2>
      <ul>
        <li>√(a × b) = √a × √b (a, b ≥ 0)</li>
        <li>√(a/b) = √a / √b (a ≥ 0, b > 0)</li>
        <li>(√a)² = a (a ≥ 0)</li>
        <li>√(a²) = |a| (a her türlü gerçel sayı olabilir!)</li>
        <li>ⁿ√(aᵐ) = a^(m/n)</li>
        <li>ⁿ√(ᵐ√a) = ^(nm)√a</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 En Kritik Kural: √(a²) = |a|</strong><br/>
        √(x²) = x değil, |x|'tir!<br/>
        Eğer x = −3 ise √((−3)²) = √9 = 3 = |−3| ✓<br/>
        ÖSYM "√(x²) = x midir?" sorusunu çok sever. Cevap: x ≥ 0 ise evet, x &lt; 0 ise hayır.
      </div>

      <h2>Köklü İfadeleri Sadeleştirme</h2>
      <p>√72 = √(36 × 2) = 6√2</p>
      <p>√(4/9) = 2/3</p>
      <p>3√2 + 5√2 = 8√2 (aynı kök birleştirilebilir)</p>
      <p>√2 + √3 ≠ √5 (farklı kökler birleştirilemez!)</p>

      <h2>Köklü Paydayı Rasyonelleştirme</h2>
      <p>1/√2 = √2/2 (pay ve payda √2 ile çarpılır)</p>
      <p>1/(√3 + 1) = (√3 − 1)/((√3)² − 1²) = (√3 − 1)/2</p>
      <div class="alert-box">
        <strong>🎯 Eşlenik Çarpma (Rasyonelleştirme)</strong><br/>
        a + √b ifadesinin eşleniği a − √b'dir.<br/>
        (a + √b)(a − √b) = a² − b<br/>
        Payda köklü ise eşleniği ile genişletin. Bu işlem KPSS'de sıkça kullanılır.
      </div>

      <h2>Köklü İfadelerde Karşılaştırma</h2>
      <div class="alert-box">
        <strong>⚠️ Kök Karşılaştırma Yöntemi</strong><br/>
        √5 + √3 vs √6 + √2: Kare alın → (√5 + √3)² = 8 + 2√15, (√6 + √2)² = 8 + 2√12<br/>
        √15 > √12 olduğundan → √5 + √3 > √6 + √2
      </div>
    `
  },

  mat_ozdeslik: {
    title: 'Özdeşlikler ve Çarpanlara Ayırma',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Temel Özdeşlikler (Mutlaka Ezberlenecek)</h2>
      <ul>
        <li>(a + b)² = a² + 2ab + b²</li>
        <li>(a − b)² = a² − 2ab + b²</li>
        <li>(a + b)(a − b) = a² − b²</li>
        <li>(a + b)³ = a³ + 3a²b + 3ab² + b³</li>
        <li>(a − b)³ = a³ − 3a²b + 3ab² − b³</li>
        <li>a³ + b³ = (a + b)(a² − ab + b²)</li>
        <li>a³ − b³ = (a − b)(a² + ab + b²)</li>
        <li>(a + b + c)² = a² + b² + c² + 2ab + 2bc + 2ac</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Kısa Yolu: a² + b² Bulma</strong><br/>
        a + b ve ab biliniyorsa: a² + b² = (a + b)² − 2ab<br/>
        Örnek: a + b = 5, ab = 3 ise → a² + b² = 25 − 6 = <strong>19</strong><br/>
        a³ + b³ = (a + b)(a² − ab + b²) = 5 × (19 − 3) = 5 × 16 = <strong>80</strong>
      </div>

      <h2>Çarpanlara Ayırma Yöntemleri</h2>
      <ul>
        <li><strong>Ortak çarpan paranteze alma:</strong> 6x² + 4x = 2x(3x + 2)</li>
        <li><strong>Fark karesi:</strong> x² − 9 = (x + 3)(x − 3)</li>
        <li><strong>Tam kare üçlü:</strong> x² + 6x + 9 = (x + 3)²</li>
        <li><strong>İkili gruplama:</strong> ax + ay + bx + by = (a + b)(x + y)</li>
        <li><strong>Trinomial (ax² + bx + c):</strong> İki sayı bul: çarpımı ac, toplamı b olsun</li>
      </ul>

      <div class="alert-box">
        <strong>⚠️ Sık Hata: a² + b² Çarpanlara Ayrılmaz!</strong><br/>
        a² − b² = (a+b)(a−b) ✓<br/>
        a² + b² → Gerçel sayılarda çarpanlara AYRILAMAZ! ✗<br/>
        a³ + b³ ve a³ − b³ ise çarpanlara ayrılabilir.
      </div>
    `
  },

  mat_oran: {
    title: 'Oran ve Orantı',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Oran</h2>
      <p>İki niceliğin birbirine oranı, birinin diğerine bölümüdür: a/b (b ≠ 0)</p>
      <p>a:b = a/b şeklinde de gösterilir.</p>
      <p><strong>Dikkat:</strong> Oranın birimi yoktur ve oran her zaman sade (tam) kesir olarak yazılır.</p>

      <h2>Orantı</h2>
      <ul>
        <li><strong>Doğru Orantı:</strong> x/y = k (sabit) → x artarken y de artar. x₁/y₁ = x₂/y₂</li>
        <li><strong>Ters Orantı:</strong> x × y = k (sabit) → x artarken y azalır. x₁ × y₁ = x₂ × y₂</li>
      </ul>

      <h2>Bileşik Orantı</h2>
      <p>Birden fazla değişken söz konusuysa bileşik orantı kurulur.</p>
      <div class="alert-box">
        <strong>🎯 Orantı Problemlerinde Kural</strong><br/>
        Doğru orantı → "daha fazla iş = daha fazla miktar" tipindedir (renk sayısı, madde miktarı).<br/>
        Ters orantı → "daha fazla işçi = daha az süre" tipindedir (hız-süre, işçi-süre).<br/>
        Problem kurulmadan önce <strong>hangi orantı türünün geçerli olduğunu belirleyin!</strong>
      </div>

      <h2>Oran Soruları (Parçalama)</h2>
      <p>a : b : c = 2 : 3 : 5 ve toplam 100 ise:</p>
      <ul>
        <li>a = 100 × 2/(2+3+5) = 20</li>
        <li>b = 100 × 3/10 = 30</li>
        <li>c = 100 × 5/10 = 50</li>
      </ul>

      <div class="alert-box">
        <strong>⚠️ Klasik Tuzak: Oran Değişmez!</strong><br/>
        a/b = 3/5 ise a ve b'ye aynı sayı eklenince oran değişir!<br/>
        a/b = 3/5, (a+2)/(b+2) = 5/9 (örnek)<br/>
        "Orana eşit sayı eklenirse oran korunur" ifadesi YANLIŞTIR!<br/>
        Her iki terim aynı katsayıyla çarpılırsa oran korunur: 3k/5k = 3/5 ✓
      </div>
    `
  },
};

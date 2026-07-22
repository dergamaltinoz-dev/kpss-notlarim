// Geometri konu içerikleri

export const geoTopicContents = {
  // 1. Doğruda Açı
  geo_dogruda_aci: {
    title: 'Doğruda Açı',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Temel Açı Kavramları</h2>
      <p>Açı, başlangıç noktaları ortak olan iki ışının birleşimidir.</p>
      <ul>
        <li><strong>Dar Açı:</strong> 0° < α < 90°</li>
        <li><strong>Dik Açı:</strong> α = 90°</li>
        <li><strong>Geniş Açı:</strong> 90° < α < 180°</li>
        <li><strong>Doğru Açı:</strong> α = 180°</li>
        <li><strong>Tam Açı:</strong> α = 360°</li>
      </ul>

      <h2>2. Tümler ve Bütünler Açılar</h2>
      <ul>
        <li><strong>Tümleri:</strong> Ölçüleri toplamı 90° olan iki açıdır. Bir açının ölçüsü x ise tümleri (90° - x)'tir.</li>
        <li><strong>Bütünleri:</strong> Ölçüleri toplamı 180° olan iki açıdır. Bir açının ölçüsü x ise bütünleri (180° - x)'tir.</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası</strong>
        "Tümlerinin 2 katının 10 fazlası bütünlerine eşittir" sorularında açıya x diyerek denklem kurun: <br/>
        2(90° - x) + 10° = 180° - x ⇒ 190° - 2x = 180° - x ⇒ x = 10°.
      </div>

      <h2>3. Paralel İki Doğrunun Bir Kesenle Yaptığı Açılar</h2>
      <p>d1 // d2 olmak üzere:</p>
      <ul>
        <li><strong>Yöndeş Açılar:</strong> Aynı yöne bakan açılar eşittir.</li>
        <li><strong>İç Ters Açılar (Z Kuralı):</strong> Z harfinin iç köşe açıları eşittir (a = b).</li>
        <li><strong>Dış Ters Açılar:</strong> Dış bölgede ters yöne bakan açılar eşittir.</li>
        <li><strong>U Kuralı (Karşı Durumlu Açılar):</strong> Paralel doğrular arasındaki iki açının toplamı 180°'dir.</li>
        <li><strong>M Kuralı:</strong> Sola bakan açıların toplamı, sağa bakan açının toplamına eşittir (x + y = z).</li>
        <li><strong>Zikzak Kuralı:</strong> Aynı yöne bakan açıların toplamı diğer yöne bakan açıların toplamına eşittir.</li>
        <li><strong>Füze (Kalem Ucu) Kuralı:</strong> Paralel iki doğru arasındaki iç yöne bakan 3 açının toplamı 360°'dir.</li>
      </ul>
    `
  },

  // 2. Üçgende Açı
  geo_ucgende_aci: {
    title: 'Üçgende Açı',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Üçgende Temel Açı Bağıntıları</h2>
      <ul>
        <li>Üçgenin iç açılarının toplamı <strong>180°</strong> dir.</li>
        <li>Üçgenin dış açılarının toplamı <strong>360°</strong> dir.</li>
        <li><strong>Dış Açı Kuralı:</strong> Bir üçgende bir dış açının ölçüsü, kendisine komşu olmayan iki iç açının ölçüleri toplamına eşittir. (Çok sık sorulur!)</li>
      </ul>

      <h2>2. İkizkenar ve Eşkenar Üçgende Açı</h2>
      <ul>
        <li><strong>İkizkenar Üçgen:</strong> İki kenarı eşit olan üçgendir. Eşit kenarların karşısındaki taban açıları birbiriyle eşittir.</li>
        <li><strong>Eşkenar Üçgen:</strong> Tüm kenarları eşit olan üçgendir. İç açılarının her biri <strong>60°</strong> dir.</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 "Muhteşem Üçlü" Kuralı (KPSS Klasiği)</strong>
        Bir dik üçgende hipotenüse ait kenarortayın uzunluğu, hipotenüsün böldüğü parçaların uzunluğuna eşittir. Soruda dik açıdan inip kenarı ikiye bölen çizgi görünce muhteşem üçlüyü hatırlayın!
      </div>

      <h2>3. İç ve Dış Açıortaylar Arasındaki Açılar</h2>
      <ul>
        <li>İki iç açıortayın oluşturduğu açı: <strong>α = 90° + (A / 2)</strong></li>
        <li>İki dış açıortayın oluşturduğu açı: <strong>α = 90° - (A / 2)</strong></li>
        <li>Bir iç, bir dış açıortayın oluşturduğu açı: <strong>α = A / 2</strong></li>
      </ul>
    `
  },

  // 3. Dik Üçgen
  geo_dik_ucgen: {
    title: 'Dik Üçgen',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Pisagor Teoremi</h2>
      <p>Bir dik üçgende dik kenarların karelerinin toplamı hipotenüsün karesine eşittir: <strong>a² + b² = c²</strong></p>

      <h2>2. ÖSYM En Çok Sorduğu Özel Kenarlı Dik Üçgenler</h2>
      <ul>
        <li><strong>3 - 4 - 5</strong> üçgeni ve katları (6-8-10, 9-12-15, 12-16-20...)</li>
        <li><strong>5 - 12 - 13</strong> üçgeni ve katları (10-24-26...)</li>
        <li><strong>8 - 15 - 17</strong> üçgeni ve katları</li>
        <li><strong>7 - 24 - 25</strong> üçgeni ve katları</li>
        <li><strong>1 - 2 - √5</strong> üçgeni (Dik kenarlar birbirinin 2 katıysa hipotenüs küçüğün √5 katıdır)</li>
      </ul>

      <h2>3. Öklid Bağıntıları</h2>
      <p>Dik açıdan dik inildiğinde (H'den hipotenüse h inildiğinde):</p>
      <ul>
        <li><strong>h² = p · k</strong> (Hamburgerin karesi = Patates · Köfte)</li>
        <li><strong>b² = k · a</strong> ve <strong>c² = p · a</strong></li>
        <li><strong>b · c = a · h</strong> (Alan bağlantısından gelir)</li>
      </ul>

      <div class="alert-box">
        <strong>⚠️ KPSS Püf Noktası</strong>
        Soruda "dikten dik iniliyorsa" %99.9 Öklid bağıntıları kullanılır. İlk arayacağınız formul h² = p·k olmalıdır.
      </div>
    `
  },

  // 4. Özel Üçgenler
  geo_ozel_ucgenler: {
    title: 'Özel Üçgenler',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. 30° - 60° - 90° Üçgeni</h2>
      <ul>
        <li>90°'nin karşısı <strong>2x</strong> ise,</li>
        <li>30°'nin karşısı <strong>x</strong> (hipotenüsün yarısı),</li>
        <li>60°'nin karşısı <strong>x√3</strong> (30°'nin karşısının √3 katı) olur.</li>
      </ul>

      <h2>2. 45° - 45° - 90° (İkizkenar Dik Üçgen)</h2>
      <ul>
        <li>Dik kenarlar <strong>x</strong> ve <strong>x</strong> ise,</li>
        <li>Hipotenüs <strong>x√2</strong> olur.</li>
      </ul>

      <h2>3. 15° - 75° - 90° Üçgeni</h2>
      <ul>
        <li>Hipotenüse ait yükseklik h ise, hipotenüs <strong>4h</strong> olur (h'ye 4h kuralı).</li>
      </ul>

      <h2>4. 30° - 30° - 120° Üçgeni</h2>
      <ul>
        <li>Eşit kenarlar <strong>a</strong> ve <strong>a</strong> ise, 120°'nin karşısı <strong>a√3</strong> olur.</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası</strong>
        Soruda 30°, 45° veya 60° açılarını gördüğünüzde hemen karşılarına **dikme inin!** Dikme inerek 30-60-90 veya 45-45-90 dik üçgenleri elde edilir.
      </div>
    `
  },

  // 5. Açıortay - Kenarortay
  geo_aciortay_kenarortay: {
    title: 'Açıortay - Kenarortay',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. İç Açıortay Teoremi</h2>
      <p>Açıortayın ayırdığı kenarların oranı, komşu yan kenarların oranına eşittir:</p>
      <p><strong>b / c = x / y</strong></p>
      <p>Açıortay üzerindeki bir noktadan açının kollarına indirilen dikmeler eşittir.</p>

      <h2>2. Dış Açıortay Teoremi</h2>
      <p>Dış açıortay çizgisinin bittiği noktadan itibaren tabandaki parçaların oranı kenarların oranına eşittir.</p>

      <h2>3. Kenarortay ve Ağırlık Merkezi (G)</h2>
      <p>Kenarortay, karşı kenarı iki eşit parçaya bölen doğru parçasıdır.</p>
      <ul>
        <li><strong>Ağırlık Merkezi (G):</strong> Kenarortayların kesim noktasıdır.</li>
        <li>Ağırlık merkezi kenarortayı köşeye <strong>2 birim</strong>, kenara <strong>1 birim</strong> oranında böler (2k - k kuralı).</li>
        <li><strong>3 - 1 - 2 Kuralı:</strong> Orta taban çizildiğinde kenarortay üzerinde yukarıdan aşağıya 3x - x - 2x oranı oluşur.</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 ÖSYM Ağırlık Merkezi Tuzağı</strong>
        Bir noktadan kenarortay geçiyorsa ve köşeye uzaklığı kenara uzaklığının 2 katıysa o nokta **Ağırlık Merkezi (G)** dir.
      </div>
    `
  },

  // 6. Üçgende Alan
  geo_ucgende_alan: {
    title: 'Üçgende Alan',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Temel Alan Formülü</h2>
      <p><strong>Alan = (Taban × Yükseklik) / 2</strong> ⇒ A = (a · hₐ) / 2</p>

      <h2>2. Dik Üçgende Alan</h2>
      <p>Dik kenarların çarpımının yarısıdır: <strong>Alan = (b · c) / 2</strong></p>

      <h2>3. Sinüslü Alan Formülü</h2>
      <p>İki kenar ve aralarındaki α açısı biliniyorsa: <strong>Alan = (1/2) · b · c · sin(α)</strong></p>

      <h2>4. Eşkenar Üçgenin Alanı</h2>
      <p>Bir kenarı a olan eşkenar üçgenin alanı: <strong>Alan = (a² √3) / 4</strong></p>

      <h2>5. Taban - Alan İlişkisi</h2>
      <ul>
        <li>Yükseklikleri eşit olan üçgenlerin alanları oranı, **tabanları oranına eşittir.**</li>
        <li>Ağırlık merkezi (G) üçgenin alanını 3 eşit parçaya böler (S, S, S).</li>
        <li>Üç kenarortayın tamamı çizildiğinde alan 6 eşit parçaya bölünür (S, S, S, S, S, S).</li>
      </ul>
    `
  },

  // 7. Üçgende Benzerlik
  geo_ucgende_benzerlik: {
    title: 'Üçgende Benzerlik',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Benzerlik Kuralları</h2>
      <ul>
        <li><strong>A.A. (Açı-Açı) Benzerliği:</strong> İki üçgenin en az iki açısı eşitse bu üçgenler benzerdir. (En çok kullanılan kural).</li>
        <li><strong>K.A.K. (Kenar-Açı-Kenar) Benzerliği:</strong> İki kenar orantılı ve aralarındaki açı eşitse üçgenler benzerdir.</li>
        <li><strong>K.K.K. (Kenar-Kenar-Kenar) Benzerliği:</strong> Bütün kenarları orantılı olan üçgenler benzerdir.</li>
      </ul>

      <h2>2. Temel Orantı Teoremi ve Thales Teoremi</h2>
      <p>Paralel doğrular kenarları orantılı böler (d1 // d2):</p>
      <p><strong>a / b = c / d</strong></p>

      <h2>3. Kelebek (Kelebek / Kum Saati) Benzerliği</h2>
      <p>Paralel iki taban arasında kelebek şekli oluştuğunda karşılıklı kenarlar orantılıdır:</p>
      <p><strong>|AB| / |DE| = |AC| / |CD| = |BC| / |CE|</strong></p>
    `
  },

  // 8. Üçgende Benzerlik ve Alan
  geo_ucgende_benzerlik_alan: {
    title: 'Üçgende Benzerlik ve Alan',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Benzerlik Oranı (k) ve Özellikleri</h2>
      <p>İki üçgen benzer ise (Benzerlik oranı = k):</p>
      <ul>
        <li>Çevreleri oranı = <strong>k</strong></li>
        <li>Yükseklikleri, açıortayları, kenarortayları oranı = <strong>k</strong></li>
        <li><strong>ALANLARI ORANI = k² (Benzerlik oranının karesidir!)</strong></li>
      </ul>

      <h2>2. Eşit Aralıklarla Artan Katlarda Alan Dağılımı</h2>
      <p>Paralel doğrular eşit aralıklarla çizildiğinde alanlar yukarıdan aşağıya tek sayılar şeklinde artar:</p>
      <p><strong>S, 3S, 5S, 7S, 9S...</strong></p>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası</strong>
        Benzerlik oranı 1/2 ise (orta taban durumu), alanlar oranı (1/2)² = 1/4 olur. Yani üstteki küçük üçgen S ise tamamı 4S olur, alt parçaya 3S kalır (S - 3S kuralı).
      </div>
    `
  },

  // 9. Üçgende Açı-Kenar Bağıntıları
  geo_ucgende_aci_kenar: {
    title: 'Üçgende Açı-Kenar Bağıntıları',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Açı - Kenar İlişkisi</h2>
      <p>Bir üçgende **büyük açı karşısında büyük kenar**, **küçük açı karşısında küçük kenar** bulunur.</p>
      <p><strong>m(A) > m(B) > m(C) ⇔ a > b > c</strong></p>

      <h2>2. Üçgen Eşitsizliği</h2>
      <p>Bir üçgenin herhangi bir kenarının uzunluğu, diğer iki kenarın toplamından küçük, farkının mutlak değerinden büyüktür:</p>
      <p><strong>|b - c| < a < b + c</strong></p>

      <h2>3. Dik ve Geniş Açı Durumlarında Eşitsizlik</h2>
      <ul>
        <li>m(A) = 90° ise: <strong>a² = b² + c²</strong> (Pisagor)</li>
        <li>m(A) > 90° (Geniş açı) ise: <strong>a² > b² + c²</strong></li>
        <li>m(A) < 90° (Dar açı) ise: <strong>a² < b² + c²</strong></li>
      </ul>
    `
  },

  // 10. Çokgen - Dörtgen
  geo_cokgen_dortgen: {
    title: 'Çokgen - Dörtgen',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Konveks Çokgenlerin Genel Özellikleri (n kenarlı)</h2>
      <ul>
        <li>İç açılar toplamı: <strong>(n - 2) · 180°</strong></li>
        <li>Dış açılar toplamı: <strong>360°</strong> (Kenar sayısından bağımsız olarak sabittir!)</li>
        <li>Bir köşeden çizilebilen köşegen sayısı: <strong>n - 3</strong></li>
        <li>Toplam köşegen sayısı: <strong>n · (n - 3) / 2</strong></li>
      </ul>

      <h2>2. Düzgün Çokgenler</h2>
      <p>Tüm kenarları ve tüm iç açıları eşit olan çokgenlerdir.</p>
      <ul>
        <li><strong>Bir Dış Açı:</strong> 360° / n</li>
        <li><strong>Bir İç Açı:</strong> 180° - (360° / n)</li>
        <li><strong>Düzgün Beşgen:</strong> Bir iç açısı 108°, dış açısı 72°'dir.</li>
        <li><strong>Düzgün Altıgen:</strong> Bir iç açısı 120°, dış açısı 60°'dir. En uzun köşegen kenarın 2 katıdır (2a). Alanı 6 tane eşkenar üçgenin alanına eşittir: <strong>6 · (a²√3)/4</strong></li>
      </ul>
    `
  },

  // 11. Paralelkenar - Eşkenar Dörtgen
  geo_paralelkenar_eskenar: {
    title: 'Paralelkenar - Eşkenar Dörtgen',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Paralelkenar</h2>
      <ul>
        <li>Karşılıklı kenarlar paralel ve eşittir.</li>
        <li>Karşılıklı açılar eşittir, ardışık açılar toplamı 180°'dir.</li>
        <li>Köşegenler birbirini **ortalar** (fakat eşit uzunlukta veya dik olmak zorunda değildir).</li>
        <li><strong>Alan:</strong> Taban × Taban Yüksekliği (A = a · hₐ = b · h_b).</li>
      </ul>

      <h2>2. Eşkenar Dörtgen</h2>
      <ul>
        <li>Dört kenarı da birbirine eşit olan paralelkenardır.</li>
        <li>Köşegenler birbirini **DİK keser** ve köşegenler aynı zamanda **AÇIORTAY**dır.</li>
        <li>Köşegenler birbirini ortalar.</li>
        <li><strong>Alan:</strong> Köşegenlerin çarpımının yarısıdır: <strong>Alan = (e · f) / 2</strong></li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası</strong>
        Köşegenlerin **dik kesişmesi** ve **açıortay olması** Eşkenar Dörtgen ile Kare'nin en önemli ayırıcı özelliklerindendir!
      </div>
    `
  },

  // 12. Dikdörtgen - Kare
  geo_dikdortgen_kare: {
    title: 'Dikdörtgen - Kare',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Dikdörtgen</h2>
      <ul>
        <li>Tüm açıları 90° olan paralelkenardır.</li>
        <li>Köşegen uzunlukları birbirine **eşittir** ve birbirini ortalar.</li>
        <li><strong>Çevre:</strong> 2(a + b), <strong>Alan:</strong> a · b</li>
      </ul>

      <h2>2. Kare</h2>
      <ul>
        <li>Tüm kenarları eşit ve tüm açıları 90° olan düzgün dörtgendir.</li>
        <li>Köşegen uzunlukları eşittir (a√2) ve birbirini **DİK keser**.</li>
        <li>Köşegenler açıortaydır (45° - 45° böler).</li>
        <li><strong>Çevre:</strong> 4a, <strong>Alan:</strong> a² veya <strong>e² / 2</strong></li>
      </ul>
    `
  },

  // 13. Yamuk - Deltoid
  geo_yamuk_deltoid: {
    title: 'Yamuk - Deltoid',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Yamuk</h2>
      <p>En az iki kenarı (tabanları) paralel olan dörtgendir.</p>
      <ul>
        <li><strong>Orta Taban:</strong> Yan kenarların orta noktalarını birleştiren doğrudur. m = (a + c) / 2</li>
        <li><strong>Yamuğun Alanı:</strong> (Üst Taban + Alt Taban) / 2 × Yükseklik = <strong>Orta Taban × h</strong></li>
        <li><strong>İkizkenar Yamuk:</strong> Paralel olmayan yan kenarları eşittir. Taban açıları eşittir. Köşegen uzunlukları eşittir.</li>
        <li><strong>Dik Yamuk:</strong> Yan kenarlarından biri tabanlara dik olan yamuktur.</li>
      </ul>

      <h2>2. Deltoid</h2>
      <p>Tabanları ortak iki ikizkenar üçgenin taban tabana birleşmesiyle oluşur.</p>
      <ul>
        <li>Köşegenler birbirini **DİK keser**.</li>
        <li>Ana köşegen (ikizkenar üçgenlerin tepe noktalarını birleştiren) açıortaydır.</li>
        <li><strong>Alan:</strong> (e · f) / 2</li>
      </ul>
    `
  },

  // 14. Çemberde Açı
  geo_cemberde_aci: {
    title: 'Çemberde Açı',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Açı Türleri ve Gören Yaylar</h2>
      <ul>
        <li><strong>Merkez Açı:</strong> Köşesi merkezde olan açıdır. Ölçüsü gördüğü yayın ölçüsüne **eşittir** (α = Yay).</li>
        <li><strong>Çevre Açı:</strong> Köşesi çember üzerinde olan açıdır. Ölçüsü gördüğü yayın ölçüsünün **yarısıdır** (α = Yay / 2).</li>
        <li><strong>Teğet-Kiriş Açı:</strong> Ölçüsü gördüğü yayın **yarısıdır**.</li>
        <li><strong>İç Açı:</strong> Çember içinde kesişen iki kirişin oluşturduğu açı, gördükleri yaylar toplamının yarısıdır: α = (A + B) / 2</li>
        <li><strong>Dış Açı:</strong> Çember dışında kesişen teğet/kesenlerin açısı, gördükleri yaylar farkının yarısıdır: α = (Büyük Yay - Küçük Yay) / 2</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Altın Kural</strong>
        <strong>Çapı gören çevre açı 90° dir!</strong> Çember sorularında çapı gören bir çevre açı fark ettiğinizde köşeye hemen 90° dik sembolünü koyun.
      </div>
    `
  },

  // 15. Çemberde Uzunluk
  geo_cemberde_uzunluk: {
    title: 'Çemberde Uzunluk',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Kiriş ve Teğet Özellikleri</h2>
      <ul>
        <li>Merkezden kirişe indirilen dikme, kirişi ve kirişin yayını **iki eşit parçaya böler**.</li>
        <li>Merkezden teğet değme noktasına çizilen yarıçap teğete **DİKTİR** (r ⊥ t).</li>
        <li>Çember dışındaki bir noktadan çizilen iki teğetin uzunluğu birbiriyle **eşittir**.</li>
      </ul>

      <h2>2. Kuvvet Bağıntıları</h2>
      <ul>
        <li><strong>İç Kuvvet:</strong> Kesişen iki kirişte a · b = c · d</li>
        <li><strong>Dış Teğet Kuvveti:</strong> Teğet parçanın karesi = Yakın kısım × Tamamı (t² = a · (a + b))</li>
      </ul>
    `
  },

  // 16. Dairede Alan
  geo_dairede_alan: {
    title: 'Dairede Alan',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Çevre ve Alan Formülleri</h2>
      <ul>
        <li><strong>Çemberin Çevresi:</strong> 2 · π · r</li>
        <li><strong>Dairenin Alanı:</strong> π · r²</li>
      </ul>

      <h2>2. Daire Dilimi ve Daire Parçasının Alanı</h2>
      <ul>
        <li><strong>α derecelik Daire Diliminin Alanı:</strong> π · r² · (α / 360°)</li>
        <li><strong>Yay Uzunluğu (l):</strong> 2 · π · r · (α / 360°)</li>
        <li><strong>Daire Dilim Alanı (Yayla):</strong> (l · r) / 2</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası</strong>
        İki daire diliminin benzerlik oranı yarıçaplar oranı (r1 / r2) kadardır. Alanlar oranı ise yarıçaplar oranının karesidir: (r1 / r2)².
      </div>
    `
  },

  // 17. Analitik Geometri
  geo_analitik_geometri: {
    title: 'Analitik Geometri',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. İki Nokta Arasındaki Uzaklık</h2>
      <p>A(x₁, y₁) ve B(x₂, y₂) noktaları arasındaki uzaklık:</p>
      <p><strong>|AB| = √[(x₂ - x₁)² + (y₂ - y₁)²]</strong></p>

      <h2>2. Orta Nokta Koordinatları</h2>
      <p><strong>C = ((x₁ + x₂)/2, (y₁ + y₂)/2)</strong></p>

      <h2>3. Doğrunun Eğimi (m)</h2>
      <ul>
        <li>İki noktadan geçen doğrunun eğimi: <strong>m = (y₂ - y₁) / (x₂ - x₁)</strong></li>
        <li>y = mx + n şeklinde ise x'in katsayısı m eğimdir.</li>
        <li>ax + by + c = 0 şeklinde ise <strong>m = -a / b</strong> dir.</li>
      </ul>

      <h2>4. Paralel ve Dik Doğrular</h2>
      <ul>
        <li>Paralel doğruların eğimleri eşittir: <strong>m₁ = m₂</strong></li>
        <li>Dik doğruların eğimleri çarpımı -1'dir: <strong>m₁ · m₂ = -1</strong></li>
      </ul>

      <h2>5. Noktanın Doğruya Uzaklığı</h2>
      <p>P(x₀, y₀) noktasının ax + by + c = 0 doğrusuna uzaklığı:</p>
      <p><strong>d = |a·x₀ + b·y₀ + c| / √(a² + b²)</strong></p>
    `
  },

  // 18. Katı Cisimler
  geo_kati_cisimler: {
    title: 'Katı Cisimler',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Prizmalar (Dikdörtgenler Prizması ve Küp)</h2>
      <ul>
        <li><strong>Dikdörtgenler Prizması (a, b, c):</strong> 
          <br/>Hacim = a · b · c 
          <br/>Yüzey Alanı = 2(ab + bc + ac) 
          <br/>Cisim Köşegeni = √(a² + b² + c²)
        </li>
        <li><strong>Küp (Bir kenarı a):</strong> 
          <br/>Hacim = a³ 
          <br/>Yüzey Alanı = 6a² 
          <br/>Cisim Köşegeni = a√3
        </li>
      </ul>

      <h2>2. Silindir (Yarıçapı r, Yüksekliği h)</h2>
      <ul>
        <li><strong>Hacim:</strong> Taban Alanı × Yükseklik = π · r² · h</li>
        <li><strong>Yanal Alan:</strong> 2 · π · r · h</li>
        <li><strong>Toplam Yüzey Alanı:</strong> 2πrh + 2πr²</li>
      </ul>

      <h2>3. Konik (Piramit ve Koni)</h2>
      <ul>
        <li><strong>Piramit Hacmi:</strong> (Taban Alanı × h) / 3</li>
        <li><strong>Koni Hacmi:</strong> (π · r² · h) / 3</li>
      </ul>

      <h2>4. Küre (Yarıçapı r)</h2>
      <ul>
        <li><strong>Hacim:</strong> (4/3) · π · r³</li>
        <li><strong>Yüzey Alanı:</strong> 4 · π · r²</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası</strong>
        Ucu sivri olan katı cisimlerin (Piramit, Koni) hacminde formül **3'e bölünür**. Prizma ve Silindir gibi tabanı ile tavanı aynı olan cisimlerde Hacim = Taban Alanı × Yükseklik'tir.
      </div>
    `
  }
};

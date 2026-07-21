// matData1.js - Matematik Konu İçerikleri (1/3)
// Konular: Temel Kavramlar, Sayı Basamakları, Asal Sayılar, Faktöriyel, Bölme-Bölünebilme, EBOB-EKOK, Rasyonel Sayılar, 1.Derece Denklem, 1.Derece Eşitsizlik

export const matTopicContents1 = {

  mat_temel: {
    title: 'Temel Kavramlar',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Sayı Kümeleri Hiyerarşisi</h2>
      <p>Sayı kümeleri birbirini kapsar: <strong>N ⊂ Z ⊂ Q ⊂ R</strong></p>
      <ul>
        <li><strong>Doğal Sayılar (N):</strong> {0, 1, 2, 3, …}. 0 doğal sayıdır.</li>
        <li><strong>Sayma (Pozitif Doğal) Sayılar (N⁺):</strong> {1, 2, 3, …}. 0 dahil değildir.</li>
        <li><strong>Tam Sayılar (Z):</strong> {…, −2, −1, 0, 1, 2, …}. 0 ne pozitif ne negatiftir.</li>
        <li><strong>Rasyonel Sayılar (Q):</strong> a/b biçiminde yazılabilen sayılar (b≠0). Sonlu veya periyodik ondalık gösterimleri vardır.</li>
        <li><strong>İrrasyonel Sayılar (I):</strong> Rasyonel olmayan gerçek sayılar. (√2, π, e). Periyodik olmayan ondalıklı sayılardır.</li>
        <li><strong>Gerçel (Reel) Sayılar (R):</strong> Rasyonel + İrrasyonel sayıların bütünü.</li>
      </ul>

      <h2>Tek – Çift Sayı Kuralları</h2>
      <ul>
        <li>Tek ± Tek = <strong>Çift</strong></li>
        <li>Çift ± Çift = <strong>Çift</strong></li>
        <li>Tek ± Çift = <strong>Tek</strong></li>
        <li>Tek × Tek = <strong>Tek</strong></li>
        <li>Tek × Çift = <strong>Çift</strong></li>
        <li>Çift × Çift = <strong>Çift</strong></li>
      </ul>
      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası</strong><br/>
        "a + b tek sayıdır" denildiğinde, a ve b'den birinin tek, diğerinin çift olması zorunludur.
        "a × b çifttir" denildiğinde ise en az biri çifttir diyebiliriz ama her ikisinin de çift olması gerekmez.
        ÖSYM bunu "Daima doğru olan hangisidir?" şeklinde sorar.
      </div>

      <h2>Sayı Doğrusu ve Mutlak Değer</h2>
      <p>Sayı doğrusunda 0'ın sağındaki sayılar pozitif, solundaki sayılar negatiftir.</p>
      <ul>
        <li>|a| = a (a ≥ 0 ise)</li>
        <li>|a| = −a (a &lt; 0 ise)</li>
        <li>|a − b|: a ile b'nin sayı doğrusundaki uzaklığıdır.</li>
      </ul>

      <h2>İşlem Önceliği (KPSS'de Sıkça Sorulan)</h2>
      <ol>
        <li>Parantez içi</li>
        <li>Üslü işlemler</li>
        <li>Çarpma ve Bölme (soldan sağa)</li>
        <li>Toplama ve Çıkarma (soldan sağa)</li>
      </ol>
      <div class="alert-box">
        <strong>⚠️ Tuzak: Eksi İşareti ve Üs</strong><br/>
        −3² = −9 (üs yalnızca 3'e uygulanır)<br/>
        (−3)² = +9 (üs −3'ün tamamına uygulanır)<br/>
        ÖSYM bu farkı çok sık soru olarak sorar!
      </div>
    `
  },

  mat_basamak: {
    title: 'Sayı Basamakları ve Çözümleme',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Basamak Adları ve Basamak Değeri</h2>
      <p>Örnek: <strong>357.924</strong></p>
      <ul>
        <li><strong>3</strong> → Yüz binler basamağı → Basamak değeri: 300.000</li>
        <li><strong>5</strong> → On binler basamağı → Basamak değeri: 50.000</li>
        <li><strong>7</strong> → Binler basamağı → Basamak değeri: 7.000</li>
        <li><strong>9</strong> → Yüzler basamağı → Basamak değeri: 900</li>
        <li><strong>2</strong> → Onlar basamağı → Basamak değeri: 20</li>
        <li><strong>4</strong> → Birler basamağı → Basamak değeri: 4</li>
      </ul>

      <h2>Rakam Değeri ≠ Basamak Değeri</h2>
      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası: En Çok Karıştırılan Kavram</strong><br/>
        357.924 sayısında:<br/>
        • 7'nin <strong>rakam değeri</strong> = 7<br/>
        • 7'nin <strong>basamak değeri</strong> = 7.000<br/>
        ÖSYM "kaçıncı basamakta?" değil "basamak değeri kaçtır?" şeklinde sorar. İkisini karıştırmayın!
      </div>

      <h2>Basamak Sayısı</h2>
      <ul>
        <li>1 basamaklı sayılar: 1–9 arası → 9 tane</li>
        <li>2 basamaklı sayılar: 10–99 arası → 90 tane</li>
        <li>3 basamaklı sayılar: 100–999 arası → 900 tane</li>
        <li>n basamaklı sayılar: 9 × 10^(n−1) tane</li>
      </ul>

      <h2>Sayı Çözümleme (Örnekler)</h2>
      <p>ABC üç basamaklı bir sayı ise: <strong>ABC = 100A + 10B + C</strong></p>
      <p>Rakamların toplamı: A + B + C</p>
      <p>Rakamların çarpımı: A × B × C</p>

      <div class="alert-box">
        <strong>⚠️ Klasik Soru Tipi</strong><br/>
        "Birler ve onlar basamağı yer değiştirince sayı 36 artıyorsa basamak farkı nedir?"<br/>
        Çözüm: Yeni sayı − Eski sayı = (10B + A) − (10A + B) = 9(B − A) = 36 → B − A = 4<br/>
        Bu tip sorularda <strong>9 × (basamak farkı)</strong> formülünü kullanın.
      </div>

      <h2>Farklı Sayı Sistemleri (2'lik, 8'lik, 16'lık)</h2>
      <p>KPSS'de nadiren çıksa da: İkili sistemde her basamak 2'nin kuvvetidir.</p>
      <p>Örnek: 1011₂ = 1×8 + 0×4 + 1×2 + 1×1 = <strong>11</strong></p>
    `
  },

  mat_asal: {
    title: 'Asal Sayılar ve Tam Bölenler',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Asal Sayılar</h2>
      <p>Yalnızca 1 ve kendisine tam bölünebilen 1'den büyük pozitif tam sayılardır.</p>
      <p><strong>100'e kadar asal sayılar (25 tane):</strong></p>
      <p style="font-family: monospace; background: rgba(139,92,246,0.1); padding: 0.8rem; border-radius: 8px; line-height: 2;">
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
      </p>

      <div class="alert-box">
        <strong>🎯 En Kritik Kurallar</strong>
        <ul>
          <li><strong>1 asal sayı DEĞİLDİR!</strong> (Ne asal ne de bileşik)</li>
          <li><strong>En küçük asal sayı 2'dir.</strong></li>
          <li><strong>Tek asal çift sayı 2'dir.</strong> Diğer tüm asal sayılar tektir.</li>
          <li>2 ve 3 ardışık iki asal sayıdır. Diğer ardışık asal sayı çiftleri ikiz asal (fark 2) olabilir: (3,5), (5,7), (11,13)…</li>
        </ul>
      </div>

      <h2>Tam Bölenler (约数)</h2>
      <p>Bir sayının tam bölenlerini bulmak için asal çarpanlarına ayırın.</p>
      <p><strong>n = p₁^a × p₂^b × p₃^c ise → Bölen sayısı = (a+1)(b+1)(c+1)</strong></p>
      <p>Örnek: 360 = 2³ × 3² × 5¹ → Bölen sayısı = (3+1)(2+1)(1+1) = 4×3×2 = <strong>24</strong></p>

      <div class="alert-box">
        <strong>⚠️ Bölen Sayısı Çift mi Tek mi?</strong><br/>
        Bir sayının bölen sayısı yalnızca o sayı <strong>tam kare</strong> ise tektir.<br/>
        Örnek: 36 = 2² × 3² → Bölen sayısı = (2+1)(2+1) = 9 (tek)<br/>
        Tam kare olmayan sayıların bölen sayısı daima çifttir. ÖSYM bunu çok sever!
      </div>

      <h2>Aralarında Asal Sayılar</h2>
      <p>OBEB (EBOB) = 1 olan iki sayı birbirine göre asaldır.</p>
      <div class="alert-box">
        <strong>🎯 Püf Noktası</strong><br/>
        "Aralarında asal" kavramı için her iki sayının kendisinin asal olması <strong>gerekmez!</strong><br/>
        Örnek: 8 ve 9 aralarında asaldır (EBOB=1), ama ikisi de asal sayı değildir.<br/>
        1, tüm pozitif tam sayılarla aralarında asaldır.
      </div>
    `
  },

  mat_faktoriyel: {
    title: 'Faktöriyel',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Faktöriyel Tanımı</h2>
      <p>n! = n × (n−1) × (n−2) × … × 2 × 1</p>
      <ul>
        <li>0! = <strong>1</strong> (tanım gereği)</li>
        <li>1! = 1</li>
        <li>2! = 2</li>
        <li>3! = 6</li>
        <li>4! = 24</li>
        <li>5! = 120</li>
        <li>6! = 720</li>
        <li>7! = 5.040</li>
        <li>8! = 40.320</li>
        <li>10! = 3.628.800</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası: 0! = 1</strong><br/>
        "0! kaçtır?" sorusu sınav klasiğidir. Cevap <strong>1</strong>'dir.
        Aynı şekilde "n! / n! = 1" ve "(n+1)! = (n+1) × n!" ilişkilerini ezberleyin.
      </div>

      <h2>Faktöriyelde Sıfır Sayısı</h2>
      <p>n! sayısının sonundaki sıfır sayısını bulmak için 5'in kuvvetlerini sayarız:</p>
      <p><strong>Sıfır sayısı = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + …</strong></p>
      <p>Örnek: 100! sonundaki sıfır sayısı = ⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = <strong>24</strong></p>

      <div class="alert-box">
        <strong>⚠️ Tuzak: Neden 2'yi Saymıyoruz?</strong><br/>
        10 = 2 × 5 olduğundan, her 5'e karşılık kesinlikle bir 2 bulunur.
        Faktöriyelde 2'ler, 5'lerden daima fazladır. Bu yüzden yalnızca 5'in katlarını sayarız.
      </div>

      <h2>Faktöriyel Sadeleştirme</h2>
      <p>n! / (n−k)! = n × (n−1) × … × (n−k+1)</p>
      <p>Örnek: 8! / 5! = 8 × 7 × 6 = 336</p>
      <p>Örnek: (n+2)! / n! = (n+2)(n+1)</p>
    `
  },

  mat_bolme: {
    title: 'Bölme ve Bölünebilme Kuralları',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Bölme Algoritması</h2>
      <p><strong>Bölünen = Bölen × Bölüm + Kalan</strong></p>
      <p>Kalan, daima bölenden küçüktür: 0 ≤ Kalan &lt; Bölen</p>

      <h2>Bölünebilme Kuralları</h2>
      <ul>
        <li><strong>2'ye bölünme:</strong> Birler basamağı çift (0, 2, 4, 6, 8) olmalı.</li>
        <li><strong>3'e bölünme:</strong> Rakamlar toplamı 3'e tam bölünmeli.</li>
        <li><strong>4'e bölünme:</strong> Son iki basamak (onlar + birler) 4'e tam bölünmeli.</li>
        <li><strong>5'e bölünme:</strong> Birler basamağı 0 veya 5 olmalı.</li>
        <li><strong>6'ya bölünme:</strong> Hem 2'ye hem 3'e bölünmeli.</li>
        <li><strong>8'e bölünme:</strong> Son üç basamak 8'e tam bölünmeli.</li>
        <li><strong>9'a bölünme:</strong> Rakamlar toplamı 9'a tam bölünmeli.</li>
        <li><strong>10'a bölünme:</strong> Birler basamağı 0 olmalı.</li>
        <li><strong>11'e bölünme:</strong> Tek basamakların toplamı − Çift basamakların toplamı = 0 veya 11'in katı olmalı.</li>
        <li><strong>25'e bölünme:</strong> Son iki basamak 00, 25, 50 veya 75 olmalı.</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası: 7 ve 11 Kuralı</strong><br/>
        <strong>7'ye bölünme</strong> için genel bir kural ezberlenmez; KPSS'de deneme/yanılma yöntemi kullanılır veya soru bunu gerektirmez.<br/>
        <strong>11'e bölünme:</strong> 253 sayısı için: (3 + 2) − 5 = 0 → 11'e tam bölünür.
        ÖSYM bu kuralı "hangi sayı 11'e bölünür?" sorusunda sıkça sorar.
      </div>

      <h2>Bölme ile İlgili Önemli Özellikler</h2>
      <ul>
        <li>a, b'ye bölünüyorsa ve b, c'ye bölünüyorsa → a, c'ye de bölünür.</li>
        <li>a ve b, m'ye bölünüyorsa → (a + b) ve (a − b) de m'ye bölünür.</li>
        <li>a, m'ye bölünüyorsa → a × k da m'ye bölünür (k herhangi tam sayı).</li>
      </ul>

      <div class="alert-box">
        <strong>⚠️ Kalan Hesaplama Tuzağı</strong><br/>
        "a sayısı 7'ye bölününce kalan 3, b sayısı 7'ye bölününce kalan 5 ise a + b'nin 7'ye bölümünden kalan nedir?"<br/>
        Kalan: (3 + 5) mod 7 = 8 mod 7 = <strong>1</strong><br/>
        Kalanlar toplamı bölenden büyük olursa tekrar bölme işlemi uygulanır!
      </div>
    `
  },

  mat_ebok_ekok: {
    title: 'EBOB ve EKOK',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Tanımlar</h2>
      <ul>
        <li><strong>EBOB (En Büyük Ortak Bölen):</strong> İki veya daha fazla sayının ortak bölenlerinin en büyüğüdür.</li>
        <li><strong>EKOK (En Küçük Ortak Kat):</strong> İki veya daha fazla sayının ortak katlarının en küçüğüdür.</li>
      </ul>

      <h2>Asal Çarpanlara Ayırarak Hesaplama</h2>
      <p>Örnek: EBOB(48, 36) ve EKOK(48, 36) bulalım.</p>
      <p>48 = 2⁴ × 3¹</p>
      <p>36 = 2² × 3²</p>
      <p><strong>EBOB:</strong> Ortak asal çarpanların <strong>en küçük</strong> kuvvetlerinin çarpımı → 2² × 3¹ = 4 × 3 = <strong>12</strong></p>
      <p><strong>EKOK:</strong> Tüm asal çarpanların <strong>en büyük</strong> kuvvetlerinin çarpımı → 2⁴ × 3² = 16 × 9 = <strong>144</strong></p>

      <div class="alert-box">
        <strong>🎯 KPSS Altın Kuralı</strong><br/>
        <strong>EBOB(a, b) × EKOK(a, b) = a × b</strong><br/>
        Bu formül iki sayı için geçerlidir. Üç sayıya uygulanmaz!<br/>
        Kontrol: 12 × 144 = 1728 = 48 × 36 = 1728 ✓
      </div>

      <h2>Pratik Uygulamalar</h2>
      <h3>EBOB Uygulamaları</h3>
      <ul>
        <li>Eşit parçalara bölme soruları (karo döşeme, arazi bölme)</li>
        <li>Kaç gruba ayrılır? → EBOB soruları</li>
      </ul>
      <h3>EKOK Uygulamaları</h3>
      <ul>
        <li>Birlikte tekrar ne zaman buluşurlar? → EKOK soruları</li>
        <li>Periyodik olayların çakışması → EKOK soruları</li>
      </ul>

      <div class="alert-box">
        <strong>⚠️ Klasik Soru Tipi</strong><br/>
        "A her 12 günde, B her 8 günde markete gidiyor. Aynı gün gittiklerinde kaç gün sonra tekrar aynı gün giderler?"<br/>
        Çözüm: EKOK(12, 8) = 24 gün.<br/><br/>
        "126 kalemi ve 84 defteri eşit sayıda dağıtmak istiyoruz. En fazla kaç gruba dağıtılabilir?"<br/>
        Çözüm: EBOB(126, 84) = 42 grup.
      </div>
    `
  },

  mat_rasyonel: {
    title: 'Rasyonel Sayılar',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Rasyonel Sayı Nedir?</h2>
      <p>a/b biçiminde yazılabilen sayılardır (a, b ∈ Z ve b ≠ 0). Tam sayılar, kesirler ve sonlu/periyodik ondalıklar bu kümeye girer.</p>

      <h2>Kesirlerle İşlemler</h2>
      <ul>
        <li><strong>Toplama/Çıkarma:</strong> Paydaları eşitlendikten sonra paylar toplanır/çıkarılır.</li>
        <li><strong>Çarpma:</strong> Pay × Pay / Payda × Payda</li>
        <li><strong>Bölme:</strong> Birinci kesir × İkinci kesrin tersi (çevrik ile çarp)</li>
      </ul>

      <h2>Kesir Türleri</h2>
      <ul>
        <li><strong>Tam Kesir:</strong> Pay &lt; Payda (3/5 gibi)</li>
        <li><strong>Görünür Kesir:</strong> Pay = Payda (5/5 = 1)</li>
        <li><strong>Bileşik Kesir:</strong> Pay > Payda (7/3 gibi)</li>
        <li><strong>Karışık Kesir:</strong> Tam sayı + Tam kesir (2 + 1/3 = 7/3)</li>
      </ul>

      <h2>Ondalık Gösterim</h2>
      <ul>
        <li>Sonlu ondalık → Rasyonel: 0,25 = 1/4</li>
        <li>Periyodik ondalık → Rasyonel: 0,333… = 1/3</li>
        <li>Periyodik olmayan sonsuz ondalık → İrrasyonel: π = 3,14159…</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 Periyodik Ondalığı Kesre Çevirme</strong><br/>
        0,272727… = 0,̄2̄7̄<br/>
        x = 0,272727…<br/>
        100x = 27,272727…<br/>
        100x − x = 27 → 99x = 27 → x = <strong>27/99 = 3/11</strong><br/>
        Periyot kaç haneliyse o kuvvet 10'u katsayıyla çarpılır.
      </div>

      <h2>Sayı Doğrusunda Kesirler</h2>
      <div class="alert-box">
        <strong>⚠️ Kesir Karşılaştırma Püf Noktası</strong><br/>
        Payda eşitleme zorunda değilsiniz: a/b ve c/d kesirlerini karşılaştırmak için <strong>çapraz çarp:</strong><br/>
        Eğer a×d > b×c ise → a/b > c/d<br/>
        Örnek: 3/7 vs 4/9: 3×9 = 27, 7×4 = 28 → 27 &lt; 28 → 3/7 &lt; 4/9
      </div>
    `
  },

  mat_denklem: {
    title: '1. Dereceden Denklemler',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>1. Dereceden Denklem</h2>
      <p>ax + b = 0 (a ≠ 0) biçimindeki denklemlerdir. Çözümü: <strong>x = −b/a</strong></p>

      <h2>Denklem Çözme Adımları</h2>
      <ol>
        <li>Parantezleri aç.</li>
        <li>Kesirleri temizle (her iki tarafı EKOK ile çarp).</li>
        <li>Bilinmeyeni bir tarafa, sabitleri diğer tarafa topla.</li>
        <li>Sadeleştir.</li>
      </ol>

      <h2>Örnek Çözümler</h2>
      <p><strong>Örnek 1:</strong> 3(x − 2) + 5 = 2x + 7</p>
      <p>3x − 6 + 5 = 2x + 7 → 3x − 1 = 2x + 7 → x = <strong>8</strong></p>

      <p><strong>Örnek 2:</strong> x/3 + 1/2 = 5/6</p>
      <p>Her tarafı 6 ile çarparız: 2x + 3 = 5 → 2x = 2 → x = <strong>1</strong></p>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası: Denklemin Çözüm Kümesi</strong>
        <ul>
          <li>a ≠ 0: Tek çözüm vardır (x = −b/a)</li>
          <li>a = 0, b = 0 (0 = 0): Sonsuz çözüm vardır. Çözüm kümesi = R</li>
          <li>a = 0, b ≠ 0 (örn. 0 = 5): Çözüm yoktur. Çözüm kümesi = ∅</li>
        </ul>
        Bu üç durum ÖSYM'de seçenekler üzerinden test edilir!
      </div>

      <h2>İki Bilinmeyenli Denklem Sistemleri</h2>
      <p>İki denklem, iki bilinmeyen: Yerine koyma veya eleman yok etme yöntemi.</p>
      <div class="alert-box">
        <strong>⚠️ Hız Püf Noktası: Toplama/Çıkarma Yöntemi</strong><br/>
        3x + 2y = 16<br/>
        x − 2y = 4<br/>
        Taraf tarafa toplarsak: 4x = 20 → x = 5 → y = 0,5<br/>
        Katsayılar uygun değilse önce birini uygun katsayı ile çarpın!
      </div>
    `
  },

  mat_esitsizlik: {
    title: '1. Dereceden Eşitsizlikler',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Eşitsizlik İşaret Kuralları</h2>
      <ul>
        <li>Her iki tarafa aynı sayı eklenirse/çıkarılırsa işaret değişmez.</li>
        <li>Her iki taraf <strong>pozitif</strong> sayıyla çarpılır/bölünürse işaret değişmez.</li>
        <li>Her iki taraf <strong>negatif</strong> sayıyla çarpılır/bölünürse işaret <strong>TERSINE DÖNER</strong>.</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS'nin En Çok Tuzak Kurduğu Yer!</strong><br/>
        −2x &lt; 6 → Her iki tarafı −2'ye bölünce işaret tersine döner → x &gt; −3<br/>
        Bu kuralı unutanlar yanlış işaret yazar ve soru yanlış çıkar!
      </div>

      <h2>Çözüm Kümesi ve Sayı Doğrusu</h2>
      <p>ax + b &lt; c türü eşitsizlikler:</p>
      <ol>
        <li>b'yi sağ tarafa geçir: ax &lt; c − b</li>
        <li>Her iki tarafı a'ya böl (a &lt; 0 ise işaret tersine döner)</li>
        <li>Çözüm kümesini sayı doğrusunda göster</li>
      </ol>

      <h2>Birleşik Eşitsizlikler</h2>
      <p><strong>Ve (∩) bağlantısı:</strong> Her iki koşul aynı anda sağlanmalı.</p>
      <p><strong>Veya (∪) bağlantısı:</strong> Koşullardan biri sağlandığında yeterlidir.</p>

      <div class="alert-box">
        <strong>⚠️ Klasik Soru: Tam Sayı Çözümleri</strong><br/>
        "−3 &lt; 2x + 1 ≤ 9 eşitsizliğini sağlayan tam sayı x değerleri kaçtır?"<br/>
        −4 &lt; 2x ≤ 8 → −2 &lt; x ≤ 4<br/>
        Tam sayılar: −1, 0, 1, 2, 3, 4 → <strong>6 tane</strong><br/>
        "Kaç tam sayı değeri" sorusunda sınır değerlerine dikkat!
      </div>

      <h2>Mutlak Değerli Eşitsizlikler</h2>
      <ul>
        <li>|x| &lt; a → −a &lt; x &lt; a (a > 0)</li>
        <li>|x| > a → x &lt; −a veya x > a (a > 0)</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Ezber Kolaylaştırıcı</strong><br/>
        |x − 3| &lt; 5: 3 merkez, 5 yarıçap → (−2, 8) aralığı.<br/>
        "Mutlak değer küçükse = merkez ± yarıçap arası" şeklinde düşünün.
      </div>
    `
  },
};

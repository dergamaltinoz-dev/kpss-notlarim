// matData.js - Matematik Konu İçerikleri
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
}),
  ...(// matData2.js - Matematik Konu İçerikleri (2/3)
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
}),
  ...(// matData3.js - Matematik Konu İçerikleri (3/3)
// Konular: Problem Kurma, Yaş, Yüzde-Kar-Zarar, İşçi, Hareket, Kümeler, Modüler Aritmetik, Permütasyon, Kombinasyon-Olasılık, Tablo-Grafik, Sayısal Mantık

export const matTopicContents3 = {

  mat_problem: {
    title: 'Denklem Kurma Problemleri',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Problem Çözme Stratejisi</h2>
      <ol>
        <li>Bilinmeyeni belirle ve değişken adı ver (x, y…).</li>
        <li>Problemi dikkatle oku, ilişkileri matematiksel ifadeye çevir.</li>
        <li>Denklem(leri) kur ve çöz.</li>
        <li>Cevabı problemin koşullarına göre kontrol et (negatif yaş olmaz, vb.).</li>
      </ol>

      <h2>Sayı Problemleri</h2>
      <p>İki ardışık tam sayı: n ve n+1</p>
      <p>İki ardışık çift sayı: 2n ve 2n+2</p>
      <p>İki ardışık tek sayı: 2n+1 ve 2n+3</p>
      <div class="alert-box">
        <strong>🎯 Ardışık Sayılar Püf Noktası</strong><br/>
        n ardışık tam sayının toplamı = n × (Orta terim) = n × (İlk + Son)/2<br/>
        3 ardışık sayı: (n−1) + n + (n+1) = 3n → Toplamı 3'e tam bölünür!<br/>
        5 ardışık sayının toplamı = 5 × (Orta terim) → Toplamı 5'e tam bölünür!
      </div>

      <h2>Rakam Problemleri</h2>
      <p>AB iki basamaklı sayısı = 10A + B</p>
      <p>Rakamları yer değiştirince: BA = 10B + A</p>
      <p>AB + BA = 11(A + B) → Her zaman 11'in katıdır!</p>
      <div class="alert-box">
        <strong>⚠️ Klasik Rakam Sorusu</strong><br/>
        "Rakamları yer değiştirince 27 artıyor" → (10B + A) − (10A + B) = 27 → 9(B − A) = 27 → B − A = 3<br/>
        Yer değiştirince artan/azalan miktar daima <strong>9 × (basamak farkı)</strong>'dır!
      </div>
    `
  },

  mat_yas: {
    title: 'Yaş Problemleri',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Yaş Problemlerinin Temel Mantığı</h2>
      <ul>
        <li>Şu anki yaş x ise, n yıl sonraki yaş = x + n</li>
        <li>Şu anki yaş x ise, n yıl önceki yaş = x − n</li>
        <li>İki kişi arasındaki yaş farkı her zaman sabittir!</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası: Yaş Farkı Sabittir!</strong><br/>
        Ali, Veli'den 5 yaş büyükse, 10 yıl sonra da Ali Veli'den 5 yaş büyüktür.<br/>
        "A, B'nin 3 katı yaşındayken B 10 yaşındaydı" tipli sorular:<br/>
        Önce yaş farkını bulun → Her zaman aynı kalır → Geriye kalanı denklemle çözün!
      </div>

      <h2>Örnek Çözüm Tekniği</h2>
      <p><strong>Soru:</strong> Babanın şu anki yaşı oğlunun 4 katıdır. 6 yıl sonra babanın yaşı oğlunun 3 katı olacaktır. Babanın şu anki yaşı kaçtır?</p>
      <p>Oğul = x, Baba = 4x</p>
      <p>6 yıl sonra: 4x + 6 = 3(x + 6) → 4x + 6 = 3x + 18 → x = 12</p>
      <p>Baba = 4 × 12 = <strong>48</strong></p>

      <div class="alert-box">
        <strong>⚠️ Tablo Yöntemi ile Çözüm</strong><br/>
        <table style="width:100%; text-align:center; border-collapse:collapse; margin-top:8px">
          <tr style="background:rgba(139,92,246,0.2)"><th style="padding:6px;border:1px solid rgba(255,255,255,0.1)">Kişi</th><th style="padding:6px;border:1px solid rgba(255,255,255,0.1)">Şimdi</th><th style="padding:6px;border:1px solid rgba(255,255,255,0.1)">6 Yıl Sonra</th></tr>
          <tr><td style="padding:6px;border:1px solid rgba(255,255,255,0.1)">Oğul</td><td style="padding:6px;border:1px solid rgba(255,255,255,0.1)">x</td><td style="padding:6px;border:1px solid rgba(255,255,255,0.1)">x+6</td></tr>
          <tr><td style="padding:6px;border:1px solid rgba(255,255,255,0.1)">Baba</td><td style="padding:6px;border:1px solid rgba(255,255,255,0.1)">4x</td><td style="padding:6px;border:1px solid rgba(255,255,255,0.1)">4x+6</td></tr>
        </table><br/>
        Tablo kurmak hata yapma ihtimalini önemli ölçüde azaltır!
      </div>
    `
  },

  mat_yuzde: {
    title: 'Yüzde, Kâr ve Zarar Problemleri',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Yüzde Hesabı</h2>
      <ul>
        <li>A'nın %b'si = A × b/100</li>
        <li>A, B'nin yüzde kaçıdır? = (A/B) × 100</li>
        <li>A, %b arttı → Yeni değer = A × (1 + b/100)</li>
        <li>A, %b azaldı → Yeni değer = A × (1 − b/100)</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 Ardışık İndirim Püf Noktası</strong><br/>
        %20 indirim sonra %10 indirim = Toplam %30 indirim DEĞİL!<br/>
        Doğru hesap: 1 × 0,80 × 0,90 = 0,72 → Yani %28 toplam indirim!<br/>
        "İki indirim toplamı" diye bir şey yoktur, çarpmalıdır!
      </div>

      <h2>Kâr - Zarar Formülleri</h2>
      <ul>
        <li><strong>Kâr:</strong> Satış Fiyatı > Alış Fiyatı → Kâr = SF − AF</li>
        <li><strong>Zarar:</strong> Satış Fiyatı &lt; Alış Fiyatı → Zarar = AF − SF</li>
        <li>Kâr % = (Kâr / Alış Fiyatı) × 100</li>
        <li>Zarar % = (Zarar / Alış Fiyatı) × 100</li>
      </ul>

      <div class="alert-box">
        <strong>⚠️ En Sık Hata: Yüzdeyi Neyin Üzerinden Hesaplıyoruz?</strong><br/>
        Kâr ve zarar yüzdesi <strong>her zaman alış fiyatı üzerinden</strong> hesaplanır!<br/>
        "Satış fiyatı üzerinden %20 kâr" ifadesi farklı anlam taşır, dikkat!<br/><br/>
        <strong>Etiket Fiyatı Soruları:</strong><br/>
        Alış fiyatı 100 TL, %30 kâr için etiket fiyatı = 130 TL.<br/>
        Etiket fiyatına %20 indirim yapılırsa SF = 130 × 0,80 = 104 TL → %4 kâr.
      </div>

      <h2>Bileşik Faiz (Vadesize Güncelleme)</h2>
      <ul>
        <li>Basit Faiz = Anapara × Faiz oranı × Süre</li>
        <li>Bileşik Faiz: Her dönem anapara değişir.</li>
      </ul>
    `
  },

  mat_isci: {
    title: 'İşçi Problemleri',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Temel Mantık: İş Birimi</h2>
      <p>Bir işçi işi t günde bitiriyorsa → 1 günde işin <strong>1/t</strong>'sini yapar.</p>
      <p>A, işi a günde; B, b günde bitiriyorsa birlikte 1 günde: <strong>1/a + 1/b</strong> iş yaparlar.</p>
      <p>Birlikte bitirme süresi: <strong>T = 1 / (1/a + 1/b) = ab / (a+b)</strong></p>

      <div class="alert-box">
        <strong>🎯 Formülü Ezberlemek Yerine Anlayın</strong><br/>
        A 4 günde, B 6 günde bitirir. Birlikte:<br/>
        1 günlük iş = 1/4 + 1/6 = 3/12 + 2/12 = 5/12<br/>
        Birlikte bitirme = 12/5 = 2,4 gün<br/>
        İşi "1 tam birim" olarak düşünün, 1 günde yapılanı toplayın!
      </div>

      <h2>Havuz Problemleri (Aynı Mantık)</h2>
      <p>Giren boru: +, Çıkan boru: −</p>
      <p>Havuzu a saatte dolduran: 1 saatte 1/a doldurur.</p>
      <p>Havuzu b saatte boşaltan: 1 saatte 1/b boşaltır.</p>
      <p>Net dolma hızı = 1/a − 1/b</p>

      <div class="alert-box">
        <strong>⚠️ Birlikte Başlayıp Ayrılan İşçi Soruları</strong><br/>
        A ve B birlikte 3 gün çalışır, A ayrılır, B 5 gün daha çalışarak bitirir. A kaç günde bitirir?<br/>
        Toplam iş = 1<br/>
        3 günlük ortak iş = 3(1/a + 1/b)<br/>
        5 günlük B işi = 5/b<br/>
        3/a + 3/b + 5/b = 1 → Denklem kur ve çöz.
      </div>
    `
  },

  mat_hareket: {
    title: 'Hareket Problemleri',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Temel Formül</h2>
      <p style="font-size: 1.4rem; text-align: center; padding: 1rem; background: rgba(139,92,246,0.1); border-radius: 8px;">
        <strong>YOL = HIZ × ZAMAN &nbsp;&nbsp;&nbsp; (d = v × t)</strong>
      </p>

      <h2>Hareket Türleri</h2>
      <ul>
        <li><strong>Aynı Yönde Hareket:</strong> Aralarındaki uzaklık: |v₁ − v₂| × t</li>
        <li><strong>Zıt Yönde Hareket:</strong> Aralarındaki uzaklık: (v₁ + v₂) × t</li>
        <li><strong>Karşılıklı Yürüyüş:</strong> Toplam yol = (v₁ + v₂) × t</li>
        <li><strong>Takip:</strong> Yetişme süresi = Başlangıç farkı / (v₁ − v₂)</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 Ortalama Hız Tuzağı</strong><br/>
        Gidiş hızı v₁, dönüş hızı v₂ ise ortalama hız = (v₁ + v₂)/2 DEĞİL!<br/>
        Doğru formül: <strong>Ortalama hız = 2v₁v₂ / (v₁ + v₂)</strong> (Harmonik Ortalama)<br/>
        Örnek: Gidiş 60 km/s, dönüş 40 km/s → Ort. hız = 2×60×40/(60+40) = 4800/100 = <strong>48 km/s</strong>
      </div>

      <h2>Katarlar ve Tüneller</h2>
      <ul>
        <li>Katar bir noktayı geçiyor → Yol = Katar uzunluğu</li>
        <li>Katar tünelden geçiyor → Yol = Katar uzunluğu + Tünel uzunluğu</li>
        <li>İki katar karşılıklı geçiyor → Yol = İki katarın uzunluklarının toplamı</li>
      </ul>

      <div class="alert-box">
        <strong>⚠️ Saat - Dakika Dönüşümü</strong><br/>
        Hız km/saat, süre dakika veriliyorsa mutlaka dönüşüm yapın!<br/>
        30 dakika = 0,5 saat &nbsp; | &nbsp; 90 dakika = 1,5 saat<br/>
        Yol = 72 km/s × 45 dk = 72 × (45/60) = 72 × 0,75 = <strong>54 km</strong>
      </div>
    `
  },

  mat_kumeler: {
    title: 'Kümeler',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Küme Kavramları</h2>
      <ul>
        <li><strong>Eleman sayısı:</strong> n(A) veya |A|</li>
        <li><strong>Boş Küme:</strong> ∅ veya {}. Eleman sayısı 0'dır. Her kümenin alt kümesidir.</li>
        <li><strong>Evrensel Küme (E):</strong> Tüm elemanları içeren kümedir.</li>
        <li><strong>Alt küme:</strong> A ⊆ B: A'nın her elemanı B'de vardır.</li>
        <li>n elemanlı kümenin alt küme sayısı: <strong>2ⁿ</strong></li>
        <li>n elemanlı kümenin öz alt küme sayısı: <strong>2ⁿ − 1</strong> (boş küme dahil)</li>
      </ul>

      <h2>Küme İşlemleri</h2>
      <ul>
        <li><strong>Birleşim (A ∪ B):</strong> A veya B'de olan elemanların tümü.</li>
        <li><strong>Kesişim (A ∩ B):</strong> Hem A'da hem B'de olan elemanlar.</li>
        <li><strong>Fark (A \ B):</strong> A'da olup B'de olmayan elemanlar.</li>
        <li><strong>Tümleyen (Aᶜ):</strong> Evrensel kümede A'da olmayan elemanlar.</li>
      </ul>

      <h2>Formüller (KPSS'de Sıkça Sorulur)</h2>
      <p><strong>n(A ∪ B) = n(A) + n(B) − n(A ∩ B)</strong></p>
      <p><strong>n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)</strong></p>

      <div class="alert-box">
        <strong>🎯 Venn Şeması Soruları İçin Taktik</strong><br/>
        Üç küme sorularında içten dışa doğru çözün:<br/>
        1. Önce A ∩ B ∩ C'yi bul (en içteki bölge)<br/>
        2. Sonra ikili kesişimleri hesapla<br/>
        3. En son yalnızca A, yalnızca B, yalnızca C'yi hesapla<br/>
        Toplam: Tüm bölgelerin toplamı = Evrensel küme veya verilen toplam eleman sayısı
      </div>

      <div class="alert-box">
        <strong>⚠️ Boş Küme Tuzağı</strong><br/>
        ∅ ≠ {∅}: Boş küme ile boş kümeyi eleman olarak içeren küme farklıdır!<br/>
        n(∅) = 0 iken n({∅}) = 1'dir.
      </div>
    `
  },

  mat_modul: {
    title: 'İşlem ve Modüler Aritmetik',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Özel Tanımlı İşlemler</h2>
      <p>KPSS'de sıklıkla yeni bir işlem tanımlanıp o işlemle hesap yapmanız istenir.</p>
      <p>Örnek: a ∗ b = 2a + b − 3 tanımlanmış olsun.</p>
      <p>3 ∗ 4 = 2(3) + 4 − 3 = 7</p>
      <div class="alert-box">
        <strong>🎯 Özel İşlem Sorularında Dikkat Edilecekler</strong>
        <ul>
          <li>İşlemin değişme özelliği var mı? (a ∗ b = b ∗ a?)</li>
          <li>Etkisiz eleman var mı? (a ∗ e = a olacak e?)</li>
          <li>Birleşme özelliği var mı? ((a ∗ b) ∗ c = a ∗ (b ∗ c)?)</li>
        </ul>
        Bu soruları sormadan işlemi uygulamaya başlamayın!
      </div>

      <h2>Modüler Aritmetik</h2>
      <p>a mod m = a'yı m'ye böldüğünde kalan</p>
      <ul>
        <li>17 mod 5 = 2 (17 = 3×5 + 2)</li>
        <li>−7 mod 3 = 2 (−7 = −3×3 + 2)</li>
      </ul>

      <h2>Modüler Aritmetik Özellikleri</h2>
      <ul>
        <li>(a + b) mod m = [(a mod m) + (b mod m)] mod m</li>
        <li>(a × b) mod m = [(a mod m) × (b mod m)] mod m</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Haftanın Günü Soruları</strong><br/>
        "Bugün Salı ise 100 gün sonra hangi gündür?"<br/>
        100 ÷ 7 = 14 kalan 2 → Salı + 2 = Perşembe<br/>
        Takvim ve gün soruları tamamen mod 7 ile çözülür!
      </div>
    `
  },

  mat_permutasyon: {
    title: 'Permütasyon',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Permütasyon Nedir?</h2>
      <p>n farklı nesnenin r tanesini <strong>sıralı</strong> seçme yollarının sayısıdır.</p>
      <p style="font-size: 1.2rem; text-align:center; padding:1rem; background:rgba(139,92,246,0.1); border-radius:8px">
        <strong>P(n,r) = n! / (n−r)! = n × (n−1) × … × (n−r+1)</strong>
      </p>

      <h2>Özel Durumlar</h2>
      <ul>
        <li>P(n,n) = n! (n nesnenin tamamını sıralama)</li>
        <li>P(n,1) = n</li>
        <li>P(n,0) = 1</li>
      </ul>

      <h2>Kısıtlı Permütasyon</h2>
      <ul>
        <li><strong>Daima yanyana olacak elemanlar:</strong> Onları bir blok say, (toplam−1)! × (blok içi sıralama)</li>
        <li><strong>Hiçbir zaman yanyana olmayacak elemanlar:</strong> Diğerlerini diz, aralarına ve uçlara yerleştir.</li>
        <li><strong>Bazı yerlere kısıtlı:</strong> Kısıtlı yerleri önce doldur, kalanları yerleştir.</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 Dairesel Permütasyon</strong><br/>
        n kişiyi dairesel masaya oturtma: <strong>(n−1)!</strong><br/>
        Neden? Dairesel düzenlemede 1 kişiyi sabit tutup diğerlerini yerleştiririz.<br/>
        5 kişiyi yuvarlak masaya oturturken: (5−1)! = 4! = 24 yol
      </div>

      <div class="alert-box">
        <strong>⚠️ Necklace (Kolye) Düzeni</strong><br/>
        Kolye/bilezik gibi çevrilebilen düzenlemelerde: (n−1)! / 2<br/>
        (Sağa ve sola çevirme aynı sayılır)
      </div>
    `
  },

  mat_kombinasyon: {
    title: 'Kombinasyon ve Olasılık',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Kombinasyon</h2>
      <p>n farklı nesneden r tanesini <strong>sıra gözetmeksizin</strong> seçme sayısı:</p>
      <p style="font-size: 1.2rem; text-align:center; padding:1rem; background:rgba(139,92,246,0.1); border-radius:8px">
        <strong>C(n,r) = n! / (r! × (n−r)!)</strong>
      </p>
      <ul>
        <li>C(n,0) = C(n,n) = 1</li>
        <li>C(n,1) = n</li>
        <li>C(n,r) = C(n, n−r) → Simetri özelliği!</li>
        <li>C(n,r) + C(n,r+1) = C(n+1, r+1) → Pascal Üçgeni</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 Permütasyon vs. Kombinasyon Farkı</strong><br/>
        <strong>Permütasyon:</strong> Sıra önemlidir. (AB ≠ BA)<br/>
        <strong>Kombinasyon:</strong> Sıra önemsizdir. (AB = BA)<br/>
        Anahtar kelimeler: "seç, takım, komite, grup" → Kombinasyon / "diz, sırala, otur, yerleştir" → Permütasyon
      </div>

      <h2>Olasılık</h2>
      <p><strong>P(A) = n(A) / n(S)</strong></p>
      <p>n(A): Olayın gerçekleşme sayısı, n(S): Örneklem uzayının eleman sayısı</p>
      <ul>
        <li>0 ≤ P(A) ≤ 1</li>
        <li>P(A) + P(Aᶜ) = 1 → P(olmama) = 1 − P(olma)</li>
        <li>Bağımsız olaylar: P(A ∩ B) = P(A) × P(B)</li>
        <li>Bağımlı olaylar: P(A ∩ B) = P(A) × P(B|A)</li>
      </ul>

      <div class="alert-box">
        <strong>⚠️ Yerine Koymalı mı? Koymadan mı?</strong><br/>
        "Yerine koyarak çekme" → Her çekimde olasılık aynı (bağımsız olaylar)<br/>
        "Yerine koymadan çekme" → Her çekimde olasılık değişir (bağımlı olaylar)<br/>
        ÖSYM bu ayrımı çok sever. "İkinci çekimde..." sorusuna dikkat!
      </div>
    `
  },

  mat_tablo: {
    title: 'Tablo ve Grafik Yorumlama',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Tablo Yorumlama</h2>
      <p>KPSS'de tablolar genellikle şu soruları sormak için kullanılır:</p>
      <ul>
        <li>En büyük/en küçük değer hangisidir?</li>
        <li>Belirli bir satır veya sütunun toplamı/ortalaması nedir?</li>
        <li>Oran/yüzde hesabı</li>
        <li>Belirli koşulu sağlayan kaç kayıt vardır?</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 Tablo Sorularında Hız Stratejisi</strong>
        <ol>
          <li>Önce soruyu okuyun, tabloya sonra bakın.</li>
          <li>Tablonun neyi gösterdiğini anlamak için başlık ve birim satırına bakın.</li>
          <li>İhtiyaç duyduğunuz sütun/satırları okuyun, tamamını ezberlemeye çalışmayın.</li>
          <li>Yüzde sorularında paydanın ne olduğuna dikkat edin (Toplam mı? Sütun toplamı mı?).</li>
        </ol>
      </div>

      <h2>Grafik Türleri</h2>
      <ul>
        <li><strong>Çizgi Grafik:</strong> Zaman içindeki değişimi gösterir. En hızlı artış/azalış en dik bölgededir.</li>
        <li><strong>Sütun/Bar Grafik:</strong> Kategorileri karşılaştırmak için kullanılır.</li>
        <li><strong>Pasta (Daire) Grafik:</strong> Yüzdesel payları gösterir. Toplam = 360° = %100</li>
        <li><strong>Dağılım (Nokta) Grafiği:</strong> İki değişken arasındaki ilişkiyi gösterir.</li>
      </ul>

      <div class="alert-box">
        <strong>⚠️ Pasta Grafik Hesabı</strong><br/>
        Bir dilim 72° ise toplam değerin kaç %'ini gösterir?<br/>
        72 / 360 × 100 = <strong>%20</strong><br/>
        Oran = Açı / 360 formülünü kullanın.
      </div>
    `
  },

  mat_sayisal_mantik: {
    title: 'Sayısal Mantık',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Sayı Dizileri</h2>
      <p>KPSS'de sıklıkla bir dizinin kuralını bulup eksik terimi tamamlamanız istenir.</p>
      <ul>
        <li><strong>Aritmetik Dizi:</strong> Her terim bir öncekine sabit bir sayı eklenerek elde edilir. (2, 5, 8, 11, … → +3)</li>
        <li><strong>Geometrik Dizi:</strong> Her terim bir öncekiyle sabit bir sayıyla çarpılarak elde edilir. (3, 6, 12, 24, … → ×2)</li>
        <li><strong>Karma Diziler:</strong> Farkların farkı sabit, karelerin dizisi, Fibonacci vb.</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 Dizi Çözüm Stratejisi</strong>
        <ol>
          <li>Ardışık terimler arasındaki farkları hesapla.</li>
          <li>Farklar sabitise → Aritmetik Dizi.</li>
          <li>Farklar sabit değilse → Farkların farklarını al (2. dereceden dizi).</li>
          <li>Hâlâ çözülmediyse → Oranları kontrol et (geometrik olabilir).</li>
          <li>Çift/tek terimler ayrı kurala mı uyuyor? (Karma dizi)</li>
        </ol>
      </div>

      <h2>Mantık Problemleri</h2>
      <ul>
        <li><strong>Doğru-Yanlış Soruları:</strong> Tüm olasılıkları tabloya dökerek çözün.</li>
        <li><strong>Sıralama Soruları:</strong> Verilen koşulları sırayla uygulayın, elimineyle çözün.</li>
        <li><strong>Kim Ne Yaptı Soruları:</strong> Tablo kurarak her ihtimali test edin.</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 Mantık Tablosu Çözüm Tekniği</strong><br/>
        5 kişinin farklı işleri yaptığı sorularda:<br/>
        1. Kesin bilgileri tabloya işle.<br/>
        2. Bir kişinin işi bulunursa diğer kişiler o işi yapamaz.<br/>
        3. Elimineyle en az seçeneği kalan kişiyi bul, ondan başla.<br/>
        Bu teknik tüm KPSS mantık sorularında işe yarar!
      </div>

      <h2>Sayısal Örüntüler</h2>
      <p>Matris/kare içindeki sayı ilişkileri soruları:</p>
      <ul>
        <li>Satır veya sütunların toplamı/farkı/çarpımı sabit mi?</li>
        <li>Köşegenler arasında ilişki var mı?</li>
        <li>Her hücre komşularıyla nasıl ilişkili?</li>
      </ul>
    `
  },
})
};
// mockData.js - Ana Veri Dosyası
import { turkceTopicContents } from './turkceData1';
import { turkceTopicContents2 } from './turkceData2';
import { turkceTopicContents3 } from './turkceData3';

export const subjects = [
  { id: 'turkce', title: 'Türkçe', category: 'Genel Yetenek', icon: 'BookOpen', description: 'Sözcükte Anlam, Cümlede Anlam, Paragraf, Ses Bilgisi, Yapı Bilgisi, Sözcük Türleri, Cümle Bilgisi, Dil Bilgisi, Noktalama İşaretleri, Yazım Kuralları, Anlatım Bozukluğu ve Sözel Mantık.' },
  { id: 'matematik', title: 'Matematik', category: 'Genel Yetenek', icon: 'Calculator', description: 'Temel Kavramlar, Sayı Basamakları, Asal Sayılar, Faktöriyel, Bölme-Bölünebilme, EBOB-EKOK, Rasyonel Sayılar, Denklemler, Eşitsizlikler, Mutlak Değer, Üslü-Köklü Sayılar, Özdeşlikler, Oran-Orantı, Problemler, Kümeler, Permütasyon, Kombinasyon-Olasılık ve Sayısal Mantık.' },
  { id: 'tarih', title: 'Tarih', category: 'Genel Kültür', icon: 'Landmark', description: 'İslamiyet Öncesi, Osmanlı, İnkılap Tarihi.' },
  { id: 'cografya', title: 'Coğrafya', category: 'Genel Kültür', icon: 'Map', description: 'Türkiye\'nin Fiziki, Beşeri ve Ekonomik Coğrafyası.' },
  { id: 'vatandaslik', title: 'Vatandaşlık', category: 'Genel Kültür', icon: 'Scale', description: 'Temel Hukuk, Anayasa, İdare Hukuku.' }
];

export const topics = {
  turkce: [
    { id: 'tur_sozcukte_anlam', title: 'Sözcükte Anlam' },
    { id: 'tur_cumlede_anlam', title: 'Cümlede Anlam' },
    { id: 'tur_soz_obekleri', title: 'Söz Öbekleri (Deyimler, Atasözleri, İkilemeler)' },
    { id: 'tur_paragraf', title: 'Paragrafta Anlam' },
    { id: 'tur_ses_bilgisi', title: 'Ses Bilgisi' },
    { id: 'tur_yapi_bilgisi', title: 'Yapı Bilgisi' },
    { id: 'tur_sozcuk_turleri', title: 'Sözcük Türleri' },
    { id: 'tur_cumle_bilgisi', title: 'Cümle Bilgisi' },
    { id: 'tur_dil_bilgisi', title: 'Dil Bilgisi (Fiillerde Çatı ve Ek Fiil)' },
    { id: 'tur_noktalama', title: 'Noktalama İşaretleri' },
    { id: 'tur_yazim_kurallari', title: 'Yazım Kuralları' },
    { id: 'tur_anlatim_bozuklugu', title: 'Anlatım Bozukluğu' },
    { id: 'tur_sozel_mantik', title: 'Sözel Mantık' }
  ],
  matematik: [
    { id: 'mat_temel', title: 'Temel Kavramlar' },
    { id: 'mat_basamak', title: 'Sayı Basamakları ve Çözümleme' },
    { id: 'mat_asal', title: 'Asal Sayılar ve Tam Bölenler' },
    { id: 'mat_faktoriyel', title: 'Faktöriyel' },
    { id: 'mat_bolme', title: 'Bölme ve Bölünebilme Kuralları' },
    { id: 'mat_ebok_ekok', title: 'EBOB ve EKOK' },
    { id: 'mat_rasyonel', title: 'Rasyonel Sayılar' },
    { id: 'mat_denklem', title: '1. Dereceden Denklemler' },
    { id: 'mat_esitsizlik', title: '1. Dereceden Eşitsizlikler' },
    { id: 'mat_mutlak', title: 'Mutlak Değer' },
    { id: 'mat_uslu', title: 'Üslü Sayılar' },
    { id: 'mat_koklu', title: 'Köklü Sayılar' },
    { id: 'mat_ozdeslik', title: 'Özdeşlikler ve Çarpanlara Ayırma' },
    { id: 'mat_oran', title: 'Oran ve Orantı' },
    { id: 'mat_problem', title: 'Denklem Kurma Problemleri' },
    { id: 'mat_yas', title: 'Yaş Problemleri' },
    { id: 'mat_yuzde', title: 'Yüzde, Kâr ve Zarar Problemleri' },
    { id: 'mat_isci', title: 'İşçi Problemleri' },
    { id: 'mat_hareket', title: 'Hareket Problemleri' },
    { id: 'mat_kumeler', title: 'Kümeler' },
    { id: 'mat_modul', title: 'İşlem ve Modüler Aritmetik' },
    { id: 'mat_permutasyon', title: 'Permütasyon' },
    { id: 'mat_kombinasyon', title: 'Kombinasyon ve Olasılık' },
    { id: 'mat_tablo', title: 'Tablo ve Grafik Yorumlama' },
    { id: 'mat_sayisal_mantik', title: 'Sayısal Mantık' }
  ],
  tarih: [
    { id: 'tar_1', title: 'İslamiyet Öncesi Türk Tarihi' },
    { id: 'tar_2', title: 'Osmanlı Devleti - Kültür ve Medeniyet' }
  ],
  cografya: [
    { id: 'cog_1', title: 'Türkiye\'nin Coğrafi Konumu' }
  ],
  vatandaslik: [
    { id: 'vat_1', title: 'Hukukun Temel Kavramları' }
  ]
};

// Tüm konu içeriklerini birleştir
export const topicContents = {
  // Türkçe konuları
  ...turkceTopicContents,
  ...turkceTopicContents2,
  ...turkceTopicContents3,

  // ===== MATEMATİK KONULARI (25 konu) =====

  mat_temel: {
    title: 'Temel Kavramlar',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Sayı Kümeleri Hiyerarşisi</h2>
      <p>Sayı kümeleri birbirini kapsar: <strong>N ⊂ Z ⊂ Q ⊂ R</strong></p>
      <ul>
        <li><strong>Doğal Sayılar (N):</strong> {0, 1, 2, 3, …}. 0 doğal sayıdır.</li>
        <li><strong>Sayma Sayıları (N⁺):</strong> {1, 2, 3, …}. 0 dahil değildir.</li>
        <li><strong>Tam Sayılar (Z):</strong> {…, −2, −1, 0, 1, 2, …}. 0 ne pozitif ne negatiftir.</li>
        <li><strong>Rasyonel Sayılar (Q):</strong> a/b biçiminde yazılabilen sayılar (b≠0).</li>
        <li><strong>İrrasyonel Sayılar (I):</strong> √2, π, e gibi periyodik olmayan ondalıklı sayılar.</li>
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
        "a + b tek sayıdır" denildiğinde, a ve b'den birinin tek diğerinin çift olması zorunludur.
        ÖSYM bunu "Daima doğru olan hangisidir?" şeklinde sorar.
      </div>
      <h2>İşlem Önceliği</h2>
      <ol>
        <li>Parantez içi</li>
        <li>Üslü işlemler</li>
        <li>Çarpma ve Bölme (soldan sağa)</li>
        <li>Toplama ve Çıkarma (soldan sağa)</li>
      </ol>
      <div class="alert-box">
        <strong>⚠️ Tuzak: Eksi İşareti ve Üs</strong><br/>
        −3² = −9 (üs yalnızca 3'e uygulanır)<br/>
        (−3)² = +9 (üs −3'ün tamamına uygulanır)
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
        <li><strong>3</strong> → Yüz binler → Basamak değeri: 300.000</li>
        <li><strong>5</strong> → On binler → Basamak değeri: 50.000</li>
        <li><strong>7</strong> → Binler → Basamak değeri: 7.000</li>
        <li><strong>9</strong> → Yüzler → Basamak değeri: 900</li>
        <li><strong>2</strong> → Onlar → Basamak değeri: 20</li>
        <li><strong>4</strong> → Birler → Basamak değeri: 4</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 En Çok Karıştırılan Kavram</strong><br/>
        357.924 sayısında 7'nin <strong>rakam değeri</strong> = 7, <strong>basamak değeri</strong> = 7.000<br/>
        ÖSYM "basamak değeri kaçtır?" şeklinde sorar. İkisini karıştırmayın!
      </div>
      <h2>Basamak Sayısı</h2>
      <ul>
        <li>1 basamaklı: 1–9 → 9 tane</li>
        <li>2 basamaklı: 10–99 → 90 tane</li>
        <li>n basamaklı: 9 × 10^(n−1) tane</li>
      </ul>
      <h2>Sayı Çözümleme</h2>
      <p>ABC üç basamaklı bir sayı ise: <strong>ABC = 100A + 10B + C</strong></p>
      <div class="alert-box">
        <strong>⚠️ Klasik Soru Tipi</strong><br/>
        Birler ve onlar yer değiştirince sayı 36 artıyorsa: 9(B − A) = 36 → B − A = 4<br/>
        Yer değiştirme farkı = <strong>9 × (basamak farkı)</strong>
      </div>
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
      <p style="font-family:monospace;background:rgba(139,92,246,0.1);padding:0.8rem;border-radius:8px;line-height:2">
        2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
      </p>
      <div class="alert-box">
        <strong>🎯 En Kritik Kurallar</strong>
        <ul>
          <li><strong>1 asal sayı DEĞİLDİR!</strong></li>
          <li><strong>En küçük asal sayı 2'dir.</strong></li>
          <li><strong>Tek asal çift sayı 2'dir.</strong></li>
        </ul>
      </div>
      <h2>Tam Bölenler</h2>
      <p>n = p₁^a × p₂^b × p₃^c → Bölen sayısı = (a+1)(b+1)(c+1)</p>
      <p>Örnek: 360 = 2³ × 3² × 5¹ → Bölen sayısı = 4×3×2 = <strong>24</strong></p>
      <div class="alert-box">
        <strong>⚠️ Bölen Sayısı Tek mi?</strong><br/>
        Yalnızca <strong>tam kare</strong> sayıların bölen sayısı tektir. Örn: 36'nın 9 böleni vardır.
      </div>
      <h2>Aralarında Asal</h2>
      <div class="alert-box">
        <strong>🎯 Püf Noktası</strong><br/>
        8 ve 9 aralarında asaldır (EBOB=1), ama ikisi de asal sayı değildir!
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
        <li>1! = 1, 2! = 2, 3! = 6, 4! = 24, 5! = 120, 6! = 720, 7! = 5040</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 KPSS Klasiği: 0! = 1</strong><br/>
        "0! kaçtır?" sorusu sınav klasiğidir. Cevap <strong>1</strong>'dir.
      </div>
      <h2>Sonundaki Sıfır Sayısı</h2>
      <p><strong>Sıfır sayısı = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + …</strong></p>
      <p>Örnek: 100! → ⌊100/5⌋ + ⌊100/25⌋ = 20 + 4 = <strong>24</strong> sıfır</p>
      <div class="alert-box">
        <strong>⚠️ Neden Sadece 5'i Sayıyoruz?</strong><br/>
        Faktöriyelde 2'ler, 5'lerden daima fazladır. 10 = 2×5 olduğundan yalnızca 5'in katlarını sayarız.
      </div>
      <h2>Faktöriyel Sadeleştirme</h2>
      <p>8! / 5! = 8 × 7 × 6 = 336</p>
      <p>(n+2)! / n! = (n+2)(n+1)</p>
    `
  },

  mat_bolme: {
    title: 'Bölme ve Bölünebilme Kuralları',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Bölme Algoritması</h2>
      <p><strong>Bölünen = Bölen × Bölüm + Kalan</strong> &nbsp; (0 ≤ Kalan &lt; Bölen)</p>
      <h2>Bölünebilme Kuralları</h2>
      <ul>
        <li><strong>2:</strong> Birler basamağı çift (0,2,4,6,8)</li>
        <li><strong>3:</strong> Rakamlar toplamı 3'e tam bölünmeli</li>
        <li><strong>4:</strong> Son iki basamak 4'e tam bölünmeli</li>
        <li><strong>5:</strong> Birler basamağı 0 veya 5</li>
        <li><strong>6:</strong> Hem 2'ye hem 3'e bölünmeli</li>
        <li><strong>8:</strong> Son üç basamak 8'e tam bölünmeli</li>
        <li><strong>9:</strong> Rakamlar toplamı 9'a tam bölünmeli</li>
        <li><strong>11:</strong> Tek basamaklar top. − Çift basamaklar top. = 0 veya 11'in katı</li>
        <li><strong>25:</strong> Son iki basamak 00, 25, 50 veya 75</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Kalan Hesaplama</strong><br/>
        a, 7'ye bölünce kalan 3; b, 7'ye bölünce kalan 5 → a+b'nin kalanı: (3+5) mod 7 = <strong>1</strong><br/>
        Kalanlar toplamı bölenden büyükse tekrar böl!
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
        <li><strong>EBOB:</strong> Ortak bölenlerinin en büyüğü</li>
        <li><strong>EKOK:</strong> Ortak katlarının en küçüğü</li>
      </ul>
      <h2>Hesaplama</h2>
      <p>48 = 2⁴ × 3¹ &nbsp;&nbsp; 36 = 2² × 3²</p>
      <p><strong>EBOB:</strong> Ortak çarpanların en küçük kuvvetleri → 2² × 3¹ = <strong>12</strong></p>
      <p><strong>EKOK:</strong> Tüm çarpanların en büyük kuvvetleri → 2⁴ × 3² = <strong>144</strong></p>
      <div class="alert-box">
        <strong>🎯 Altın Kural</strong><br/>
        <strong>EBOB(a,b) × EKOK(a,b) = a × b</strong><br/>
        Kontrol: 12 × 144 = 1728 = 48 × 36 ✓ (Yalnızca iki sayı için geçerlidir!)
      </div>
      <h2>Uygulama Alanları</h2>
      <ul>
        <li><strong>EBOB:</strong> Kaç gruba eşit bölünür? (Karo döşeme, arazi paylaşımı)</li>
        <li><strong>EKOK:</strong> Kaç günde tekrar buluşurlar? (Periyodik olaylar)</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ Klasik Soru</strong><br/>
        A her 12, B her 8 günde markete gidiyor → EKOK(12,8) = 24 günde buluşurlar.<br/>
        126 kalem ve 84 defterin eşit dağıtımı → EBOB(126,84) = 42 gruba.
      </div>
    `
  },

  mat_rasyonel: {
    title: 'Rasyonel Sayılar',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Rasyonel Sayı Nedir?</h2>
      <p>a/b biçiminde yazılabilen sayılar (a,b ∈ Z, b≠0). Sonlu veya periyodik ondalıklar bu kümededir.</p>
      <h2>Kesirlerle İşlemler</h2>
      <ul>
        <li><strong>Toplama/Çıkarma:</strong> Paydaları eşitlendikten sonra paylar işleme sokulur.</li>
        <li><strong>Çarpma:</strong> Pay×Pay / Payda×Payda</li>
        <li><strong>Bölme:</strong> Birinci × İkincinin tersiyle çarp (çevrik)</li>
      </ul>
      <h2>Ondalık ↔ Kesir Dönüşümü</h2>
      <ul>
        <li>Sonlu → Rasyonel: 0,25 = 1/4</li>
        <li>Periyodik → Rasyonel: 0,333… = 1/3</li>
        <li>Periyodik olmayan sonsuz → İrrasyonel: π</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Periyodik → Kesir</strong><br/>
        0,2727… = x → 100x = 27,2727… → 99x = 27 → x = 27/99 = <strong>3/11</strong><br/>
        Periyot kaç haneliyse o kuvvet 10 ile çarpılır.
      </div>
      <div class="alert-box">
        <strong>⚠️ Kesir Karşılaştırma</strong><br/>
        3/7 vs 4/9: Çapraz çarp → 3×9=27, 7×4=28 → 27&lt;28 → 3/7 &lt; 4/9
      </div>
    `
  },

  mat_denklem: {
    title: '1. Dereceden Denklemler',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>1. Dereceden Denklem</h2>
      <p>ax + b = 0 (a≠0) → Çözüm: <strong>x = −b/a</strong></p>
      <h2>Çözüm Adımları</h2>
      <ol>
        <li>Parantezleri aç</li>
        <li>Kesirleri temizle (EKOK ile çarp)</li>
        <li>Bilinmeyeni bir tarafa topla</li>
        <li>Sadeleştir</li>
      </ol>
      <div class="alert-box">
        <strong>🎯 Çözüm Kümesi Durumları</strong>
        <ul>
          <li>a ≠ 0 → Tek çözüm: x = −b/a</li>
          <li>a = 0, b = 0 (0=0) → Sonsuz çözüm, K = R</li>
          <li>a = 0, b ≠ 0 (0=5 gibi) → Çözüm yok, K = ∅</li>
        </ul>
        Bu üç durum ÖSYM'de seçenekler üzerinden test edilir!
      </div>
      <h2>İki Bilinmeyenli Sistem</h2>
      <p>3x + 2y = 16 ve x − 2y = 4 → Taraf tarafa topla: 4x = 20 → x = 5</p>
      <div class="alert-box">
        <strong>⚠️ Hız: Toplama/Çıkarma Yöntemi</strong><br/>
        Katsayılar uygunsa direkt topla/çıkar. Değilse önce uygun katsayıyla çarp!
      </div>
    `
  },

  mat_esitsizlik: {
    title: '1. Dereceden Eşitsizlikler',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>İşaret Kuralları</h2>
      <ul>
        <li>Her iki tarafa aynı sayı ekleme/çıkarma → işaret değişmez</li>
        <li><strong>Pozitif</strong> ile çarp/böl → işaret değişmez</li>
        <li><strong>Negatif</strong> ile çarp/böl → işaret <strong>TERSINE DÖNER!</strong></li>
      </ul>
      <div class="alert-box">
        <strong>🎯 En Çok Hata Yapılan Yer!</strong><br/>
        −2x &lt; 6 → Her iki tarafı −2'ye böl → işaret tersine döner → x &gt; −3
      </div>
      <h2>Mutlak Değerli Eşitsizlikler</h2>
      <ul>
        <li>|x| &lt; a → −a &lt; x &lt; a</li>
        <li>|x| &gt; a → x &lt; −a veya x &gt; a</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ Tam Sayı Çözümleri Sorusu</strong><br/>
        −3 &lt; 2x+1 ≤ 9 → −2 &lt; x ≤ 4 → Tam sayılar: −1,0,1,2,3,4 → <strong>6 tane</strong><br/>
        Sınır değerlere dikkat! (&lt; ile ≤ farkı)
      </div>
    `
  },

  mat_mutlak: {
    title: 'Mutlak Değer',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Tanım</h2>
      <p>|a| = a (a≥0 ise) &nbsp; | &nbsp; |a| = −a (a&lt;0 ise)</p>
      <p>|a| ≥ 0 daima, |a| = 0 ⟺ a = 0, &nbsp; √(a²) = |a|</p>
      <div class="alert-box">
        <strong>🎯 Tuzak: −a Pozitif Olabilir!</strong><br/>
        a &lt; 0 ise |a| = −a ifadesindeki "−a" pozitiftir! (−(negatif) = pozitif)<br/>
        "−a daima negatiftir" YANLIŞ!
      </div>
      <h2>Özellikler</h2>
      <ul>
        <li>|a×b| = |a|×|b|</li>
        <li>|a+b| ≤ |a|+|b| (Üçgen Eşitsizliği)</li>
      </ul>
      <h2>Mutlak Değerli Denklem</h2>
      <p>|ax+b| = c (c≥0) → iki durum: ax+b = c veya ax+b = −c</p>
      <div class="alert-box">
        <strong>🎯 Geometrik Minimum</strong><br/>
        |x−2| + |x+3| minimum = iki noktanın uzaklığı = |2−(−3)| = <strong>5</strong><br/>
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
        <li>aᵐ × aⁿ = a^(m+n)</li>
        <li>aᵐ ÷ aⁿ = a^(m−n)</li>
        <li>(aᵐ)ⁿ = a^(m×n)</li>
        <li>a⁰ = 1 (a≠0) &nbsp; | &nbsp; a^(−n) = 1/aⁿ &nbsp; | &nbsp; a^(1/n) = ⁿ√a</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Son Rakam Bulma (mod 4 kısayolu)</strong><br/>
        2²⁰²³: 2023 ÷ 4 = kalan 3 → 2³ = 8 → son rakam <strong>8</strong><br/>
        2'nin periyodu: 2,4,8,6 (4'lük) &nbsp; | &nbsp; 3'ün periyodu: 3,9,7,1 (4'lük)
      </div>
      <h2>Kesirli Üsler</h2>
      <p>27^(2/3) = (³√27)² = 3² = <strong>9</strong></p>
      <div class="alert-box">
        <strong>⚠️ 0⁰ Tanımsızdır!</strong><br/>
        0^n = 0 (n&gt;0), a⁰ = 1 (a≠0), 0⁰ = tanımsız
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
        <li>√(a×b) = √a × √b (a,b≥0)</li>
        <li>(√a)² = a &nbsp; | &nbsp; <strong>√(a²) = |a|</strong></li>
        <li>√2 + √3 ≠ √5 (farklı kökler toplanamaz!)</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 En Kritik Kural: √(a²) = |a|</strong><br/>
        x = −3 ise √(x²) = √9 = 3 = |−3| ✓ (x değil, |x|)<br/>
        ÖSYM "√(x²) = x midir?" sorusunu çok sever.
      </div>
      <h2>Rasyonelleştirme</h2>
      <p>1/(√3+1) = (√3−1)/((√3)²−1²) = (√3−1)/2</p>
      <div class="alert-box">
        <strong>⚠️ Eşlenik Çarpma</strong><br/>
        a+√b ifadesinin eşleniği a−√b → (a+√b)(a−√b) = a²−b
      </div>
    `
  },

  mat_ozdeslik: {
    title: 'Özdeşlikler ve Çarpanlara Ayırma',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Temel Özdeşlikler</h2>
      <ul>
        <li>(a+b)² = a² + 2ab + b²</li>
        <li>(a−b)² = a² − 2ab + b²</li>
        <li>(a+b)(a−b) = a² − b²</li>
        <li>a³+b³ = (a+b)(a²−ab+b²)</li>
        <li>a³−b³ = (a−b)(a²+ab+b²)</li>
        <li>(a+b+c)² = a²+b²+c²+2ab+2bc+2ac</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 a²+b² Bulma Kısa Yolu</strong><br/>
        a+b=5, ab=3 ise → a²+b² = (a+b)²−2ab = 25−6 = <strong>19</strong><br/>
        a³+b³ = (a+b)(a²−ab+b²) = 5×(19−3) = <strong>80</strong>
      </div>
      <div class="alert-box">
        <strong>⚠️ a²+b² Çarpanlara AYRILAMAZ!</strong><br/>
        a²−b² = (a+b)(a−b) ✓ &nbsp; | &nbsp; a²+b² → Gerçel sayılarda çarpanlara ayrılamaz! ✗
      </div>
    `
  },

  mat_oran: {
    title: 'Oran ve Orantı',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Oran</h2>
      <p>İki niceliğin birbirine oranı: a/b veya a:b (b≠0). Birimi yoktur.</p>
      <h2>Orantı Türleri</h2>
      <ul>
        <li><strong>Doğru Orantı:</strong> x/y = k → x artarken y de artar. x₁/y₁ = x₂/y₂</li>
        <li><strong>Ters Orantı:</strong> x×y = k → x artarken y azalır. x₁×y₁ = x₂×y₂</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Oran Parçalama</strong><br/>
        a:b:c = 2:3:5 ve toplam 100 ise: a=20, b=30, c=50
      </div>
      <div class="alert-box">
        <strong>⚠️ Orana Sayı Eklenirse Oran Değişir!</strong><br/>
        a/b = 3/5 → (a+2)/(b+2) ≠ 3/5 (genellikle) ✗<br/>
        Her iki terim aynı katsayıyla çarpılırsa oran korunur: 3k/5k = 3/5 ✓
      </div>
    `
  },

  mat_problem: {
    title: 'Denklem Kurma Problemleri',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Problem Çözme Stratejisi</h2>
      <ol>
        <li>Bilinmeyeni belirle ve değişken adı ver</li>
        <li>İlişkileri matematiksel ifadeye çevir</li>
        <li>Denklem kur ve çöz</li>
        <li>Cevabı kontrol et (negatif yaş olmaz, vb.)</li>
      </ol>
      <h2>Ardışık Sayılar</h2>
      <p>İki ardışık tam sayı: n ve n+1</p>
      <p>İki ardışık çift sayı: 2n ve 2n+2</p>
      <p>İki ardışık tek sayı: 2n+1 ve 2n+3</p>
      <div class="alert-box">
        <strong>🎯 Ardışık Sayılar Toplamı</strong><br/>
        3 ardışık sayının toplamı 3'e tam bölünür! (n−1)+n+(n+1) = 3n<br/>
        5 ardışık sayının toplamı = 5 × (Orta terim)
      </div>
      <h2>Rakam Problemleri</h2>
      <p>AB = 10A+B &nbsp; | &nbsp; BA = 10B+A &nbsp; | &nbsp; AB+BA = 11(A+B) → daima 11'in katı!</p>
      <div class="alert-box">
        <strong>⚠️ Klasik Rakam Sorusu</strong><br/>
        Yer değiştirince 27 artıyor → 9(B−A)=27 → B−A=3<br/>
        Değişim miktarı = <strong>9 × (basamak farkı)</strong>
      </div>
    `
  },

  mat_yas: {
    title: 'Yaş Problemleri',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Temel Mantık</h2>
      <ul>
        <li>Şu anki yaş x → n yıl sonra: x+n</li>
        <li>Şu anki yaş x → n yıl önce: x−n</li>
        <li><strong>İki kişi arasındaki yaş farkı daima sabittir!</strong></li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Altın Kural: Yaş Farkı Sabittir</strong><br/>
        Ali Veli'den 5 yaş büyükse, 10 yıl sonra da 5 yaş büyüktür.<br/>
        Önce yaş farkını bul → Denklem kur!
      </div>
      <h2>Örnek Çözüm</h2>
      <p>Baba = 4×Oğul, 6 yıl sonra Baba = 3×Oğul</p>
      <p>Oğul=x, Baba=4x → 4x+6 = 3(x+6) → x=12 → Baba=<strong>48</strong></p>
      <div class="alert-box">
        <strong>⚠️ Tablo Yöntemi</strong><br/>
        Kişi | Şimdi | n Yıl Sonra şeklinde tablo kurarak çözün. Hata oranı azalır!
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
        <li>A, %b arttı → Yeni = A × (1 + b/100)</li>
        <li>A, %b azaldı → Yeni = A × (1 − b/100)</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Ardışık İndirim Tuzağı</strong><br/>
        %20 sonra %10 indirim ≠ %30 indirim!<br/>
        Doğru: 1 × 0,80 × 0,90 = 0,72 → Toplam <strong>%28</strong> indirim
      </div>
      <h2>Kâr – Zarar</h2>
      <ul>
        <li>Kâr % = (Kâr / Alış Fiyatı) × 100</li>
        <li>Kâr ve zarar <strong>her zaman alış fiyatı üzerinden</strong> hesaplanır!</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ Etiket Fiyatı Soruları</strong><br/>
        Alış=100 TL, %30 kâr → Etiket=130 TL<br/>
        Etikete %20 indirim → SF=130×0,80=104 TL → %4 kâr
      </div>
    `
  },

  mat_isci: {
    title: 'İşçi Problemleri',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Temel Mantık</h2>
      <p>Bir işçi işi t günde bitiriyorsa → 1 günde işin <strong>1/t</strong>'sini yapar.</p>
      <p>A işi a günde, B işi b günde bitiriyorsa birlikte:</p>
      <p style="text-align:center;padding:1rem;background:rgba(139,92,246,0.1);border-radius:8px">
        <strong>T = ab / (a+b)</strong>
      </p>
      <div class="alert-box">
        <strong>🎯 Formül Yerine Anlayın</strong><br/>
        A 4 günde, B 6 günde: 1 günlük iş = 1/4 + 1/6 = 5/12<br/>
        Birlikte = 12/5 = <strong>2,4 gün</strong>
      </div>
      <h2>Havuz Problemleri</h2>
      <p>Giren boru: +1/a &nbsp; | &nbsp; Çıkan boru: −1/b &nbsp; | &nbsp; Net = 1/a − 1/b</p>
      <div class="alert-box">
        <strong>⚠️ Ortada Ayrılan İşçi</strong><br/>
        Birlikte 3 gün, A ayrılır, B 5 gün daha: 3/a + 3/b + 5/b = 1 → Denklem kur!
      </div>
    `
  },

  mat_hareket: {
    title: 'Hareket Problemleri',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Temel Formül</h2>
      <p style="font-size:1.4rem;text-align:center;padding:1rem;background:rgba(139,92,246,0.1);border-radius:8px">
        <strong>YOL = HIZ × ZAMAN</strong>
      </p>
      <h2>Hareket Türleri</h2>
      <ul>
        <li><strong>Aynı Yön:</strong> Uzaklık = |v₁−v₂| × t</li>
        <li><strong>Zıt Yön:</strong> Uzaklık = (v₁+v₂) × t</li>
        <li><strong>Takip:</strong> Yetişme = Başlangıç farkı / (v₁−v₂)</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Ortalama Hız Tuzağı</strong><br/>
        Gidiş 60, Dönüş 40 km/s → Ortalama hız ≠ 50!<br/>
        Doğru: 2×60×40/(60+40) = <strong>48 km/s</strong> (Harmonik Ortalama)
      </div>
      <div class="alert-box">
        <strong>⚠️ Saat-Dakika Dönüşümü</strong><br/>
        72 km/s × 45 dk = 72 × (45/60) = <strong>54 km</strong>
      </div>
    `
  },

  mat_kumeler: {
    title: 'Kümeler',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Temel Kavramlar</h2>
      <ul>
        <li>Boş küme (∅): Eleman sayısı 0, her kümenin alt kümesi</li>
        <li>n elemanlı kümenin alt küme sayısı: <strong>2ⁿ</strong></li>
        <li>Öz alt küme sayısı: <strong>2ⁿ − 1</strong></li>
      </ul>
      <h2>İşlemler</h2>
      <ul>
        <li>Birleşim (A∪B): A veya B'de olan elemanlar</li>
        <li>Kesişim (A∩B): Her ikisinde de olan elemanlar</li>
        <li>Fark (A\\B): A'da olup B'de olmayan</li>
      </ul>
      <h2>Formüller</h2>
      <p><strong>n(A∪B) = n(A) + n(B) − n(A∩B)</strong></p>
      <p><strong>n(A∪B∪C) = n(A)+n(B)+n(C)−n(A∩B)−n(A∩C)−n(B∩C)+n(A∩B∩C)</strong></p>
      <div class="alert-box">
        <strong>🎯 Venn Çözüm Sırası</strong><br/>
        İçten dışa: 1) A∩B∩C → 2) İkili kesişimler → 3) Yalnızca A, B, C
      </div>
      <div class="alert-box">
        <strong>⚠️ Boş Küme Tuzağı</strong><br/>
        ∅ ≠ {∅} &nbsp; | &nbsp; n(∅)=0, n({∅})=1
      </div>
    `
  },

  mat_modul: {
    title: 'İşlem ve Modüler Aritmetik',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Özel Tanımlı İşlemler</h2>
      <p>Sınav, a∗b = 2a+b−3 gibi yeni işlemler tanımlar. Değerleri yerine koyun.</p>
      <div class="alert-box">
        <strong>🎯 Özel İşlem Kontrol Listesi</strong>
        <ul>
          <li>Değişme özelliği var mı? (a∗b = b∗a?)</li>
          <li>Etkisiz eleman var mı? (a∗e = a?)</li>
          <li>Birleşme özelliği var mı?</li>
        </ul>
      </div>
      <h2>Modüler Aritmetik</h2>
      <p>a mod m = a'yı m'ye böldüğünde kalan</p>
      <p>17 mod 5 = 2 &nbsp; | &nbsp; −7 mod 3 = 2</p>
      <ul>
        <li>(a+b) mod m = [(a mod m)+(b mod m)] mod m</li>
        <li>(a×b) mod m = [(a mod m)×(b mod m)] mod m</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Gün Hesabı</strong><br/>
        Bugün Salı, 100 gün sonra? 100÷7 = kalan 2 → Salı+2 = <strong>Perşembe</strong>
      </div>
    `
  },

  mat_permutasyon: {
    title: 'Permütasyon',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Permütasyon</h2>
      <p>n nesneden r tanesini <strong>sıralı</strong> seçme sayısı:</p>
      <p style="text-align:center;padding:1rem;background:rgba(139,92,246,0.1);border-radius:8px">
        <strong>P(n,r) = n! / (n−r)!</strong>
      </p>
      <ul>
        <li>P(n,n) = n! &nbsp; | &nbsp; P(n,1) = n &nbsp; | &nbsp; P(n,0) = 1</li>
      </ul>
      <h2>Kısıtlı Permütasyon</h2>
      <ul>
        <li><strong>Yanyana olacak:</strong> Blok say → (n−1)! × (blok içi sıralama)</li>
        <li><strong>Yanyana olmayacak:</strong> Diğerlerini diz, aralarına yerleştir</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Dairesel Permütasyon</strong><br/>
        n kişi yuvarlak masaya: <strong>(n−1)!</strong><br/>
        5 kişi: (5−1)! = 4! = <strong>24</strong> yol
      </div>
      <div class="alert-box">
        <strong>⚠️ Kolye/Bilezik</strong><br/>
        Çevrilebilen düzenlemeler: (n−1)! / 2
      </div>
    `
  },

  mat_kombinasyon: {
    title: 'Kombinasyon ve Olasılık',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Kombinasyon</h2>
      <p>n nesneden r tanesini <strong>sırasız</strong> seçme sayısı:</p>
      <p style="text-align:center;padding:1rem;background:rgba(139,92,246,0.1);border-radius:8px">
        <strong>C(n,r) = n! / (r! × (n−r)!)</strong>
      </p>
      <ul>
        <li>C(n,r) = C(n,n−r) → Simetri özelliği!</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 P vs C Anahtar Kelimeler</strong><br/>
        <strong>Permütasyon:</strong> diz, sırala, otur, yerleştir → Sıra önemli<br/>
        <strong>Kombinasyon:</strong> seç, takım, komite, grup → Sıra önemsiz
      </div>
      <h2>Olasılık</h2>
      <p>P(A) = n(A) / n(S) &nbsp; | &nbsp; 0 ≤ P(A) ≤ 1</p>
      <p>P(A) + P(Aᶜ) = 1 → P(olmama) = 1 − P(olma)</p>
      <ul>
        <li>Bağımsız: P(A∩B) = P(A) × P(B)</li>
        <li>Bağımlı: P(A∩B) = P(A) × P(B|A)</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ Yerine Koymalı mı?</strong><br/>
        Yerine koyarak → Bağımsız (olasılık aynı)<br/>
        Yerine koymadan → Bağımlı (olasılık değişir)
      </div>
    `
  },

  mat_tablo: {
    title: 'Tablo ve Grafik Yorumlama',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Tablo Okuma Stratejisi</h2>
      <ol>
        <li>Önce soruyu oku, tabloya sonra bak</li>
        <li>Başlık ve birim satırını anla</li>
        <li>Yalnızca gerekli sütun/satırı oku</li>
        <li>Yüzdede paydanın ne olduğuna dikkat et</li>
      </ol>
      <h2>Grafik Türleri</h2>
      <ul>
        <li><strong>Çizgi:</strong> Zaman içindeki değişim. En dik bölge = en hızlı değişim.</li>
        <li><strong>Sütun/Bar:</strong> Kategorileri karşılaştırma.</li>
        <li><strong>Pasta:</strong> Yüzdesel paylar. Toplam = 360° = %100</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Pasta Grafik Hesabı</strong><br/>
        Dilim 72° → Oran = 72/360 × 100 = <strong>%20</strong>
      </div>
    `
  },

  mat_sayisal_mantik: {
    title: 'Sayısal Mantık',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Sayı Dizileri</h2>
      <ul>
        <li><strong>Aritmetik:</strong> Sabit fark. (2,5,8,11… → +3)</li>
        <li><strong>Geometrik:</strong> Sabit oran. (3,6,12,24… → ×2)</li>
        <li><strong>Karma:</strong> Farkların farkı sabit, Fibonacci, çift/tek ayrı kural…</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Dizi Çözüm Sırası</strong>
        <ol>
          <li>Ardışık farkları hesapla</li>
          <li>Farklar sabitise → Aritmetik</li>
          <li>Değilse farkların farklarına bak (2. dereceden)</li>
          <li>Oranları kontrol et (geometrik olabilir)</li>
          <li>Çift/tek terimler ayrı kurala mı uyuyor?</li>
        </ol>
      </div>
      <h2>Mantık Problemleri</h2>
      <ul>
        <li>Doğru-Yanlış soruları → Olasılıkları tabloya dök</li>
        <li>Sıralama → Koşulları sırayla uygula, elimine et</li>
        <li>Kim ne yaptı → Tablo kur, her ihtimali test et</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Mantık Tablosu Tekniği</strong><br/>
        1. Kesin bilgileri işle → 2. Bir kişinin işi bulununca diğerleri o işi yapamaz →<br/>
        3. En az seçeneği kalan kişiden başla → Tüm KPSS mantık sorularında işe yarar!
      </div>
    `
  },


  // TARİH
  tar_1: {
    title: 'İslamiyet Öncesi Türk Tarihi',
    subjectId: 'tarih',
    subjectTitle: 'Tarih',
    content: `
      <h2>Orta Asya Kültür Merkezleri</h2>
      <ul>
        <li><strong>Anav Kültürü:</strong> Orta Asya'nın en eski kültürüdür.</li>
        <li><strong>Afanesyova Kültürü:</strong> Türklere ait en eski kültür merkezidir.</li>
        <li><strong>Karasuk Kültürü:</strong> Demirin ilk işlendiği kültürdür.</li>
        <li><strong>Tagar Kültürü:</strong> En gelişmiş ve günümüze en yakın kültürdür.</li>
      </ul>

      <h2>İlk Türk Devletleri ve Özellikleri</h2>
      <p><strong>Asya (Büyük) Hun Devleti:</strong> Tarihte bilinen ilk teşkilatlı Türk devletidir. Kurucusu Teoman, en parlak dönemi Mete Han'dır.</p>
      <p><strong>Göktürkler (I. ve II.):</strong> Tarihte "Türk" adını devlet adı olarak kullanan ilk devlettir. II. Göktürk (Kutluk) devleti zamanında Türk tarihinin ilk yazılı kaynakları olan <em>Orhun Abideleri</em> dikilmiştir.</p>
      <p><strong>Uygurlar:</strong> Yerleşik hayata geçen ilk Türk devletidir. Din değiştirerek (Maniheizm) savaşçı özelliklerini kaybetmiş, matbaa ve sanatta ileri gitmişlerdir.</p>

      <div class="alert-box">
        <strong>🎯 ÖSYM'nin En Çok Sorduğu Püf Noktalar</strong>
        <p><strong>1. Kut Anlayışı:</strong> Yönetme yetkisinin Tanrı (Tengri) tarafından verildiğine inanılmasıdır. Kan yoluyla babadan oğula geçer. Bu durum "Veraset Sistemi"nin belirsiz olmasına, taht kavgalarına ve devletlerin kısa sürede yıkılmasına sebep olmuştur.</p>
        <p><strong>2. Kurultay (Toy):</strong> Devlet işlerinin görüşüldüğü meclistir. Hakanın son sözü söylemesi, Kurultay'ın bir <em>karar organı değil, danışma organı</em> niteliğinde olduğunu gösterir. (Demokrasi ile karıştırmayın).</p>
        <p><strong>3. Ahiret İnancı Kanıtları:</strong> Kurgan (mezar) içine eşyalarla gömülme, Balbal (mezar taşı) dikilmesi, Uçmağ (Cennet) ve Tamu (Cehennem) kavramları.</p>
      </div>
    `
  },
  tar_2: {
    title: 'Osmanlı Devleti - Kültür ve Medeniyet',
    subjectId: 'tarih',
    subjectTitle: 'Tarih',
    content: `
      <h2>Divan-ı Hümayun ve Yönetim Sınıfları</h2>
      <p>Orhan Bey zamanında kurulan Divan'da üç ana sınıf görev yapar:</p>
      
      <h3>1. Seyfiye Sınıfı (Yönetim ve Askeri)</h3>
      <p>Veziriazam (Sadrazam), Vezirler, Yeniçeri Ağası, Kaptan-ı Derya.</p>
      
      <h3>2. İlmiye Sınıfı (Eğitim, Din ve Hukuk)</h3>
      <p>Şeyhülislam, Kazasker, Kadı, Müderris.</p>
      
      <h3>3. Kalemiye Sınıfı (Yazışma ve Maliye)</h3>
      <p>Nişancı (Padişahın tuğrasını çeker), Defterdar (Maliye), Reisülküttap (Dış İşleri).</p>

      <div class="alert-box">
        <strong>⚠️ KPSS Püf Noktası: Kazasker Tuzakları</strong>
        Osmanlı'da "Kazasker" askeri bir görevli <strong>değildir!</strong> Seyfiye değil, İlmiye sınıfındandır. Günümüzün Adalet ve Milli Eğitim Bakanı konumundadır (Kadı ve müderrisleri atar). Adında "asker" geçmesi ÖSYM'nin en sevdiği çeldiricidir.
      </div>
      
      <h2>Toprak Sistemi (Miri Topraklar)</h2>
      <p>Mülkiyeti devlete ait olan topraklardır. En önemlisi "Dirlik" (Has, Zeamet, Tımar) topraklardır.</p>
      <div class="alert-box">
        <strong>🎯 Tımar Sisteminin Faydaları (Klasik KPSS Sorusu)</strong>
        1. Devlet hazinesinden <em>para çıkmadan</em> sürekli savaşa hazır, atlı asker (Cebelü/Tımarlı Sipahi) yetiştirilmiştir.<br/>
        2. Üretimde süreklilik sağlanmıştır.<br/>
        3. Taşrada güvenlik ve devlet otoritesi sağlanmıştır.<br/>
        <em>Not: Tımar sistemi yeniçeri (kapıkulu) askerlerini karşılamaz. Tımarlı sipahiler taşra askeridir.</em>
      </div>
    `
  },

  // COĞRAFYA
  cog_1: {
    title: 'Türkiye\'nin Coğrafi Konumu',
    subjectId: 'cografya',
    subjectTitle: 'Coğrafya',
    content: `
      <h2>1. Matematik (Mutlak) Konum ve Sonuçları</h2>
      <p>Türkiye, 36° - 42° Kuzey enlemleri ile 26° - 45° Doğu boylamları arasındadır.</p>
      <p><strong>Enlemin Sonuçları:</strong></p>
      <ul>
        <li>Yengeç Dönencesi'nin kuzeyindedir. Bu nedenle: Güneş ışınları Türkiye'ye <strong>hiçbir zaman dik (90°) açıyla gelmez</strong>, gölge boyu sıfır olmaz ve dağların güney yamacı her zaman daha sıcaktır (Bakı etkisi).</li>
        <li>Kuzeye gidildikçe sıcaklık genellikle düşer (Enlem etkisi).</li>
        <li>Kuzeye gidildikçe gece-gündüz süre farkı artar. (Sinop'ta fark Hatay'dan fazladır).</li>
      </ul>
      <p><strong>Boylamın Sonuçları:</strong></p>
      <ul>
        <li>Doğusu ile batısı arasında 76 dakika (1 saat 16 dk) yerel saat farkı vardır.</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası (Özel Konum / Matematik Konum Ayrımı)</strong>
        "Türkiye'de doğuya doğru gidildikçe sıcaklığın düşmesi", enlem veya matematik konumla açıklanamaz; çünkü enlemler aynı kalır. Bu durum tamamen <strong>yükseltinin artması</strong> ile ilgilidir, yani <strong>Özel (Göreceli) Konumun</strong> sonucudur. Fakat "Güneyden kuzeye gidildikçe sıcaklığın düşmesi" enlemin (Matematik konum) sonucudur.
      </div>
    `
  },

  // VATANDAŞLIK
  vat_1: {
    title: 'Hukukun Temel Kavramları',
    subjectId: 'vatandaslik',
    subjectTitle: 'Vatandaşlık',
    content: `
      <h2>Sosyal Hayatı Düzenleyen Kurallar</h2>
      <p>Din, ahlak, görgü ve hukuk kuralları sosyal hayatı düzenler. Hukuk kurallarını diğerlerinden ayıran <strong>en temel fark yaptırımının (müeyyide) maddi (devlet güvencesi) olmasıdır.</strong> Diğer kuralların yaptırımı manevidir (kınama, günah).</p>

      <h2>Hukukun Yaptırım (Müeyyide) Türleri</h2>
      <ul>
        <li><strong>Ceza:</strong> Kanunun suç saydığı eylemi işleyenlere uygulanır.</li>
        <li><strong>Cebri İcra:</strong> Hukuki yükümlülüğünü (borcunu) yerine getirmeyene devlet zoruyla yaptırılmasıdır.</li>
        <li><strong>Tazminat:</strong> Hukuka aykırı bir eylemle başkasına verilen zararın ödetilmesidir (Maddi/Manevi).</li>
        <li><strong>İptal:</strong> Hukuka aykırı yapılan bir <em>idari işlemin</em> yargı kararıyla ortadan kaldırılmasıdır.</li>
        <li><strong>Hükümsüzlük (Geçersizlik):</strong> Hukuki işlemlerin kanunun öngördüğü şekil şartlarına uymaması. (Yokluk, Mutlak Butlan, Nispi Butlan).</li>
      </ul>

      <div class="alert-box">
        <strong>⚠️ KPSS Püf Noktası (Geçmiş Yıl Sorusu)</strong>
        "Ölüm" veya "İdam" bir yaptırım türü müdür? <strong>Hayır!</strong> İdam cezası 2004 yılında Anayasamızdan <strong>tamamen</strong> çıkarılmıştır. Türkiye'de şu an uygulanan en ağır ceza "Ağırlaştırılmış Müebbet Hapis" cezasıdır.
      </div>
      
      <h2>Hukukta Boşluk Türleri</h2>
      <div class="alert-box">
        <strong>🎯 Püf Noktası: Kanun Boşluğu vs. Hukuk Boşluğu</strong>
        <ul>
          <li><strong>Kanun Boşluğu:</strong> Hakimin önüne gelen bir olayda sadece <em>Yazılı Kaynaklarda</em> hüküm bulunamaması durumudur. (Bu durumda hakim örf ve adete bakar).</li>
          <li><strong>Hukuk Boşluğu:</strong> Hem yazılı hem de yazısız (örf ve adet) hiçbir kaynağın bulunmaması durumudur. Bu durumda <strong>Hakim hukuk yaratır.</strong> (Hakimin yarattığı bu hukuk sadece o davayı bağlar, kanun yerine geçmez).</li>
        </ul>
      </div>
    `
  }
};
// cache-bust: 174009

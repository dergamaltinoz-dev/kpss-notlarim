// mockData.js - Ana Veri Dosyası
import { turkceTopicContents } from './turkceData1';
import { turkceTopicContents2 } from './turkceData2';
import { turkceTopicContents3 } from './turkceData3';

export const subjects = [
  { id: 'turkce', title: 'Türkçe', category: 'Genel Yetenek', icon: 'BookOpen', description: 'Sözcükte Anlam, Cümlede Anlam, Paragraf, Ses Bilgisi, Yapı Bilgisi, Sözcük Türleri, Cümle Bilgisi, Dil Bilgisi, Noktalama İşaretleri, Yazım Kuralları, Anlatım Bozukluğu ve Sözel Mantık.' },
  { id: 'matematik', title: 'Matematik', category: 'Genel Yetenek', icon: 'Calculator', description: 'Temel Kavramlar, Sayılar, Problemler, Geometri.' },
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
    { id: 'mat_1', title: 'Temel Kavramlar' }
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

  // MATEMATİK
  mat_1: {
    title: 'Temel Kavramlar',
    subjectId: 'matematik',
    subjectTitle: 'Matematik',
    content: `
      <h2>Sayı Kümeleri</h2>
      <ul>
        <li><strong>Rakam:</strong> Sayıları ifade etmeye yarayan sembollerdir. {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}. Toplam 10 tanedir.</li>
        <li><strong>Doğal Sayılar (N):</strong> {0, 1, 2, 3, ...} kümesidir. "0" bir doğal sayıdır. Sayma sayıları (N+) ise 1'den başlar.</li>
        <li><strong>Tam Sayılar (Z):</strong> {..., -3, -2, -1, 0, 1, 2, 3, ...} kümesidir. "0"ın işareti yoktur (nötrdür).</li>
      </ul>

      <h2>Tek ve Çift Sayılar</h2>
      <p>2 ile tam bölünebilen tam sayılara çift, bölünemeyenlere tek sayı denir.</p>
      <ul>
        <li>Tek ± Tek = Çift</li>
        <li>Tek x Tek = Tek (Çarpanların hepsi tekse sonuç tektir.)</li>
        <li>İçinde en az bir Çift sayı olan çarpımın sonucu her zaman Çifttir.</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası: Üslü Tek/Çift Soruları</strong>
        n pozitif bir tam sayı (n > 0) olmak üzere: (Tek)<sup>n</sup> = Tek, (Çift)<sup>n</sup> = Çifttir. Ancak "Daima doğrudur" sorularında <strong>n'nin tam sayı olduğu belirtiliyorsa</strong> n=0 (Herhangi bir sayının 0. kuvveti 1'dir, tektir) veya n < 0 (kesirli çıkar, tekliği/çiftliği aranmaz) durumlarına çok dikkat edin! ÖSYM bu tuzağı çok sever.
      </div>
      
      <h2>Asal Sayılar ve Aralarında Asallık</h2>
      <div class="alert-box">
        <strong>⚠️ Önemli Kurallar</strong>
        <ul>
          <li><strong>En küçük asal sayı 2'dir.</strong> 1 asal sayı değildir.</li>
          <li><strong>2'den başka çift asal sayı yoktur.</strong></li>
          <li>Aralarında asallıkta sayıların kendilerinin asal olması gerekmez. Sadece ortak bölenleri 1 olmalıdır (Örn: 8 ve 15). 1 sayısı tüm pozitif tam sayılarla aralarında asaldır.</li>
        </ul>
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

// Türkçe konu içerikleri - Bölüm 3

export const turkceTopicContents3 = {

  // 9. DİL BİLGİSİ (Fiillerde Çatı ve Ek Fiil)
  tur_dil_bilgisi: {
    title: 'Dil Bilgisi (Fiillerde Çatı ve Ek Fiil)',
    subjectId: 'turkce',
    subjectTitle: 'Türkçe',
    content: `
      <h2>A. Fiillerde Çatı</h2>
      <p>Fiillerin özne ve nesne ilişkisine göre aldığı biçimdir. İki ana grupta incelenir:</p>

      <h3>I. Nesne-Yüklem İlişkisine Göre Çatı</h3>

      <h4>1. Etken Çatı</h4>
      <p>Yüklemin bildirdiği işi yapan <strong>gerçek özne</strong> bellidir ve cümlede bulunabilir.</p>
      <ul>
        <li>"<strong>Ali</strong> kapıyı açtı." → Açan belli: Ali</li>
        <li>"<strong>Kuşlar</strong> uçuyor." → Uçan belli: Kuşlar</li>
      </ul>

      <h4>2. Edilgen Çatı</h4>
      <p>Gerçek özne belli değildir veya bilinmek istenmez. Fiil -ıl/-il veya -ın/-in eki alır. Cümlede sözde özne bulunur.</p>
      <ul>
        <li>"<strong>Kapı</strong> açıldı." → Kim açtı? Belli değil. Kapı = sözde özne</li>
        <li>"<strong>Yollar</strong> yapılıyor." → Kim yapıyor? Belli değil.</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Edilgen Çatı Bulma İpucu</strong>
        Cümlenin öznesine "Kim tarafından?" sorusunu sorun. Cevap yoksa veya belirsizse → Edilgendir. Ayrıca edilgen fiillerin nesne <strong>alamayacağını</strong> unutmayın!
      </div>

      <h4>3. Dönüşlü Çatı</h4>
      <p>Özne eylemi kendisi yapar ve sonuçtan <strong>kendisi etkilenir</strong>. Fiil -ıl/-il veya -ın/-in eki alır (Edilgenle aynı ek!).</p>
      <ul>
        <li>"Çocuk <strong>giyindi</strong>." → Kendini giydirdi</li>
        <li>"Kediler <strong>yıkandı</strong>." → Kendilerini yıkadı</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ Edilgen mi Dönüşlü mü? (En Kritik Ayrım)</strong>
        <strong>Edilgen:</strong> İşi yapan belli değildir → "Araba <em>yıkandı</em>." (Kim yıkadı? Belirsiz)<br/>
        <strong>Dönüşlü:</strong> İşi yapan bellidir ve kendisi etkilenir → "Çocuk <em>yıkandı</em>." (Çocuk kendini yıkadı)<br/>
        <strong>Test:</strong> "Kendi kendine" ifadesini ekleyebiliyorsanız → Dönüşlü!
      </div>

      <h3>II. Özne-Yüklem İlişkisine Göre Çatı</h3>

      <h4>4. İşteş (Ortaklaşa) Çatı</h4>
      <p>Eylemin birden fazla kişi tarafından <strong>birlikte veya karşılıklı</strong> yapıldığını gösterir. -ış/-iş eki alır.</p>
      <ul>
        <li>"Öğrenciler <strong>bakıştı</strong>." → Karşılıklı</li>
        <li>"Herkes <strong>gülüştü</strong>." → Birlikte</li>
      </ul>

      <h4>5. Ettirgen (Oldurgan) Çatı</h4>
      <p>Özne eylemi başkasına yaptırır. -dır/-dir, -t, -r ekleri alır.</p>
      <ul>
        <li>"Annem elbiseyi <strong>diktirdi</strong>." → Kendisi dikmedi, başkasına diktirdi</li>
        <li>"Öğretmen soruyu <strong>çözdürdü</strong>." → Öğrencilere çözdürdü</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Ettirgen ≠ Oldurgan</strong>
        <strong>Ettirgen:</strong> Geçişli fiili yaptırma → Yaz-<strong>dır</strong>- (Yazmak zaten geçişli)<br/>
        <strong>Oldurgan:</strong> Geçişsiz fiili geçişli yapma → Ağla-<strong>t</strong>- (Ağlamak geçişsiz iken "ağlattı" geçişli oldu)
      </div>

      <h2>B. Fiil Kipleri</h2>
      <h3>Haber (Bildirme) Kipleri</h3>
      <p>Eylemin yapılma zamanını kesinlik bildirerek anlatır.</p>
      <ul>
        <li><strong>Görülen (di'li) Geçmiş Zaman:</strong> -dı/-di → "Gel<strong>di</strong>." (Kesinlik var, bizzat şahit olunmuş)</li>
        <li><strong>Duyulan (miş'li) Geçmiş Zaman:</strong> -mış/-miş → "Gel<strong>miş</strong>." (Başkasından duyulmuş, kesinlik yok)</li>
        <li><strong>Şimdiki Zaman:</strong> -yor → "Gel<strong>iyor</strong>." (Şu an devam ediyor)</li>
        <li><strong>Gelecek Zaman:</strong> -(y)acak/-(y)ecek → "Gel<strong>ecek</strong>." (Henüz olmamış)</li>
        <li><strong>Geniş Zaman:</strong> -r/-ar/-er → "Gel<strong>ir</strong>." (Her zaman, alışkanlık)</li>
      </ul>

      <h3>Dilek (Tasarlama) Kipleri</h3>
      <p>Eylemin yapılma zamanını değil, konuşanın dileğini, isteğini bildirir.</p>
      <ul>
        <li><strong>Gereklilik Kipi:</strong> -malı/-meli → "Git<strong>meli</strong>yim."</li>
        <li><strong>Dilek-Koşul Kipi:</strong> -sa/-se → "Gel<strong>se</strong> ne güzel olur."</li>
        <li><strong>İstek Kipi:</strong> -(y)a/-(y)e → "Gel<strong>e</strong>yim, gid<strong>e</strong>lim."</li>
        <li><strong>Emir Kipi:</strong> Eki yoktur → "Gel!, Gidin!, Baksana!"</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 KPSS Hatırlatma: Birleşik Zamanlı Fiiller</strong>
        Bir fiile iki kip eki getirilmesiyle oluşur:<br/>
        gel-<strong>iyor</strong>-<strong>du</strong> → Şimdiki zamanın hikâyesi<br/>
        gel-<strong>ecek</strong>-<strong>miş</strong> → Gelecek zamanın rivayeti<br/>
        gel-<strong>ir</strong>-<strong>se</strong> → Geniş zamanın koşulu
      </div>

      <h2>C. Ek Fiil (Ek Eylem)</h2>
      <p>İsim soylu sözcüklerin yüklem olarak kullanılmasını sağlayan veya basit zamanlı fiilleri birleşik zamanlı yapan "i-" (imek) fiilidir.</p>
      <h3>İsim Cümlelerinde Ek Fiil</h3>
      <ul>
        <li><strong>Geniş zaman (şimdiki zaman):</strong> -dır/-dir → "Hava güzel<strong>dir</strong>." (Genellikle yazılmaz: "Hava güzel.")</li>
        <li><strong>di'li geçmiş:</strong> -dı/-di (idi) → "Hava güzel<strong>di</strong>."</li>
        <li><strong>miş'li geçmiş:</strong> -mış/-miş (imiş) → "Hava güzel<strong>miş</strong>."</li>
        <li><strong>Koşul:</strong> -sa/-se (ise) → "Hava güzel<strong>se</strong> gideriz."</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ KPSS Tuzağı: Ek Fiil Eklenen Yüklemler</strong>
        "Öğretmen<strong>di</strong>." → İsim + ek fiil = İsim cümlesi<br/>
        "Güzel<strong>miş</strong>." → Sıfat + ek fiil = İsim cümlesi<br/>
        "Gel<strong>iyor</strong><strong>du</strong>." → Fiil + birleşik zaman ek fiili = Fiil cümlesi<br/>
        İsim soylu sözcüklere ek fiil gelince cümle isim cümlesi olur, fiil cümlesi olmaz!
      </div>
    `
  },

  // 10. NOKTALAMA İŞARETLERİ
  tur_noktalama: {
    title: 'Noktalama İşaretleri',
    subjectId: 'turkce',
    subjectTitle: 'Türkçe',
    content: `
      <h2>1. Nokta (.)</h2>
      <ul>
        <li>Cümle sonunda kullanılır.</li>
        <li>Kısaltmaların sonunda kullanılır: <em>Prof., Dr., vb., vs.</em></li>
        <li>Sayılarla yazılan tarihlerde gün, ay ve yıl arasında: <em>20.07.2026</em></li>
        <li>Saat ve dakika arasında: <em>15.30</em></li>
        <li>Madde numaralarından sonra: <em>1., A.</em></li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ Nokta Konmayan Yerler!</strong>
        <ul>
          <li>Başlıkların sonuna nokta konmaz.</li>
          <li>Büyük harfle yapılan kısaltmalara nokta konmaz: TBMM, UNESCO, NATO</li>
          <li>Kitap, gazete, dergi adlarından sonra nokta konmaz.</li>
        </ul>
      </div>

      <h2>2. Virgül (,)</h2>
      <ul>
        <li>Sıralanan eş görevli sözcük ve öbekleri ayırır: "Elma, armut, portakal aldım."</li>
        <li>Cümle içinde açıklama yapıldığında: "Başkent, <em>Ankara</em>, çok güzeldir."</li>
        <li>Uzun cümlelerde yüklemden uzak düşmüş özneden sonra: "Bu yaz köye giden çocuklar, çok eğlendi."</li>
        <li>Seslenme sözcüklerinden sonra: "Arkadaşlar, toplantı başlıyor."</li>
        <li>Tekrarlanan sözcükler arasında: "Akşam, akşam hep seni düşünüyorum."</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası</strong>
        İkilemeler arasına virgül konmaz: "Yavaş yavaş yürüdü." ✓ / "Yavaş, yavaş yürüdü." ✗<br/>
        Metin içinde "ve, veya, ya da, ile" bağlaçlarından önce genellikle virgül konmaz.
      </div>

      <h2>3. Noktalı Virgül (;)</h2>
      <ul>
        <li>Cümle içinde virgüllerle ayrılmış tür veya grupları birbirinden ayırmak için: "Oya, Ali; Zeynep, Mert aynı takımda."</li>
        <li>Ögeleri arasında virgül bulunan sıralı cümleleri ayırmak için.</li>
        <li>Bağlaç kullanılmadan sıralanmış cümleleri ayırmak için: "Güneş battı; hava karardı."</li>
      </ul>

      <h2>4. İki Nokta (:)</h2>
      <ul>
        <li>Açıklama yapılacağını gösterir: "Üç renk seviyorum: Mavi, yeşil ve beyaz."</li>
        <li>Doğrudan alıntılardan (tırnağa alınan sözlerden) önce: <em>Atatürk şöyle demiştir: "Yurtta barış, dünyada barış."</em></li>
        <li>Karşılıklı konuşmalarda konuşanın adından sonra.</li>
      </ul>

      <h2>5. Üç Nokta (...)</h2>
      <ul>
        <li>Söylenmek istenmeyen veya uygun görülmeyen sözcüklerin yerine.</li>
        <li>Sözün bir yerde kesildiğini veya sürdürülebileceğini gösterir: "Elma, armut, portakal..."</li>
        <li>Alıntılarda çıkarılan bölümün yerine: "[...] bu nedenle karar verilmiştir."</li>
      </ul>

      <h2>6. Soru İşareti (?)</h2>
      <ul>
        <li>Soru cümlelerinin sonuna konur: "Ne zaman geleceksin?"</li>
        <li>Soru anlamı taşıyan her cümlenin sonuna konur.</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ Soru İşareti Konmayan Yerler (Çok Sorulan!)</strong>
        İçinde soru anlamı taşıyan ancak soru cümlesi olmayan (dolaylı soru / gizli soru) cümlelere soru işareti <strong>konmaz</strong>:<br/>
        "Ne zaman geleceğini bilmiyorum<strong>.</strong>" → Soru işareti yok, çünkü asıl yargı "bilmiyorum"dur.
      </div>

      <h2>7. Ünlem İşareti (!)</h2>
      <ul>
        <li>Sevinç, şaşkınlık, korku, acı gibi güçlü duyguları ifade eden cümlelerin sonuna: "Ne güzel bir gün!"</li>
        <li>Seslenme sözcüklerinden sonra: "Ey Türk gençliği!"</li>
      </ul>

      <h2>8. Tırnak İşareti (" ")</h2>
      <ul>
        <li>Doğrudan alıntılarda (aktarılan sözlerde).</li>
        <li>Kitap, dergi, gazete adlarını göstermede (Eğilip yazılmadığı durumlarda).</li>
        <li>Özel anlam taşıyan sözcükleri vurgulamada.</li>
      </ul>

      <h2>9. Kesme İşareti (')</h2>
      <ul>
        <li>Özel isimlere getirilen çekim eklerini ayırmak için: "Ankara'dan, Ali'nin"</li>
        <li>Kısaltmalara getirilen ekleri ayırmak için: "TBMM'nin, AB'ye"</li>
        <li>Sayılara getirilen ekleri ayırmak için: "1920'de, 8'inci"</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ Kesme İşareti Konmayan Yerler (ÖSYM Favorisi!)</strong>
        <ul>
          <li>Özel isimlere getirilen <strong>yapım ekleri</strong>nde: "Ankaralı" ✓ / "Ankara'lı" ✗</li>
          <li>Kurum ve kuruluş adlarına getirilen eklerde: "Türkiye Büyük Millet Meclisine" (Kısaltma değilse kesme yok)</li>
          <li>Unvanlara getirilen eklerde: "Doktor Ayşe'nin" değil "Doktor Ayşenin" ✓ (Unvan varsa, sondaki isme kesme konabilir ama unvana konmaz)</li>
        </ul>
      </div>

      <h2>10. Kısa Çizgi (-)</h2>
      <ul>
        <li>Satır sonunda sözcüğün bölünmesinde.</li>
        <li>Ara, arası anlamında: "Ankara-İstanbul arası", "2020-2025 yılları"</li>
        <li>Ek ve kökleri birbirinden ayırmak için dilbilgisi açıklamalarında: "gel-miş-ti"</li>
      </ul>

      <h2>11. Uzun Çizgi (—)</h2>
      <ul>
        <li>Konuşma cümlelerini göstermede (tırnak işareti yerine kullanılır).</li>
        <li>Ara sözleri veya ara cümleleri göstermede.</li>
      </ul>
    `
  },

  // 11. YAZIM KURALLARI
  tur_yazim_kurallari: {
    title: 'Yazım Kuralları',
    subjectId: 'turkce',
    subjectTitle: 'Türkçe',
    content: `
      <h2>1. Büyük Harflerin Kullanıldığı Yerler</h2>
      <ul>
        <li>Her cümlenin ilk harfi büyük yazılır.</li>
        <li>Kişi ad ve soyadları: <em>Mustafa Kemal Atatürk</em></li>
        <li>Ülke, şehir, ilçe, köy adları: <em>Türkiye, Ankara, Beypazarı</em></li>
        <li>Ulus, boy, oymak adları: <em>Türk, Kırgız, Oğuz</em></li>
        <li>Kurum ve kuruluş adları: <em>Türkiye Büyük Millet Meclisi, Millî Eğitim Bakanlığı</em></li>
        <li>Kitap, dergi, gazete adları: <em>Safahat, Hürriyet</em></li>
        <li>Din, mezhep, tarikat adları: <em>İslamiyet, Hanefilik</em></li>
        <li>Gezegen adları: <em>Mars, Venüs</em> (Dünya, Güneş, Ay gezegen anlamında → Büyük; genel anlamda → küçük)</li>
        <li>Tarihî olay ve dönem adları: <em>Kurtuluş Savaşı, Millî Mücadele, Tanzimat Dönemi</em></li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ Büyük Harf Yazılmayan Durumlar (Sık Sorulan)</strong>
        <ul>
          <li>Ünvan ve meslek adları küçük: <em>doktor, profesör, general, paşa</em></li>
          <li>Mevsim, ay ve gün adları küçük: <em>pazartesi, ocak, ilkbahar</em></li>
          <li>Hayvan ve bitki türleri küçük: <em>kangal, van kedisi, lale</em></li>
          <li>Yön adları küçük (özel ad olmadığında): <em>güneyde, kuzeye</em></li>
        </ul>
      </div>

      <h2>2. "de/da" Bağlacının Yazımı</h2>
      <p>Bağlaç olan "de/da" <strong>her zaman ayrı yazılır</strong>. Büyük ünlü uyumuna uyar (de/da olur, te/ta olmaz).</p>
      <ul>
        <li>"Ben <strong>de</strong> geldim." ✓ (Bağlaç: "dahi, bile" anlamında)</li>
        <li>"Ev<strong>de</strong> kaldım." → Burada bitişik olan hâl ekidir.</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Ayırma Yöntemi</strong>
        "de/da" sözcüğü cümleden çıkarıldığında anlam bozulmazsa → <strong>Bağlaç</strong>, ayrı yazılır.<br/>
        Çıkarıldığında anlam bozulursa → <strong>Hâl eki</strong>, bitişik yazılır.<br/>
        Önemli: Özel isimlere bağlaç "de/da" gelse bile ayrı yazılır ve kesme işareti konmaz: "Ali de geldi." ✓ (Ali'de değil!)
      </div>

      <h2>3. "ki" Bağlacının Yazımı</h2>
      <ul>
        <li><strong>Bağlaç olan "ki":</strong> Ayrı yazılır → "Biliyorum <em>ki</em> haklısın."</li>
        <li><strong>Sıfat olan "-ki":</strong> Bitişik yazılır → "Dün<em>kü</em>, yarın<em>ki</em>, masa<em>daki</em>"</li>
        <li><strong>Zamir olan "-ki":</strong> Bitişik yazılır → "Benim<em>ki</em>, senin<em>ki</em>"</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ İstisnalar!</strong>
        "Halbuki, mademki, oysaki, sanki" sözcüklerinde "ki" bitişik yazılır. Bunlar kalıplaşmış sözcüklerdir.
      </div>

      <h2>4. Birleşik Sözcüklerin Yazımı</h2>
      <h3>Bitişik Yazılan Birleşik Sözcükler</h3>
      <ul>
        <li>Anlam kayması olanlar: Hanımeli, suçüstü, ateşböceği, aslanağzı</li>
        <li>Ses değişikliği olanlar: Kahvaltı (kahve altı), pazartesi (pazar ertesi)</li>
        <li>Birleşik fiiller: Varsaymak, öngörmek, elverişmek</li>
      </ul>
      <h3>Ayrı Yazılan Birleşik Sözcükler</h3>
      <ul>
        <li>Her iki sözcük de gerçek anlamını koruyanlar: Çay bardağı, masa örtüsü</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 KPSS Kısa Yolu</strong>
        İki sözcüğün her ikisi de gerçek anlamındaysa → Ayrı (masa örtüsü).<br/>
        En az biri anlamını kaybetmişse veya ses düşmesi varsa → Bitişik (ayçiçeği, kahvaltı).
      </div>

      <h2>5. Sayıların Yazımı</h2>
      <ul>
        <li>Kesin olmayan (yaklaşık) sayılar yazıyla: "Yüzlerce kişi geldi."</li>
        <li>Saatler, tarihler, para miktarları rakamla yazılabilir.</li>
        <li>Üleştirme sayıları: İkişer, üçer (bitişik yazılır, -er/-ar ile)</li>
      </ul>

      <h2>6. Kısaltmaların Yazımı</h2>
      <ul>
        <li>Büyük harfle yapılan kısaltmalara nokta konmaz: TBMM, NATO, AB, BM</li>
        <li>Küçük harfli kısaltmalara nokta konur: vb., Prof., Dr., Yrd. Doç.</li>
        <li>Kısaltmalara getirilen ekler kesme işaretiyle ayrılır: TBMM'nin, AB'ye</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Kısaltmalara Ek Getirme Kuralı</strong>
        Ek, kısaltmanın <strong>okunuşuna</strong> göre uyum sağlar:<br/>
        TBMM'<strong>nin</strong> (Okunuşu: Tebeem → İnce ünlü → -nin)<br/>
        AB'<strong>nin</strong> (Okunuşu: Abe → İnce ünlü → -nin)
      </div>
    `
  },

  // 12. ANLATIM BOZUKLUĞU
  tur_anlatim_bozuklugu: {
    title: 'Anlatım Bozukluğu',
    subjectId: 'turkce',
    subjectTitle: 'Türkçe',
    content: `
      <h2>A. Anlama (Anlamsal) Dayalı Anlatım Bozuklukları</h2>

      <h3>1. Gereksiz Sözcük Kullanımı (Anlamsal Tekrar)</h3>
      <p>Aynı anlamı karşılayan iki sözcüğün birlikte kullanılmasıdır.</p>
      <ul>
        <li>"Bence <strong>kanaatimce</strong> bu yanlış." → Bence ve kanaatimce aynı anlam. Biri yeterli.</li>
        <li>"İlk <strong>önce</strong> onu aradım." → "İlk" ve "önce" aynı anlam. "Önce onu aradım." yeterli.</li>
        <li>"Eski <strong>antika</strong> bir saat." → Antika zaten eski demek.</li>
        <li>"Yaklaşık <strong>aşağı yukarı</strong> yüz kişi geldi." → İkisi de tahmini belirtir.</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Çok Sorulan Gereksiz Sözcük Örnekleri</strong>
        "En <em>son</em> aşama", "Sebebi... <em>-dığı için</em>dir", "Birbirleriyle <em>karşılıklı</em>", "Her zaman <em>daima</em>", "Kesinlikle <em>mutlaka</em>", "Henüz <em>daha</em> gelmedi", "Sanki <em>-mış gibi</em>"
      </div>

      <h3>2. Sözcüğün Yanlış Anlamda Kullanılması</h3>
      <p>Sözcüğün taşıdığı anlama aykırı kullanılmasıdır.</p>
      <ul>
        <li>"Hava <strong>serin</strong> olduğu için terledim." → Serin değil, sıcak olmalı.</li>
        <li>"Bu davranışı herkes tarafından <strong>yadırgandı</strong>." ✗ → "kınandı" olmalı (yadırgamak = tuhaf karşılamak).</li>
      </ul>

      <h3>3. Anlamca Çelişen Sözcüklerin Kullanılması</h3>
      <ul>
        <li>"Kesinlikle <strong>gelebilir</strong>." → Kesinlik ile olasılık (-ebilir) çelişiyor. "Kesinlikle gelir." olmalı.</li>
        <li>"Her zaman <strong>bazen</strong> buraya gelirim." → Her zaman ile bazen çelişiyor.</li>
      </ul>

      <h3>4. Deyimlerin Yanlış Kullanılması</h3>
      <ul>
        <li>"Burnunun <strong>dibinde</strong> fırsatı kaçırdı." → "Burnunun <strong>ucunda</strong>" olmalı.</li>
        <li>"Göz yumarak geçiştirelim." → "Göz yumup" veya farklı bir yapı gerekir.</li>
      </ul>

      <h3>5. Mantık Hatası</h3>
      <ul>
        <li>"Sokaklardaki <strong>köpekler ve hayvanlar</strong> toplanacakmış." → Köpekler zaten hayvan. "Sokak hayvanları toplanacakmış." yeterli.</li>
        <li>"Öğretmenler ve <strong>beden eğitimi öğretmenleri</strong>..." → Beden eğitimi öğretmenleri zaten öğretmen.</li>
      </ul>

      <h2>B. Yapıya (Dilbilgisel) Dayalı Anlatım Bozuklukları</h2>

      <h3>1. Özne-Yüklem Uyumsuzluğu</h3>
      <p>Özne ile yüklem arasında tekillik-çoğulluk veya kişi uyumsuzluğu.</p>
      <ul>
        <li>"Öğrenciler sınava hazırlanıyor<strong>um</strong>." ✗ → "...hazırlanıyor." olmalı. (3. çoğul kişi)</li>
        <li>"Sen ve ben bu işi <strong>yapabilirsin</strong>." ✗ → "...yapabiliriz." olmalı. (Biz = 1. çoğul)</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 KPSS Kuralı: Farklı Kişili Özneler</strong>
        Sen + Ben = <strong>Biz</strong> → 1. çoğul kişi<br/>
        O + Ben = <strong>Biz</strong> → 1. çoğul kişi<br/>
        Sen + O = <strong>Siz</strong> → 2. çoğul kişi<br/>
        1. kişi varsa daima "biz" (1. çoğul) kullanılır.
      </div>

      <h3>2. Tamlama Yanlışlıkları</h3>
      <ul>
        <li>"Türk dil<strong>i</strong> ve edebiyat<strong>ı</strong> dersleri" ✗ → "Türk dili ve Türk edebiyatı" veya tamlama düzeltilmeli.</li>
        <li>"Bu sorunu<strong>n</strong> çözümünü ve yöntemi<strong>ni</strong>..." → Ortak tamlanan doğru paylaştırılmamış.</li>
      </ul>

      <h3>3. Ek Yanlışlıkları</h3>
      <ul>
        <li>"Bu konuya önem veriyor ve <strong>düşünüyoruz</strong>." ✗ → "Bu konuya önem veriyor ve bu konu<strong>yu</strong> düşünüyoruz." olmalı. ("Önem vermek" -a eki alır, "düşünmek" -ı eki alır.)</li>
        <li>"Oraya gidip <strong>geldik</strong>." → Oraya gittik ve <strong>oradan</strong> geldik. (Yön eki eksik)</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 En Sık Sorulan Yapısal Bozukluk: Ortak Kullanım Hatası</strong>
        İki yüklemin aynı tümleci paylaşması sorunludur eğer farklı ekler gerektiriyorlarsa:<br/>
        "Kitapları okuyor ve <strong>seviyorum</strong>." → Okumak: Kitapları (belirtili nesne ✓), Sevmek: Kitapları (belirtili nesne ✓) → Doğru.<br/>
        "Müziği dinliyor ve <strong>ilgileniyorum</strong>." → Dinlemek: Müziği (-i hâli ✓), İlgilenmek: Müzik<strong>le</strong> (-le eki gerekli ✗) → <strong>Yanlış!</strong>
      </div>

      <h3>4. Eksik Cümle (Anlatım Eksikliği)</h3>
      <ul>
        <li>"Bu kitap <strong>benden</strong> daha güzel." ✗ → "Bu kitap benim<strong>ki</strong>nden daha güzel." olmalı.</li>
        <li>"Sizin takımınız bizden daha güçlü." ✗ → "...bizim<strong>ki</strong>nden daha güçlü." olmalı.</li>
      </ul>

      <h3>5. Yanlış Sözcük Kullanımı (Yapısal)</h3>
      <ul>
        <li>"Çünkü hava güzeldi, pikniğe gittik." ✗ → "Hava güzel<strong>di</strong>, <strong>bu yüzden</strong> pikniğe gittik." veya "Hava güzel olduğu <strong>için</strong> pikniğe gittik."</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ "Çünkü" Tuzağı</strong>
        "Çünkü" bağlacı neden bildiren cümlenin başına gelir, sonuç cümlesinin başına <strong>gelmez!</strong><br/>
        ✓ "Pikniğe gittik, <strong>çünkü</strong> hava güzeldi." (Önce sonuç, sonra neden)<br/>
        ✗ "<strong>Çünkü</strong> hava güzeldi, pikniğe gittik." (Yanlış sıralama)
      </div>
    `
  },

  // 13. SÖZEL MANTIK
  tur_sozel_mantik: {
    title: 'Sözel Mantık',
    subjectId: 'turkce',
    subjectTitle: 'Türkçe',
    content: `
      <h2>1. Sözel Muhakeme (Önerme Mantığı)</h2>
      <p>Verilen ifadelerden (önermelerden) yola çıkarak doğru sonuca ulaşma becerisidir. KPSS'de "Aşağıdaki sonuçlardan hangisine kesinlikle ulaşılabilir?" formatında sorulur.</p>

      <h3>Kesin Çıkarım Kuralları</h3>
      <ul>
        <li><strong>"Tüm A'lar B'dir."</strong> → Herhangi bir A'nın B olduğu kesindir. Ama tüm B'lerin A olduğu kesin <strong>değildir!</strong></li>
        <li><strong>"Hiçbir A, B değildir."</strong> → Hiçbir B de A değildir. (Karşılıklı geçerli)</li>
        <li><strong>"Bazı A'lar B'dir."</strong> → Bazı B'ler de A'dır. Ama tüm A'lar B'dir denemez.</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 Altın Kural: Tüm-Bazı İlişkisi</strong>
        <p>"Tüm A'lar B'dir." + "Tüm B'ler C'dir." → <strong>"Tüm A'lar C'dir."</strong> ✓</p>
        <p>"Tüm A'lar B'dir." + "Bazı B'ler C'dir." → <strong>"Bazı A'lar C'dir."</strong> denemez! ✗ (B'nin C olan kısmı A'yı kapsamayabilir.)</p>
      </div>

      <h2>2. Koşullu Önermeler</h2>
      <p>"Eğer... ise..." yapısındaki ifadelerdir.</p>
      <ul>
        <li><strong>"A ise B'dir."</strong> = "A → B"</li>
        <li>Bu önermeden çıkarılabilecek kesin sonuç: <strong>"B değilse A da değildir."</strong> (Karşıt olumsuz — Kontrapozitif)</li>
        <li>Çıkarılamayacak sonuç: "B ise A'dır." → Bu kesin <strong>değildir!</strong></li>
      </ul>
      <div class="alert-box">
        <strong>🎯 KPSS'de Koşullu Önerme Çözüm Yöntemi</strong>
        "Yağmur yağarsa yerler ıslanır."<br/>
        ✓ Kesin çıkarım: "Yerler ıslanmadıysa yağmur yağmamıştır." (Kontrapozitif)<br/>
        ✗ Yanlış çıkarım: "Yerler ıslandıysa yağmur yağmıştır." (Hortumla da ıslanmış olabilir)<br/>
        ✗ Yanlış çıkarım: "Yağmur yağmazsa yerler ıslanmaz." (Başka nedenle ıslanabilir)
      </div>

      <h2>3. Niceleyicilerle (Tüm, Bazı, Hiçbir) İlgili Çıkarımlar</h2>
      <table style="width:100%;border-collapse:collapse;margin:1rem 0;">
        <tr style="border-bottom:1px solid var(--surface-border);">
          <th style="padding:8px;text-align:left;">Verilen Önerme</th>
          <th style="padding:8px;text-align:left;">Geçerli Çıkarım</th>
          <th style="padding:8px;text-align:left;">Geçersiz Çıkarım</th>
        </tr>
        <tr style="border-bottom:1px solid var(--surface-border);">
          <td style="padding:8px;">Tüm A'lar B'dir.</td>
          <td style="padding:8px;">Bazı B'ler A'dır. ✓</td>
          <td style="padding:8px;">Tüm B'ler A'dır. ✗</td>
        </tr>
        <tr style="border-bottom:1px solid var(--surface-border);">
          <td style="padding:8px;">Hiçbir A, B değildir.</td>
          <td style="padding:8px;">Hiçbir B, A değildir. ✓</td>
          <td style="padding:8px;">Bazı A'lar B'dir. ✗</td>
        </tr>
        <tr style="border-bottom:1px solid var(--surface-border);">
          <td style="padding:8px;">Bazı A'lar B'dir.</td>
          <td style="padding:8px;">Bazı B'ler A'dır. ✓</td>
          <td style="padding:8px;">Tüm A'lar B'dir. ✗</td>
        </tr>
        <tr>
          <td style="padding:8px;">Bazı A'lar B değildir.</td>
          <td style="padding:8px;">—</td>
          <td style="padding:8px;">Bazı B'ler A değildir. ✗</td>
        </tr>
      </table>

      <h2>4. Sıralama Soruları</h2>
      <p>Verilen koşullara göre nesnelerin veya kişilerin sırasını belirleme.</p>
      <h3>Çözüm Yöntemi</h3>
      <ul>
        <li><strong>1.</strong> Verilen bilgilerden kesin olan (doğrudan sıralama bildiren) ipuçlarıyla başlayın.</li>
        <li><strong>2.</strong> Karşılaştırmaları bir çizgi (doğru) üzerine yerleştirin: A > B > C şeklinde.</li>
        <li><strong>3.</strong> Birden fazla ipucunu birleştirerek ortak elemanları eşleştirin.</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Sıralama Sorusu Örneği</strong>
        <p><em>"Ali'nin boyu Mehmet'ten uzundur. Mehmet, Ahmet'ten uzundur. Veli, Ali'den kısadır ama Mehmet'ten uzundur."</em></p>
        <p>Çözüm: Ali > Veli > Mehmet > Ahmet</p>
        <p>Kesin yargı: "Ahmet en kısadır." ✓ / "Veli ikinci sırada." ✓</p>
      </div>

      <h2>5. Eşleştirme (İlişkilendirme) Soruları</h2>
      <p>Kişileri, meslekleri veya nesneleri verilen ipuçlarına göre eşleştirme.</p>
      <h3>Çözüm Yöntemi</h3>
      <ul>
        <li>Bir tablo oluşturun (Kişi × Özellik).</li>
        <li>Kesin bilgileri (X = var, - = yok) önce işaretleyin.</li>
        <li>"Değilse" bilgilerini (-) tabloya girin; eleme yöntemiyle kesin sonuçlara ulaşın.</li>
      </ul>

      <h2>6. Sözcükler Arası Anlam İlişkisi Soruları</h2>
      <p>İki sözcük arasındaki ilişkiyi bulup aynı ilişkiyi taşıyan başka bir çifti belirleme.</p>
      <h3>Yaygın İlişki Türleri</h3>
      <ul>
        <li><strong>Eş anlam:</strong> Güzel – Hoş</li>
        <li><strong>Zıt anlam:</strong> Güzel – Çirkin</li>
        <li><strong>Parça – Bütün:</strong> Sayfa – Kitap, Yaprak – Ağaç</li>
        <li><strong>Neden – Sonuç:</strong> Ateş – Yanık, Güneş – Sıcaklık</li>
        <li><strong>Araç – Amaç:</strong> Kalem – Yazmak, Bıçak – Kesmek</li>
        <li><strong>Yer – Varlık:</strong> Orman – Ağaç, Deniz – Balık</li>
        <li><strong>Hammadde – Ürün:</strong> Un – Ekmek, Süt – Peynir</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 KPSS Çözüm İpucu</strong>
        Verilen çiftin arasındaki ilişkiyi bir cümleyle ifade edin: "Kalem yazmak <em>için</em> kullanılır." Şimdi aynı cümle kalıbını seçeneklere uygulayın: "Bıçak kesmek <em>için</em> kullanılır." → Doğru eşleşme!
      </div>
    `
  }
};

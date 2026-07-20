// Türkçe konu içerikleri - Bölüm 2

export const turkceTopicContents2 = {

  // 5. SES BİLGİSİ
  tur_ses_bilgisi: {
    title: 'Ses Bilgisi',
    subjectId: 'turkce',
    subjectTitle: 'Türkçe',
    content: `
      <h2>Türkçede Sesler</h2>
      <p>Türkçede <strong>29 harf</strong> (8 ünlü + 21 ünsüz) vardır.</p>
      <p><strong>Ünlüler (8):</strong> a, e, ı, i, o, ö, u, ü</p>
      <p><strong>Ünsüzler (21):</strong> b, c, ç, d, f, g, ğ, h, j, k, l, m, n, p, r, s, ş, t, v, y, z</p>

      <h3>Ünlü Sınıflandırması</h3>
      <table style="width:100%;border-collapse:collapse;margin:1rem 0;">
        <tr style="border-bottom:1px solid var(--surface-border);">
          <th style="padding:8px;text-align:left;"></th>
          <th style="padding:8px;text-align:center;">Düz</th>
          <th style="padding:8px;text-align:center;">Yuvarlak</th>
        </tr>
        <tr style="border-bottom:1px solid var(--surface-border);">
          <td style="padding:8px;"><strong>Geniş</strong></td>
          <td style="padding:8px;text-align:center;">a, e</td>
          <td style="padding:8px;text-align:center;">o, ö</td>
        </tr>
        <tr>
          <td style="padding:8px;"><strong>Dar</strong></td>
          <td style="padding:8px;text-align:center;">ı, i</td>
          <td style="padding:8px;text-align:center;">u, ü</td>
        </tr>
      </table>
      <div class="alert-box">
        <strong>🎯 Kolay Ezber</strong>
        Kalın ünlüler: <strong>a, ı, o, u</strong> (Arka damak)<br/>
        İnce ünlüler: <strong>e, i, ö, ü</strong> (Ön damak)
      </div>

      <h2>1. Büyük Ünlü Uyumu (Kalınlık-İncelik Uyumu)</h2>
      <p>Türkçe sözcüklerde ilk hece kalın ünlü içeriyorsa sonraki hecelerde de <strong>kalın</strong>, ince ünlü içeriyorsa sonraki hecelerde de <strong>ince</strong> ünlü bulunur.</p>
      <ul>
        <li>Uyar: <strong>ka-ba-hat</strong> (a-a-a: Hepsi kalın ✓), <strong>gö-rün-tü</strong> (ö-ü-ü: Hepsi ince ✓)</li>
        <li>Uymaz: <strong>ka-lem</strong> (a-e: Kalın → İnce ✗), <strong>ha-ni-me-fen-di</strong> ✗</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ İstisnalar (Çok Sorulur!)</strong>
        Büyük ünlü uyumuna <strong>uymayan Türkçe sözcükler</strong>: anne, kardeş, elma, hangi, hani, şişman, inanmak.<br/>
        <strong>Ekler de uyuma tabi olmalıdır:</strong> Ev-ler (✓), ev-lar (✗). "-yor, -ken, -ki, -leyin, -mtrak, -daş, -gil" ekleri büyük ünlü uyumuna uymaz.
      </div>

      <h2>2. Küçük Ünlü Uyumu (Düzlük-Yuvarlaklık Uyumu)</h2>
      <p>Bir sözcükte <strong>düz ünlüden sonra düz ünlü</strong>, <strong>yuvarlak ünlüden sonra ya düz-geniş (a, e) ya da dar-yuvarlak (u, ü)</strong> gelir.</p>
      <ul>
        <li>Uyar: <strong>ü-züm</strong> (yuvarlak → dar yuvarlak ✓), <strong>so-bam</strong> (yuvarlak → düz geniş ✓)</li>
        <li>Uymaz: <strong>ho-roz</strong> (yuvarlak → yuvarlak geniş [o] ✗)</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Sınav Püf Noktası</strong>
        KPSS'de küçük ünlü uyumu genellikle ek-kök ilişkisi bağlamında sorulur. Örneğin: "Aşağıdaki sözcüklerin hangisinde eklerin küçük ünlü uyumuna aykırı düştüğü görülmektedir?" türü sorularda <strong>-yor</strong> eki sıkça cevaptır (gel-<strong>i-yor</strong>: ince düz → dar ince düz → geniş yuvarlak ✗).
      </div>

      <h2>3. Ünsüz Benzeşmesi (Sertleşmesi)</h2>
      <p>Sert ünsüzlerle (F, S, T, K, Ç, Ş, H, P = <strong>Fıstıkçı Şahap</strong>) biten bir sözcüğe, "c, d, g" yumuşak ünsüzlerle başlayan bir ek geldiğinde, ekin başındaki ünsüz sertleşir.</p>
      <ul>
        <li>Ağaç-<strong>da</strong> → Ağaç<strong>ta</strong></li>
        <li>Çiçek-<strong>den</strong> → Çiçek<strong>ten</strong></li>
        <li>Süt-<strong>cü</strong> → Süt<strong>çü</strong></li>
      </ul>

      <h2>4. Ünsüz Yumuşaması</h2>
      <p>Sert ünsüzlerle (p, ç, t, k) biten sözcüklere ünlüyle başlayan ek geldiğinde sert ünsüz yumuşar (b, c, d, g/ğ).</p>
      <ul>
        <li>Kitap → Kitabı, Ağaç → Ağacı, Yurt → Yurdu, Renk → Rengi</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ Yumuşamayan Durumlar (Sık Sorulan!)</strong>
        <ul>
          <li>Tek heceli sözcüklerin çoğu: Saç-ı (saçı, "sacı" olmaz), Top-u, At-ı, Suç-u, Üç-ü</li>
          <li>Yabancı kökenli sözcükler: Hukuk-u, Cumhuriyet-i, Devlet-e, Sanat-ı, Millet-i</li>
          <li>Özel isimler: Mehmet'e ("Mehmed'e" olmaz), Ahmet'in</li>
        </ul>
      </div>

      <h2>5. Ünlü Düşmesi (Hece Düşmesi)</h2>
      <p>İki heceli bazı sözcükler ünlüyle başlayan ek aldığında ikinci hecedeki dar ünlü düşer.</p>
      <ul>
        <li>Burun → Burnu, Oğul → Oğlu, Akıl → Aklı, Alın → Alnı, Ağız → Ağzı, Omuz → Omzu</li>
      </ul>

      <h2>6. Ünlü Türemesi</h2>
      <p>Bazı sözcüklere ek getirildiğinde arada fazladan bir ünlü ortaya çıkar.</p>
      <ul>
        <li>Genç-cik → Genç<strong>e</strong>cik</li>
        <li>Bir-cik → Bir<strong>i</strong>cik</li>
      </ul>

      <h2>7. Ünsüz Türemesi (Kaynaştırma Ünsüzleri)</h2>
      <p>Ünlüyle biten sözcüklere ünlüyle başlayan ek geldiğinde araya <strong>y, n, s, ş</strong> kaynaştırma ünsüzleri girer.</p>
      <ul>
        <li>Oda-<strong>y</strong>-a, Araba-<strong>n</strong>-ın, Kapı-<strong>s</strong>-ı, İki-<strong>ş</strong>-er</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Kolay Ezber</strong>
        Kaynaştırma harfleri: <strong>Y-N-S-Ş</strong> → "Ya Neye Sinirleniyor Şu?"
      </div>

      <h2>8. Ulama</h2>
      <p>Ünsüzle biten bir sözcükten sonra ünlüyle başlayan bir sözcük geldiğinde, önceki sözcüğün son ünsüzü sonraki sözcüğün ilk ünlüsüyle birleşerek okunur.</p>
      <ul>
        <li>"Bir<u>i</u>nsanı tanımak zordur." (Bir insanı → "bi-rin-sa-nı")</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ Ulama Yapılamayan Durumlar</strong>
        <ul>
          <li>Araya virgül veya noktalama işareti girdiğinde</li>
          <li>Sayılarla yazılan ifadelerde: "5 adet" ulama yapılmaz</li>
          <li>Kısaltmalardan sonra</li>
        </ul>
      </div>
    `
  },

  // 6. YAPI BİLGİSİ
  tur_yapi_bilgisi: {
    title: 'Yapı Bilgisi',
    subjectId: 'turkce',
    subjectTitle: 'Türkçe',
    content: `
      <h2>1. Kök</h2>
      <p>Sözcüğün anlamlı en küçük parçasıdır. Daha fazla parçalara ayrılamaz.</p>
      <h3>Kök Türleri</h3>
      <ul>
        <li><strong>İsim (Ad) Kökü:</strong> Varlık, kavram veya durum bildiren köklerdir. → Ev, göz, su, taş</li>
        <li><strong>Fiil (Eylem) Kökü:</strong> İş, oluş veya durum bildiren köklerdir. → Gel-, oku-, yaz-, koş-</li>
        <li><strong>Sesteş (Ortak) Kök:</strong> Hem isim hem fiil olarak kullanılabilen köklerdir. → Yaz (mevsim) / yaz- (yazı yazmak), boya (malzeme) / boya- (boyamak), savaş (isim) / savaş- (fiil)</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Sesteş Kök Bulma Yöntemi</strong>
        Sözcüğü cümle içinde deneyin: "Yaz geldi." (İsim) / "Mektubu yaz." (Fiil) → Her iki cümlede de sözcük kullanılabiliyorsa sesteş köktür. "Ev" sözcüğü sadece isim olarak kullanılabilir, "evle-" ayrı bir sözcüktür, dolayısıyla "ev" sesteş kök değildir.
      </div>

      <h2>2. Gövde</h2>
      <p>Köke en az bir yapım eki getirilerek oluşturulan yeni sözcüktür. Kökten türemiştir ama kendi başına yeni bir anlam taşır.</p>
      <ul>
        <li>Göz → Göz<strong>lük</strong> (isimden isim), Göz<strong>le</strong>- (isimden fiil)</li>
        <li>Oku- → Oku<strong>l</strong> (fiilden isim), Oku<strong>t</strong>- (fiilden fiil)</li>
      </ul>

      <h2>3. Ek Türleri</h2>
      <h3>A. Yapım Ekleri</h3>
      <p>Yeni sözcük türetmeye yarayan, köke veya gövdeye getirilen eklerdir. Sözcüğün anlamını veya türünü değiştirir.</p>
      <ul>
        <li><strong>İsimden İsim (İ→İ):</strong> -lık/-lik, -cı/-ci, -sız/-siz, -lı/-li, -daş
          <br/><em>Göz→Göz<strong>lük</strong>, Yol→Yol<strong>cu</strong>, Su→Su<strong>suz</strong></em></li>
        <li><strong>İsimden Fiil (İ→F):</strong> -la/-le, -al/-el, -ar/-er, -sa/-se
          <br/><em>Baş→Baş<strong>la</strong>-, Su→Su<strong>la</strong>-, Yaş→Yaş<strong>ar</strong>-</em></li>
        <li><strong>Fiilden İsim (F→İ):</strong> -gı/-gi, -ım/-im, -ıcı/-ici, -mak/-mek, -ış/-iş, -ak/-ek, -gın/-gin
          <br/><em>Bil→Bil<strong>gi</strong>, Yaz→Yaz<strong>ı</strong>, Oku→Oku<strong>ycu</strong></em></li>
        <li><strong>Fiilden Fiil (F→F):</strong> -dır/-dir, -ıl/-il, -ın/-in, -ış/-iş, -t, -r
          <br/><em>Yaz→Yaz<strong>dır</strong>-, Kır→Kır<strong>ıl</strong>-, Sev→Sev<strong>iş</strong>-</em></li>
      </ul>

      <h3>B. Çekim Ekleri</h3>
      <p>Sözcüğün anlamını veya türünü değiştirmeden cümle içindeki görevini belirleyen eklerdir.</p>
      <ul>
        <li><strong>İsim Çekim Ekleri:</strong>
          <br/>— Hâl (Durum) ekleri: -ı/-i (belirtme), -a/-e (yönelme), -da/-de (bulunma), -dan/-den (ayrılma)
          <br/>— İyelik ekleri: -(ı)m, -(ı)n, -(s)ı, -(ı)mız, -(ı)nız, -ları
          <br/>— Çoğul eki: -lar/-ler
          <br/>— Tamlama (İlgi) eki: -(n)ın, -(n)in</li>
        <li><strong>Fiil Çekim Ekleri:</strong>
          <br/>— Kip ekleri: -dı (görülen geçmiş), -mış (duyulan geçmiş), -yor (şimdiki), -(y)acak (gelecek), -r (geniş), -sa (dilek-koşul), -a (istek), -malı (gereklilik), emir (eksiz)
          <br/>— Kişi ekleri: -m, -n, -(y)ız, -sınız, -lar</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 KPSS'de En Kritik Ayrım: Yapım Eki mi Çekim Eki mi?</strong>
        <p><strong>Yapım eki:</strong> Yeni sözcük türetir. Eklendikten sonra sözcüğün anlamı/türü değişir.</p>
        <p><strong>Çekim eki:</strong> Sözcüğün türünü değiştirmez, sadece cümledeki görevini belirler.</p>
        <p>Test: "Göz<strong>lük</strong>çü" → Göz (isim) → Gözlük (farklı isim, yapım) → Gözlükçü (farklı isim, yapım). İki yapım eki var.</p>
        <p>"Ev<strong>ler</strong>de" → Ev (isim) → Evler (isim, çoğul çekim) → Evlerde (isim, hâl çekim). İki çekim eki var.</p>
      </div>

      <h2>4. Sözcüklerin Yapısına Göre Sınıflandırılması</h2>
      <ul>
        <li><strong>Basit Sözcük:</strong> Hiçbir yapım eki almamış, kök halindeki sözcüktür. Çekim eki almış olabilir. → Evde (ev+de), göze (göz+e)</li>
        <li><strong>Türemiş Sözcük:</strong> En az bir yapım eki almış sözcüktür. → Gözlük (göz+lük), sevgi (sev+gi)</li>
        <li><strong>Birleşik Sözcük:</strong> En az iki sözcüğün bir araya gelerek yeni bir anlam oluşturmasıdır. → Hanımeli, bilgisayar, ayçiçeği</li>
      </ul>

      <div class="alert-box">
        <strong>⚠️ Birleşik Sözcük Türleri (Sık Sorulan)</strong>
        <ul>
          <li>Anlam kayması yoluyla: Suç<strong>üstü</strong> (suç + üstü, yeni anlam), aslan<strong>ağzı</strong> (bitki)</li>
          <li>Ses düşmesi yoluyla: Kahve<strong>altı</strong> → Kahvaltı, pazar ertesi → Pazartesi</li>
          <li>Her iki sözcüğün gerçek anlamını yitirmesiyle: Hanım<strong>eli</strong> (bitki), deniz<strong>anası</strong> (hayvan)</li>
        </ul>
      </div>
    `
  },

  // 7. SÖZCÜK TÜRLERİ
  tur_sozcuk_turleri: {
    title: 'Sözcük Türleri',
    subjectId: 'turkce',
    subjectTitle: 'Türkçe',
    content: `
      <h2>1. İsim (Ad)</h2>
      <p>Varlıklara, kavramlara, durumlara verilen adlardır.</p>
      <h3>İsim Türleri</h3>
      <ul>
        <li><strong>Özel İsim:</strong> Tek bir varlığı karşılar: Ankara, Atatürk, Tuna Nehri</li>
        <li><strong>Cins İsim:</strong> Aynı türdeki varlıkların ortak adı: İnsan, masa, kitap</li>
        <li><strong>Somut İsim:</strong> Duyu organlarıyla algılanabilen: Taş, su, ışık</li>
        <li><strong>Soyut İsim:</strong> Duyu organlarıyla algılanamayan: Sevgi, adalet, özlem</li>
        <li><strong>Topluluk İsmi:</strong> Tekil biçimdeyken çoğul anlatır: Ordu, sürü, orman, takım</li>
      </ul>

      <h2>2. Sıfat (Ön Ad)</h2>
      <p>İsimleri niteleyen veya belirten sözcüklerdir. Sıfatlar <strong>mutlaka bir isimden önce</strong> gelmelidir.</p>
      <h3>Niteleme Sıfatları</h3>
      <p>Varlıkların nasıl olduğunu, özelliklerini belirtir: <em>güzel</em> çiçek, <em>büyük</em> ev, <em>tatlı</em> su</p>
      <h3>Belirtme Sıfatları</h3>
      <ul>
        <li><strong>İşaret Sıfatı:</strong> Bu, şu, o, öteki, beriki + isim → "Bu <em>kitap</em> güzel."</li>
        <li><strong>Sayı Sıfatı:</strong> Asıl (beş kalem), sıra (üçüncü sıra), kesir (yarım ekmek), üleştirme (ikişer elma)</li>
        <li><strong>Belgisiz Sıfat:</strong> Birkaç, bazı, her, hiçbir, birçok + isim → "Birkaç <em>öğrenci</em> geldi."</li>
        <li><strong>Soru Sıfatı:</strong> Hangi, kaç, kaçıncı, nasıl + isim → "Hangi <em>ders</em>i seviyorsun?"</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası: Sıfat mı Zamir mi?</strong>
        "Bu kitap güzel." → <strong>Bu</strong> = Sıfat (isimden önce, ismi belirtiyor)<br/>
        "Bu çok güzel." → <strong>Bu</strong> = Zamir (ismin yerini tutuyor, tek başına kullanılıyor)<br/>
        <strong>Kural:</strong> Yanında isim varsa sıfat, yoksa zamirdir!
      </div>

      <h2>3. Zamir (Adıl)</h2>
      <p>İsimlerin yerine kullanılan sözcüklerdir.</p>
      <ul>
        <li><strong>Kişi Zamiri:</strong> Ben, sen, o, biz, siz, onlar</li>
        <li><strong>İşaret Zamiri:</strong> Bu, şu, o, bunlar, şunlar, onlar (Tek başına kullanılır, yanında isim yoktur)</li>
        <li><strong>Belgisiz Zamir:</strong> Birisi, hepsi, herkes, kimse, birçoğu, hiçbiri</li>
        <li><strong>Soru Zamiri:</strong> Kim, ne, hangisi, kaçı</li>
        <li><strong>Dönüşlülük Zamiri:</strong> Kendi (Öznenin yaptığı işten etkilendiğini gösterir)</li>
        <li><strong>İlgi Zamiri:</strong> -ki (Tamlayan ekinden sonra gelen, ismin yerini tutan ek) → "Benim<strong>ki</strong> daha güzel."</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ -ki'nin Üç Farklı Kullanımı (Çok Sorulan!)</strong>
        <ul>
          <li><strong>Sıfat olan -ki:</strong> Yer ve zaman bildiren sözcüklerden sonra → Akşam<strong>ki</strong> film, masa<strong>daki</strong> kitap (Bitişik yazılır)</li>
          <li><strong>Zamir olan -ki (İlgi zamiri):</strong> İyelik ekinden sonra → Benim<strong>ki</strong>, senin<strong>ki</strong> (Bitişik yazılır)</li>
          <li><strong>Bağlaç olan ki:</strong> İki cümleyi bağlar → "Biliyorum <strong>ki</strong> haklısın." (Ayrı yazılır)</li>
        </ul>
      </div>

      <h2>4. Zarf (Belirteç)</h2>
      <p>Fiilleri, sıfatları veya başka zarfları <strong>anlam yönünden</strong> etkileyen sözcüklerdir.</p>
      <ul>
        <li><strong>Durum Zarfı:</strong> Eylemi nasıl yapıldığı yönünden niteler → Hızlı koştu, güzel konuştu, yavaş yürüdü</li>
        <li><strong>Zaman Zarfı:</strong> Eylemin ne zaman yapıldığını bildirir → Dün geldim, yarın gideceğiz, şimdi başlayalım</li>
        <li><strong>Yer-Yön Zarfı:</strong> Eylemin yönünü bildirir → İleri git, aşağı in, yukarı çık (Yalın hâlde kullanılır)</li>
        <li><strong>Miktar (Azlık-Çokluk) Zarfı:</strong> Eylemi veya sıfatı derece yönünden niteler → Çok güzel, biraz yoruldum, az kaldı, en iyi</li>
        <li><strong>Soru Zarfı:</strong> Fiili sorgular → Ne zaman, nasıl, neden, niçin, nereye</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Sıfat mı Zarf mı? (En Sık Karıştırılan Konu)</strong>
        <strong>Sıfat</strong> = İsmi niteler: "Güzel <em>çiçek</em>" (çiçek = isim)<br/>
        <strong>Zarf</strong> = Fiili niteler: "Güzel <em>konuştu</em>" (konuştu = fiil)<br/>
        <strong>Zarf</strong> = Sıfatı niteler: "<em>Çok</em> güzel çiçek" (çok = güzel sıfatını niteliyor)<br/>
        Aynı sözcük cümledeki görevine göre sıfat da zarf da olabilir!
      </div>

      <h2>5. Edat (İlgeç)</h2>
      <p>Tek başına anlamı olmayan, sözcükler arasında anlam ilişkisi kuran sözcüklerdir.</p>
      <ul>
        <li><strong>İçin:</strong> Amaç, neden → "Senin için geldim."</li>
        <li><strong>Gibi:</strong> Benzetme → "Aslan gibi güçlü."</li>
        <li><strong>Kadar:</strong> Karşılaştırma, ölçü → "Senin kadar çalışkan."</li>
        <li><strong>İle:</strong> Araç, birliktelik → "Otobüs ile geldim."</li>
        <li><strong>Göre:</strong> Uygunluk → "Bana göre haklı."</li>
        <li><strong>Karşı, doğru, rağmen, dolayı, ötürü, üzere, dek, değin</strong></li>
      </ul>

      <h2>6. Bağlaç</h2>
      <p>Eş görevli sözcükleri, söz öbeklerini veya cümleleri birbirine bağlayan sözcüklerdir.</p>
      <ul>
        <li><strong>ve, veya, ya da, ama, fakat, ancak, çünkü, oysa, halbuki, hem...hem, ya...ya, ne...ne, ise, ki, de/da</strong></li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ "de/da" Bağlaç mı Hâl Eki mi? (KPSS Klasiği)</strong>
        <strong>Bağlaç "de/da":</strong> Ayrı yazılır. Cümleden çıkarılsa anlam bozulmaz. "Ben <strong>de</strong> geldim." → "Ben geldim." ✓<br/>
        <strong>Hâl eki "-de/-da":</strong> Bitişik yazılır, bulunma bildirir. "Ev<strong>de</strong> kaldım." → Çıkarılamaz.<br/>
        <strong>Hızlı test:</strong> "de/da" yerine "dahi, bile" koyabiliyorsanız → Bağlaçtır!
      </div>

      <h2>7. Ünlem</h2>
      <p>Sevinç, korku, şaşkınlık, acı gibi ani duyguları anlatan veya seslenme bildiren sözcüklerdir.</p>
      <ul>
        <li>Hay Allah!, Eyvah!, Of!, Bravo!, A!, Hey!, Aman!</li>
      </ul>

      <h2>8. Fiil (Eylem)</h2>
      <p>İş, oluş veya durum bildiren sözcüklerdir. Kip ve kişi eki alarak çekimlenir.</p>
      <ul>
        <li><strong>İş fiili:</strong> Öznenin bilinçli eylemi → Yazmak, okumak, koşmak</li>
        <li><strong>Oluş fiili:</strong> Kendiliğinden gerçekleşen → Sararmak, büyümek, solmak</li>
        <li><strong>Durum fiili:</strong> Süregelen hal → Durmak, uyumak, oturmak</li>
      </ul>
    `
  },

  // 8. CÜMLE BİLGİSİ
  tur_cumle_bilgisi: {
    title: 'Cümle Bilgisi',
    subjectId: 'turkce',
    subjectTitle: 'Türkçe',
    content: `
      <h2>Cümlenin Ögeleri</h2>

      <h3>1. Yüklem</h3>
      <p>Cümlenin en temel ögesidir. İş, oluş veya durum bildiren ya da yargı bildiren sözcük veya sözcük grubudur. Yüklem olmadan cümle olmaz.</p>
      <ul>
        <li>"Çocuklar bahçede <strong>oynuyor</strong>." → Fiil yüklemi</li>
        <li>"Hava çok <strong>güzel</strong>." → İsim yüklemi (ek fiil almış)</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 Yüklem Bulma Yöntemi</strong>
        Cümlede yapılan işi, oluşu veya durumu bildiren sözcüğü bulun. Yüklem genellikle cümlenin sonundadır (Türkçe kurallı cümle), ama devrik cümlelerde başta veya ortada olabilir.
      </div>

      <h3>2. Özne</h3>
      <p>Yüklemde bildirilen işi yapan ya da yargıda bulunan varlık veya kavramdır. Yükleme "Kim? / Ne?" sorusu sorularak bulunur.</p>
      <ul>
        <li>"<strong>Çocuklar</strong> bahçede oynuyor." → Kim oynuyor? Çocuklar (Gerçek özne)</li>
        <li>"Kapı açıldı." → Ne açıldı? Kapı (Sözde özne — Edilgen çatılı fiillerde)</li>
      </ul>
      <div class="alert-box">
        <strong>⚠️ Gizli Özne (Çok Sorulan!)</strong>
        Özne cümlede açıkça yer almaz ama yüklemin kişi ekinden anlaşılır.<br/>
        "<strong>Yarın geleceğiz.</strong>" → Biz (1. çoğul kişi, gizli özne)<br/>
        <strong>Dikkat:</strong> "Dışarıda oynamak yasaktır." → Öznesi yoktur. "Oynamak" yüklem değil öznedir!
      </div>

      <h3>3. Nesne</h3>
      <p>Yükleme "Kimi? / Neyi?" (Belirtili nesne) veya "Kim? / Ne?" (Belirtisiz nesne) sorusu sorularak bulunur.</p>
      <ul>
        <li>"<strong>Kitabı</strong> okudum." → Neyi okudum? Kitabı (Belirtili nesne: -ı/-i hâl eki almış)</li>
        <li>"<strong>Kitap</strong> okudum." → Ne okudum? Kitap (Belirtisiz nesne: hâl eki almamış)</li>
      </ul>

      <h3>4. Dolaylı Tümleç (Yer Tamlayıcısı)</h3>
      <p>Yükleme "Kime?, Nereye?, Kimde?, Nerede?, Kimden?, Nereden?" soruları sorularak bulunur. -a/-e, -da/-de, -dan/-den hâl ekleri almış öge.</p>
      <ul>
        <li>"<strong>Okula</strong> gittim." → Nereye? Okula</li>
        <li>"<strong>Evde</strong> kaldım." → Nerede? Evde</li>
        <li>"<strong>İstanbul'dan</strong> geldi." → Nereden? İstanbul'dan</li>
      </ul>

      <h3>5. Zarf Tümleci</h3>
      <p>Yüklemi zaman, durum, miktar, neden vb. yönlerden tamamlayan ögedir. "Ne zaman?, Nasıl?, Niçin?, Ne kadar?" sorularıyla bulunur.</p>
      <ul>
        <li>"<strong>Dün</strong> geldim." → Ne zaman? Dün (Zaman zarfı)</li>
        <li>"<strong>Hızla</strong> koştu." → Nasıl? Hızla (Durum zarfı)</li>
        <li>"<strong>Çok</strong> çalıştı." → Ne kadar? Çok (Miktar zarfı)</li>
      </ul>

      <h2>Cümle Türleri</h2>

      <h3>A. Yüklemine Göre</h3>
      <ul>
        <li><strong>Fiil (Eylem) Cümlesi:</strong> Yüklem çekimli bir fiildir. → "Eve <em>geldim</em>."</li>
        <li><strong>İsim (Ad) Cümlesi:</strong> Yüklem isim veya isim soylu sözcüktür. → "Hava <em>güzel</em>."</li>
      </ul>

      <h3>B. Anlamına Göre</h3>
      <ul>
        <li><strong>Olumlu:</strong> Yüklemin bildirdiği iş gerçekleşmiştir. → "Geldi."</li>
        <li><strong>Olumsuz:</strong> -ma/-me, -maz/-mez veya değil ile olumsuzlaştırılır. → "Gelmedi."</li>
        <li><strong>Soru:</strong> Soru anlamı taşır. → "Geldin mi?"</li>
      </ul>

      <h3>C. Öge Dizilişine Göre</h3>
      <ul>
        <li><strong>Kurallı (Düz) Cümle:</strong> Yüklem sonda → "Çocuklar bahçede oynuyor."</li>
        <li><strong>Devrik Cümle:</strong> Yüklem sonda değil → "Oynuyor çocuklar bahçede."</li>
        <li><strong>Eksiltili Cümle:</strong> Yüklemi olmayan cümle → "Peki, tamam."</li>
      </ul>
      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası</strong>
        Kurallı cümle sırası: Özne + Tümleçler + Nesne + Yüklem. Yüklem sondaysa → Kurallı. Değilse → Devrik. Bu kadar basit!
      </div>
    `
  }
};

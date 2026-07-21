// matData3.js - Matematik Konu İçerikleri (3/3)
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
};

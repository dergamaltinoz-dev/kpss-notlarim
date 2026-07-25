// Geometri konu içerikleri (Diyagramlar ve Görsel Vektör Şekilleri İle)

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

      <h2>3. Paralel İki Doğrunun Bir Kesenle Yaptığı Açılar ve Kurallar</h2>
      <p>d1 // d2 olmak üzere ÖSYM sorularında en çok kullanılan açı kuralları:</p>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 280 150" width="280" height="150">
            <line x1="20" y1="30" x2="260" y2="30" stroke="#8b5cf6" stroke-width="3"/>
            <line x1="20" y1="120" x2="260" y2="120" stroke="#8b5cf6" stroke-width="3"/>
            <line x1="200" y1="30" x2="80" y2="120" stroke="#ef4444" stroke-width="3"/>
            <text x="240" y="24" fill="#94a3b8" font-size="12">d1</text>
            <text x="240" y="114" fill="#94a3b8" font-size="12">d2</text>
            <path d="M 180 30 A 20 20 0 0 1 187 45" fill="none" stroke="#f59e0b" stroke-width="2"/>
            <text x="165" y="52" fill="#f59e0b" font-weight="bold" font-size="14">a</text>
            <path d="M 100 120 A 20 20 0 0 1 93 105" fill="none" stroke="#f59e0b" stroke-width="2"/>
            <text x="105" y="105" fill="#f59e0b" font-weight="bold" font-size="14">b</text>
            <text x="140" y="145" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Z Kuralı: a = b</text>
          </svg>
          <div class="geo-diagram-caption">İç Ters Açılar (Z Kuralı)</div>
        </div>

        <div class="geo-diagram-container">
          <svg viewBox="0 0 280 150" width="280" height="150">
            <line x1="20" y1="30" x2="260" y2="30" stroke="#8b5cf6" stroke-width="3"/>
            <line x1="20" y1="120" x2="260" y2="120" stroke="#8b5cf6" stroke-width="3"/>
            <polyline points="50,30 160,75 50,120" fill="none" stroke="#3b82f6" stroke-width="3"/>
            <text x="240" y="24" fill="#94a3b8" font-size="12">d1</text>
            <text x="240" y="114" fill="#94a3b8" font-size="12">d2</text>
            <text x="70" y="48" fill="#f59e0b" font-weight="bold">x</text>
            <text x="70" y="112" fill="#f59e0b" font-weight="bold">y</text>
            <text x="135" y="80" fill="#ef4444" font-weight="bold">z</text>
            <text x="140" y="145" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">M Kuralı: x + y = z</text>
          </svg>
          <div class="geo-diagram-caption">Sola Bakanlar = Sağa Bakanlar</div>
        </div>

        <div class="geo-diagram-container">
          <svg viewBox="0 0 280 150" width="280" height="150">
            <line x1="20" y1="30" x2="260" y2="30" stroke="#8b5cf6" stroke-width="3"/>
            <line x1="20" y1="120" x2="260" y2="120" stroke="#8b5cf6" stroke-width="3"/>
            <polyline points="50,30 170,75 50,120" fill="none" stroke="#ec4899" stroke-width="3"/>
            <text x="75" y="48" fill="#f59e0b" font-weight="bold">a</text>
            <text x="145" y="80" fill="#f59e0b" font-weight="bold">b</text>
            <text x="75" y="112" fill="#f59e0b" font-weight="bold">c</text>
            <text x="140" y="145" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Füze: a + b + c = 360°</text>
          </svg>
          <div class="geo-diagram-caption">Füze / Kalem Ucu Kuralı</div>
        </div>
      </div>
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
        <li><strong>Dış Açı Kuralı:</strong> Bir üçgende bir dış açının ölçüsü, kendisine komşu olmayan iki iç açının ölçüleri toplamına eşittir (α = x + y).</li>
      </ul>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 300 160" width="300" height="160">
            <polygon points="50,120 180,30 230,120" fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" stroke-width="3"/>
            <line x1="230" y1="120" x2="290" y2="120" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4"/>
            <text x="40" y="138" fill="#8b5cf6" font-weight="bold">B (x)</text>
            <text x="180" y="20" fill="#8b5cf6" font-weight="bold">A (y)</text>
            <text x="225" y="140" fill="#8b5cf6" font-weight="bold">C</text>
            <text x="250" y="112" fill="#ef4444" font-size="15" font-weight="bold">α</text>
            <text x="150" y="150" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Dış Açı: α = x + y</text>
          </svg>
          <div class="geo-diagram-caption">Komşu Olmayan İki İç Açının Toplamı</div>
        </div>

        <div class="geo-diagram-container">
          <svg viewBox="0 0 300 160" width="300" height="160">
            <polygon points="30,120 120,30 270,120" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="3"/>
            <line x1="120" y1="30" x2="150" y2="120" stroke="#ef4444" stroke-width="3"/>
            <rect x="114" y="36" width="10" height="10" fill="none" stroke="#f59e0b" stroke-width="2" transform="rotate(45 119 41)"/>
            <text x="115" y="20" fill="#3b82f6" font-weight="bold">A (90°)</text>
            <text x="15" y="135" fill="#3b82f6" font-weight="bold">B</text>
            <text x="275" y="135" fill="#3b82f6" font-weight="bold">C</text>
            <text x="150" y="140" fill="#ef4444" font-weight="bold">D</text>
            <text x="85" y="135" fill="#10b981" font-weight="bold">|</text>
            <text x="205" y="135" fill="#10b981" font-weight="bold">|</text>
            <text x="140" y="80" fill="#ef4444" font-weight="bold">|</text>
            <text x="150" y="155" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Muhteşem Üçlü: |AD| = |BD| = |DC|</text>
          </svg>
          <div class="geo-diagram-caption">Dik Açıdan İnen Kenarortay</div>
        </div>
      </div>

      <div class="alert-box">
        <strong>🎯 "Muhteşem Üçlü" Kuralı (KPSS Klasiği)</strong>
        Bir dik üçgende hipotenüse ait kenarortayın uzunluğu, hipotenüsün böldüğü parçaların uzunluğuna eşittir. Soruda dik açıdan inip kenarı ikiye bölen çizgi görünce muhteşem üçlüyü hatırlayın!
      </div>

      <h2>2. İç ve Dış Açıortaylar Arasındaki Açılar</h2>
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
      <h2>1. Pisagor Teoremi ve Özel Kenarlı Üçgenler</h2>
      <p>Bir dik üçgende dik kenarların karelerinin toplamı hipotenüsün karesine eşittir: <strong>a² + b² = c²</strong></p>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 280 160" width="280" height="160">
            <polygon points="40,130 40,30 220,130" fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" stroke-width="3"/>
            <rect x="40" y="118" width="12" height="12" fill="none" stroke="#f59e0b" stroke-width="2"/>
            <text x="20" y="85" fill="#3b82f6" font-size="15" font-weight="bold">b (3)</text>
            <text x="120" y="150" fill="#3b82f6" font-size="15" font-weight="bold">c (4)</text>
            <text x="135" y="75" fill="#ef4444" font-size="15" font-weight="bold">a (5)</text>
            <text x="140" y="15" fill="#10b981" font-size="14" text-anchor="middle" font-weight="bold">Pisagor: a² + b² = c²</text>
          </svg>
          <div class="geo-diagram-caption">Pisagor Teoremi & 3-4-5 Katları</div>
        </div>

        <div class="geo-diagram-container">
          <svg viewBox="0 0 300 160" width="300" height="160">
            <polygon points="30,130 110,30 270,130" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" stroke-width="3"/>
            <line x1="110" y1="30" x2="110" y2="130" stroke="#ef4444" stroke-dasharray="4" stroke-width="3"/>
            <rect x="110" y="118" width="12" height="12" fill="none" stroke="#f59e0b" stroke-width="2"/>
            <text x="110" y="20" fill="#10b981" font-weight="bold">A (90°)</text>
            <text x="115" y="85" fill="#ef4444" font-weight="bold" font-size="15">h</text>
            <text x="65" y="148" fill="#3b82f6" font-weight="bold" font-size="15">p</text>
            <text x="185" y="148" fill="#3b82f6" font-weight="bold" font-size="15">k</text>
            <text x="150" y="15" fill="#ef4444" font-size="14" text-anchor="middle" font-weight="bold">Öklid: h² = p · k</text>
          </svg>
          <div class="geo-diagram-caption">Öklid Bağıntıları (Dikten Dik İnmek)</div>
        </div>
      </div>

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
      <h2>Açılarına Göre Özel Üçgenler</h2>
      <p>ÖSYM sorularında açıları görüp dikme inerek oluşturacağınız temel dik üçgenler:</p>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 250 150" width="250" height="150">
            <polygon points="30,120 30,30 185,120" fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" stroke-width="3"/>
            <rect x="30" y="108" width="12" height="12" fill="none" stroke="#f59e0b" stroke-width="2"/>
            <text x="15" y="80" fill="#3b82f6" font-weight="bold">x</text>
            <text x="95" y="140" fill="#3b82f6" font-weight="bold">x√3</text>
            <text x="115" y="70" fill="#ef4444" font-weight="bold">2x</text>
            <text x="40" y="45" fill="#f59e0b" font-size="12">30°</text>
            <text x="145" y="115" fill="#f59e0b" font-size="12">60°</text>
          </svg>
          <div class="geo-diagram-caption">30° - 60° - 90° Üçgeni</div>
        </div>

        <div class="geo-diagram-container">
          <svg viewBox="0 0 220 150" width="220" height="150">
            <polygon points="30,120 30,30 120,120" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="3"/>
            <rect x="30" y="108" width="12" height="12" fill="none" stroke="#f59e0b" stroke-width="2"/>
            <text x="15" y="80" fill="#8b5cf6" font-weight="bold">x</text>
            <text x="70" y="140" fill="#8b5cf6" font-weight="bold">x</text>
            <text x="80" y="70" fill="#ef4444" font-weight="bold">x√2</text>
            <text x="40" y="50" fill="#f59e0b" font-size="12">45°</text>
            <text x="85" y="115" fill="#f59e0b" font-size="12">45°</text>
          </svg>
          <div class="geo-diagram-caption">45° - 45° - 90° Dik Üçgen</div>
        </div>
      </div>

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
        Soruda 30°, 45° veya 60° açılarını gördüğünüzde hemen karşılarına <strong>dikme inin!</strong> Dikme inerek 30-60-90 veya 45-45-90 dik üçgenleri elde edilir.
      </div>
    `
  },

  // 5. Açıortay - Kenarortay
  geo_aciortay_kenarortay: {
    title: 'Açıortay - Kenarortay',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. İç Açıortay ve Kenarortay Bağıntıları</h2>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 280 160" width="280" height="160">
            <polygon points="40,130 120,20 240,130" fill="rgba(139, 92, 246, 0.08)" stroke="#8b5cf6" stroke-width="3"/>
            <line x1="120" y1="20" x2="160" y2="130" stroke="#ef4444" stroke-width="3"/>
            <text x="65" y="70" fill="#8b5cf6" font-weight="bold" font-size="14">c</text>
            <text x="195" y="70" fill="#8b5cf6" font-weight="bold" font-size="14">b</text>
            <text x="95" y="148" fill="#3b82f6" font-weight="bold" font-size="14">x</text>
            <text x="200" y="148" fill="#3b82f6" font-weight="bold" font-size="14">y</text>
            <text x="140" y="15" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Açıortay Oranı: b / c = y / x</text>
          </svg>
          <div class="geo-diagram-caption">İç Açıortay Teoremi</div>
        </div>

        <div class="geo-diagram-container">
          <svg viewBox="0 0 280 160" width="280" height="160">
            <polygon points="30,130 140,20 250,130" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" stroke-width="3"/>
            <line x1="140" y1="20" x2="140" y2="130" stroke="#3b82f6" stroke-width="2"/>
            <line x1="30" y1="130" x2="195" y2="75" stroke="#3b82f6" stroke-width="2"/>
            <line x1="250" y1="130" x2="85" y2="75" stroke="#3b82f6" stroke-width="2"/>
            <circle cx="140" cy="93" r="5" fill="#ef4444"/>
            <text x="150" y="95" fill="#ef4444" font-weight="bold" font-size="14">G</text>
            <text x="145" y="55" fill="#f59e0b" font-weight="bold" font-size="12">2k</text>
            <text x="145" y="118" fill="#f59e0b" font-weight="bold" font-size="12">k</text>
            <text x="140" y="155" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Ağırlık Merkezi (G): 2k - k</text>
          </svg>
          <div class="geo-diagram-caption">Ağırlık Merkezi Köşeye 2k, Kenara k</div>
        </div>
      </div>

      <h2>2. İç Açıortay Teoremi</h2>
      <p>Açıortayın ayırdığı kenarların oranı, komşu yan kenarların oranına eşittir:</p>
      <p><strong>b / c = y / x</strong></p>

      <h2>3. Kenarortay ve Ağırlık Merkezi (G)</h2>
      <ul>
        <li><strong>Ağırlık Merkezi (G):</strong> Kenarortayların kesim noktasıdır.</li>
        <li>Ağırlık merkezi kenarortayı köşeye <strong>2 birim</strong>, kenara <strong>1 birim</strong> oranında böler (2k - k kuralı).</li>
        <li><strong>3 - 1 - 2 Kuralı:</strong> Orta taban çizildiğinde kenarortay üzerinde yukarıdan aşağıya 3x - x - 2x oranı oluşur.</li>
      </ul>

      <div class="alert-box">
        <strong>🎯 ÖSYM Ağırlık Merkezi Tuzağı</strong>
        Bir noktadan kenarortay geçiyorsa ve köşeye uzaklığı kenara uzaklığının 2 katıysa o nokta <strong>Ağırlık Merkezi (G)</strong>'dir.
      </div>
    `
  },

  // 6. Üçgende Alan
  geo_ucgende_alan: {
    title: 'Üçgende Alan',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Temel Alan Diyagramı ve Formülleri</h2>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 260 150" width="260" height="150">
            <polygon points="30,120 100,20 230,120" fill="rgba(139, 92, 246, 0.12)" stroke="#8b5cf6" stroke-width="3"/>
            <line x1="100" y1="20" x2="100" y2="120" stroke="#ef4444" stroke-dasharray="4" stroke-width="3"/>
            <rect x="100" y="108" width="10" height="10" fill="none" stroke="#f59e0b" stroke-width="2"/>
            <text x="105" y="70" fill="#ef4444" font-weight="bold">hₐ</text>
            <text x="125" y="140" fill="#3b82f6" font-weight="bold">a (Taban)</text>
            <text x="130" y="15" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Alan = (a · hₐ) / 2</text>
          </svg>
          <div class="geo-diagram-caption">Taban × Yükseklik / 2</div>
        </div>
      </div>

      <h2>2. Temel ve Özel Alan Formülleri</h2>
      <ul>
        <li><strong>Dik Üçgende Alan:</strong> Dik kenarların çarpımının yarısıdır: <strong>Alan = (b · c) / 2</strong></li>
        <li><strong>Sinüslü Alan Formülü:</strong> <strong>Alan = (1/2) · b · c · sin(α)</strong></li>
        <li><strong>Eşkenar Üçgenin Alanı:</strong> Bir kenarı a olan eşkenar üçgen için <strong>Alan = (a² √3) / 4</strong></li>
      </ul>

      <h2>3. Taban - Alan İlişkisi</h2>
      <ul>
        <li>Yükseklikleri eşit olan üçgenlerin alanları oranı, <strong>tabanları oranına eşittir.</strong></li>
        <li>Ağırlık merkezi (G) üçgenin alanını 3 eşit parçaya böler (S, S, S).</li>
      </ul>
    `
  },

  // 7. Üçgende Benzerlik
  geo_ucgende_benzerlik: {
    title: 'Üçgende Benzerlik',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Kelebek ve Thales Benzerlik Diyagramları</h2>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 280 150" width="280" height="150">
            <line x1="30" y1="25" x2="250" y2="25" stroke="#8b5cf6" stroke-width="3"/>
            <line x1="30" y1="125" x2="250" y2="125" stroke="#8b5cf6" stroke-width="3"/>
            <line x1="50" y1="25" x2="230" y2="125" stroke="#ef4444" stroke-width="3"/>
            <line x1="230" y1="25" x2="50" y2="125" stroke="#3b82f6" stroke-width="3"/>
            <text x="35" y="20" fill="#8b5cf6" font-weight="bold">A</text>
            <text x="240" y="20" fill="#8b5cf6" font-weight="bold">B</text>
            <text x="35" y="142" fill="#8b5cf6" font-weight="bold">D</text>
            <text x="240" y="142" fill="#8b5cf6" font-weight="bold">E</text>
            <text x="145" y="80" fill="#f59e0b" font-weight="bold">C</text>
            <text x="140" y="145" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Kelebek: AB // DE</text>
          </svg>
          <div class="geo-diagram-caption">Kelebek / Kum Saati Benzerliği</div>
        </div>
      </div>

      <h2>2. Benzerlik Kuralları</h2>
      <ul>
        <li><strong>A.A. (Açı-Açı) Benzerliği:</strong> İki üçgenin iki açısı eşitse üçgenler benzerdir.</li>
        <li><strong>Kelebek (Kum Saati) Benzerliği:</strong> Paralel iki taban arasında karşılıklı kenarlar orantılıdır: <strong>|AB| / |DE| = |AC| / |CD|</strong></li>
      </ul>
    `
  },

  // 8. Üçgende Benzerlik ve Alan
  geo_ucgende_benzerlik_alan: {
    title: 'Üçgende Benzerlik ve Alan',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Benzerlik Oranı ve Alan İlişkisi</h2>
      <p>İki üçgen benzer ise <strong>ALANLARI ORANI = k²</strong> (Benzerlik oranının karesidir).</p>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 260 160" width="260" height="160">
            <polygon points="130,15 20,140 240,140" fill="rgba(139, 92, 246, 0.05)" stroke="#8b5cf6" stroke-width="3"/>
            <line x1="93" y1="56" x2="167" y2="56" stroke="#3b82f6" stroke-width="2"/>
            <line x1="56" y1="98" x2="204" y2="98" stroke="#3b82f6" stroke-width="2"/>
            <text x="130" y="45" fill="#ef4444" font-weight="bold" text-anchor="middle">S</text>
            <text x="130" y="83" fill="#f59e0b" font-weight="bold" text-anchor="middle">3S</text>
            <text x="130" y="125" fill="#10b981" font-weight="bold" text-anchor="middle">5S</text>
            <text x="130" y="155" fill="#8b5cf6" font-size="13" text-anchor="middle" font-weight="bold">Paralel Katlarda S, 3S, 5S Alanlar</text>
          </svg>
          <div class="geo-diagram-caption">Eşit Paralel Katlarda Alan Dağılımı</div>
        </div>
      </div>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası</strong>
        Benzerlik oranı 1/2 ise (orta taban durumu), alanlar oranı (1/2)² = 1/4 olur. Üst parça S ise alt parçaya 3S kalır.
      </div>
    `
  },

  // 9. Üçgende Açı-Kenar Bağıntıları
  geo_ucgende_aci_kenar: {
    title: 'Üçgende Açı-Kenar Bağıntıları',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Açı - Kenar İlişkisi ve Üçgen Eşitsizliği</h2>
      <p>Bir üçgende <strong>büyük açı karşısında büyük kenar</strong> bulunur.</p>
      <p>Üçgen Eşitsizliği: <strong>|b - c| < a < b + c</strong></p>
    `
  },

  // 10. Çokgen - Dörtgen
  geo_cokgen_dortgen: {
    title: 'Çokgen - Dörtgen',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Düzgün Altıgen Diyagramı ve Özellikleri</h2>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 240 180" width="240" height="180">
            <polygon points="120,20 190,50 190,130 120,160 50,130 50,50" fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" stroke-width="3"/>
            <line x1="120" y1="20" x2="120" y2="160" stroke="#3b82f6" stroke-width="2"/>
            <line x1="50" y1="50" x2="190" y2="130" stroke="#3b82f6" stroke-width="2"/>
            <line x1="50" y1="130" x2="190" y2="50" stroke="#3b82f6" stroke-width="2"/>
            <text x="120" y="95" fill="#ef4444" font-weight="bold" text-anchor="middle">6 x (a²√3)/4</text>
            <text x="120" y="175" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Düzgün Altıgen = 6 Eşkenar Üçgen</text>
          </svg>
          <div class="geo-diagram-caption">Bir İç Açısı 120°, Dış Açısı 60°</div>
        </div>
      </div>

      <h2>2. Konveks Çokgenlerin Genel Özellikleri (n kenarlı)</h2>
      <ul>
        <li>İç açılar toplamı: <strong>(n - 2) · 180°</strong></li>
        <li>Dış açılar toplamı: <strong>360°</strong></li>
      </ul>
    `
  },

  // 11. Paralelkenar - Eşkenar Dörtgen
  geo_paralelkenar_eskenar: {
    title: 'Paralelkenar - Eşkenar Dörtgen',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Eşkenar Dörtgen Köşegen Özellikleri</h2>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 260 160" width="260" height="160">
            <polygon points="130,20 230,90 130,160 30,90" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="3"/>
            <line x1="130" y1="20" x2="130" y2="160" stroke="#ef4444" stroke-width="2"/>
            <line x1="30" y1="90" x2="230" y2="90" stroke="#ef4444" stroke-width="2"/>
            <rect x="130" y="90" width="10" height="10" fill="none" stroke="#f59e0b" stroke-width="2"/>
            <text x="130" y="175" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Alan = (e · f) / 2</text>
          </svg>
          <div class="geo-diagram-caption">Köşegenler DİK Kesişir ve Açıortaydır</div>
        </div>
      </div>

      <h2>2. Eşkenar Dörtgen</h2>
      <ul>
        <li>Dört kenarı da birbirine eşittir.</li>
        <li>Köşegenler birbirini <strong>DİK keser</strong> ve aynı zamanda <strong>AÇIORTAY</strong>dır.</li>
      </ul>
    `
  },

  // 12. Dikdörtgen - Kare
  geo_dikdortgen_kare: {
    title: 'Dikdörtgen - Kare',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Kare Köşegen Diyagramı</h2>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 220 170" width="220" height="170">
            <rect x="30" y="20" width="130" height="130" fill="rgba(139, 92, 246, 0.1)" stroke="#8b5cf6" stroke-width="3"/>
            <line x1="30" y1="20" x2="160" y2="150" stroke="#ef4444" stroke-width="2"/>
            <line x1="160" y1="20" x2="30" y2="150" stroke="#ef4444" stroke-width="2"/>
            <text x="45" y="42" fill="#f59e0b" font-size="11" font-weight="bold">45°</text>
            <text x="95" y="165" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Alan = a² veya e² / 2</text>
          </svg>
          <div class="geo-diagram-caption">Köşegenler Dik Kesişir (45° - 45° Açıortay)</div>
        </div>
      </div>

      <h2>2. Özellikler</h2>
      <ul>
        <li><strong>Dikdörtgen Alanı:</strong> a · b</li>
        <li><strong>Kare Alanı:</strong> a² veya (e² / 2)</li>
      </ul>
    `
  },

  // 13. Yamuk - Deltoid
  geo_yamuk_deltoid: {
    title: 'Yamuk - Deltoid',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Yamuk Orta Taban Diyagramı</h2>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 280 160" width="280" height="160">
            <polygon points="70,30 190,30 240,130 30,130" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" stroke-width="3"/>
            <line x1="50" y1="80" x2="215" y2="80" stroke="#ef4444" stroke-width="3" stroke-dasharray="4"/>
            <text x="130" y="24" fill="#3b82f6" font-weight="bold" text-anchor="middle">c (Üst Taban)</text>
            <text x="130" y="148" fill="#3b82f6" font-weight="bold" text-anchor="middle">a (Alt Taban)</text>
            <text x="130" y="74" fill="#ef4444" font-weight="bold" text-anchor="middle">m = (a + c) / 2</text>
            <text x="130" y="160" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Yamuk Alanı = Orta Taban × h</text>
          </svg>
          <div class="geo-diagram-caption">Yamukta Orta Taban m = (a + c) / 2</div>
        </div>
      </div>

      <h2>2. Deltoid</h2>
      <p>Köşegenler birbirini <strong>DİK keser</strong>. Alan = (e · f) / 2</p>
    `
  },

  // 14. Çemberde Açı
  geo_cemberde_aci: {
    title: 'Çemberde Açı',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Merkez Açı, Çevre Açı ve Çapı Gören Çevre Açı</h2>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 260 170" width="260" height="170">
            <circle cx="120" cy="80" r="60" fill="rgba(139, 92, 246, 0.05)" stroke="#8b5cf6" stroke-width="3"/>
            <circle cx="120" cy="80" r="4" fill="#ef4444"/>
            <line x1="120" y1="80" x2="160" y2="35" stroke="#3b82f6" stroke-width="2"/>
            <line x1="120" y1="80" x2="175" y2="100" stroke="#3b82f6" stroke-width="2"/>
            <line x1="60" y1="80" x2="160" y2="35" stroke="#10b981" stroke-width="2"/>
            <line x1="60" y1="80" x2="175" y2="100" stroke="#10b981" stroke-width="2"/>
            <text x="110" y="80" fill="#ef4444" font-weight="bold">O</text>
            <text x="130" y="70" fill="#3b82f6" font-size="12" font-weight="bold">2α</text>
            <text x="75" y="83" fill="#10b981" font-size="12" font-weight="bold">α</text>
            <text x="120" y="160" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Çevre Açı (α) = Gördüğü Yayın Yarısı</text>
          </svg>
          <div class="geo-diagram-caption">Merkez Açı = Yay, Çevre Açı = Yay / 2</div>
        </div>

        <div class="geo-diagram-container">
          <svg viewBox="0 0 260 170" width="260" height="170">
            <circle cx="120" cy="80" r="60" fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" stroke-width="3"/>
            <line x1="60" y1="80" x2="180" y2="80" stroke="#ef4444" stroke-width="3"/>
            <polyline points="60,80 135,22 180,80" fill="none" stroke="#8b5cf6" stroke-width="3"/>
            <rect x="130" y="26" width="10" height="10" fill="none" stroke="#f59e0b" stroke-width="2" transform="rotate(45 135 30)"/>
            <text x="50" y="95" fill="#ef4444" font-weight="bold">A</text>
            <text x="185" y="95" fill="#ef4444" font-weight="bold">B (Çap)</text>
            <text x="135" y="14" fill="#8b5cf6" font-weight="bold">C (90°)</text>
            <text x="120" y="160" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Çapı Gören Çevre Açı 90°'dir</text>
          </svg>
          <div class="geo-diagram-caption">KPSS Altın Kural</div>
        </div>
      </div>

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

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 260 160" width="260" height="160">
            <circle cx="120" cy="70" r="55" fill="rgba(16, 185, 129, 0.05)" stroke="#10b981" stroke-width="3"/>
            <circle cx="120" cy="70" r="4" fill="#ef4444"/>
            <line x1="70" y1="105" x2="170" y2="105" stroke="#3b82f6" stroke-width="3"/>
            <line x1="120" y1="70" x2="120" y2="105" stroke="#ef4444" stroke-dasharray="3" stroke-width="2"/>
            <rect x="120" y="95" width="8" height="8" fill="none" stroke="#f59e0b" stroke-width="2"/>
            <text x="110" y="65" fill="#ef4444" font-weight="bold">O</text>
            <text x="90" y="122" fill="#3b82f6" font-weight="bold">|</text>
            <text x="145" y="122" fill="#3b82f6" font-weight="bold">|</text>
            <text x="120" y="150" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Merkezden Kirişe Dikme Kirişi İkiye Böler</text>
          </svg>
          <div class="geo-diagram-caption">Merkezden Kirişe İnen Dikme</div>
        </div>
      </div>

      <ul>
        <li>Merkezden teğet değme noktasına çizilen yarıçap teğete <strong>DİKTİR</strong> (r ⊥ t).</li>
        <li>Çember dışındaki noktadan çizilen teğetlerin uzunlukları eşittir.</li>
      </ul>
    `
  },

  // 16. Dairede Alan
  geo_dairede_alan: {
    title: 'Dairede Alan',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Daire Dilim Alanı Diyagramı</h2>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 240 160" width="240" height="160">
            <path d="M 120 80 L 175 40 A 60 60 0 0 0 65 40 Z" fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" stroke-width="3"/>
            <circle cx="120" cy="80" r="60" fill="none" stroke="#94a3b8" stroke-dasharray="4" stroke-width="2"/>
            <text x="115" y="98" fill="#ef4444" font-weight="bold">O</text>
            <text x="115" y="55" fill="#f59e0b" font-weight="bold">α</text>
            <text x="145" y="70" fill="#3b82f6" font-weight="bold">r</text>
            <text x="120" y="152" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Dilim Alanı = π · r² · (α / 360°)</text>
          </svg>
          <div class="geo-diagram-caption">α Derecelik Daire Diliminin Alanı</div>
        </div>
      </div>

      <ul>
        <li><strong>Çevre:</strong> 2 · π · r</li>
        <li><strong>Daire Alanı:</strong> π · r²</li>
      </ul>
    `
  },

  // 17. Analitik Geometri
  geo_analitik_geometri: {
    title: 'Analitik Geometri',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Dik Koordinat Sistemi ve Uzaklık Formülü</h2>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 280 170" width="280" height="170">
            <line x1="30" y1="130" x2="250" y2="130" stroke="#94a3b8" stroke-width="2"/>
            <line x1="50" y1="20" x2="50" y2="150" stroke="#94a3b8" stroke-width="2"/>
            <text x="255" y="134" fill="#94a3b8" font-weight="bold">X</text>
            <text x="46" y="15" fill="#94a3b8" font-weight="bold">Y</text>
            <circle cx="90" cy="100" r="4" fill="#8b5cf6"/>
            <circle cx="200" cy="40" r="4" fill="#8b5cf6"/>
            <line x1="90" y1="100" x2="200" y2="40" stroke="#ef4444" stroke-width="3"/>
            <line x1="90" y1="100" x2="200" y2="100" stroke="#3b82f6" stroke-dasharray="3" stroke-width="2"/>
            <line x1="200" y1="40" x2="200" y2="100" stroke="#3b82f6" stroke-dasharray="3" stroke-width="2"/>
            <text x="65" y="105" fill="#8b5cf6" font-weight="bold">A(x₁,y₁)</text>
            <text x="205" y="35" fill="#8b5cf6" font-weight="bold">B(x₂,y₂)</text>
            <text x="135" y="60" fill="#ef4444" font-weight="bold">|AB|</text>
            <text x="140" y="162" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">|AB| = √[(x₂ - x₁)² + (y₂ - y₁)²]</text>
          </svg>
          <div class="geo-diagram-caption">İki Nokta Arasındaki Uzaklık</div>
        </div>
      </div>

      <h2>2. Doğrunun Eğimi (m)</h2>
      <p>İki noktadan geçen doğrunun eğimi: <strong>m = (y₂ - y₁) / (x₂ - x₁)</strong></p>
    `
  },

  // 18. Katı Cisimler
  geo_kati_cisimler: {
    title: 'Katı Cisimler',
    subjectId: 'geometri',
    subjectTitle: 'Geometri',
    content: `
      <h2>1. Katı Cisimler 3D Diyagramları</h2>

      <div class="geo-diagram-grid">
        <div class="geo-diagram-container">
          <svg viewBox="0 0 260 160" width="260" height="160">
            <rect x="40" y="50" width="120" height="80" fill="rgba(139, 92, 246, 0.08)" stroke="#8b5cf6" stroke-width="2"/>
            <polygon points="40,50 80,20 200,20 160,50" fill="rgba(139, 92, 246, 0.15)" stroke="#8b5cf6" stroke-width="2"/>
            <polygon points="160,50 200,20 200,100 160,130" fill="rgba(139, 92, 246, 0.12)" stroke="#8b5cf6" stroke-width="2"/>
            <line x1="40" y1="130" x2="200" y2="20" stroke="#ef4444" stroke-width="3"/>
            <text x="100" y="145" fill="#3b82f6" font-weight="bold">a</text>
            <text x="185" y="120" fill="#3b82f6" font-weight="bold">b</text>
            <text x="25" y="95" fill="#3b82f6" font-weight="bold">c</text>
            <text x="110" y="70" fill="#ef4444" font-weight="bold">Cisim Köşegeni</text>
            <text x="130" y="158" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Hacim = a · b · c</text>
          </svg>
          <div class="geo-diagram-caption">Dikdörtgenler Prizması & Cisim Köşegeni</div>
        </div>

        <div class="geo-diagram-container">
          <svg viewBox="0 0 260 160" width="260" height="160">
            <ellipse cx="70" cy="40" rx="35" ry="12" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="2"/>
            <ellipse cx="70" cy="120" rx="35" ry="12" fill="rgba(59, 130, 246, 0.1)" stroke="#3b82f6" stroke-width="2"/>
            <line x1="35" y1="40" x2="35" y2="120" stroke="#3b82f6" stroke-width="2"/>
            <line x1="105" y1="40" x2="105" y2="120" stroke="#3b82f6" stroke-width="2"/>
            <text x="70" y="85" fill="#3b82f6" font-size="12" text-anchor="middle" font-weight="bold">V = πr²h</text>
            <ellipse cx="190" cy="120" rx="35" ry="12" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" stroke-width="2"/>
            <line x1="190" y1="30" x2="155" y2="120" stroke="#ef4444" stroke-width="2"/>
            <line x1="190" y1="30" x2="225" y2="120" stroke="#ef4444" stroke-width="2"/>
            <text x="190" y="90" fill="#ef4444" font-size="12" text-anchor="middle" font-weight="bold">V = (πr²h)/3</text>
            <text x="130" y="155" fill="#10b981" font-size="13" text-anchor="middle" font-weight="bold">Koni Hacminde 3'e Bölünür!</text>
          </svg>
          <div class="geo-diagram-caption">Silindir vs Koni Hacim Karşılaştırması</div>
        </div>
      </div>

      <div class="alert-box">
        <strong>🎯 KPSS Püf Noktası</strong>
        Ucu sivri olan katı cisimlerin (Piramit, Koni) hacminde formül <strong>3'e bölünür</strong>. Prizma ve Silindir gibi tabanı ile tavanı aynı olan cisimlerde Hacim = Taban Alanı × Yükseklik'tir.
      </div>
    `
  }
};

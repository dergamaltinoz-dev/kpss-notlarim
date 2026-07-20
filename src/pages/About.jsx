import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Target, Award, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-fade-in" style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
      <div className="glass-panel" style={{ padding: '3.5rem', textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(139, 92, 246, 0.15)', borderRadius: '20px', marginBottom: '1.5rem' }}>
          <GraduationCap className="text-gradient" size={56} />
        </div>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '1rem' }}>
          KPSS Notlarım <span className="text-gradient">Hakkında</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }}>
          KPSS Lisans adaylarının Genel Yetenek ve Genel Kültür sınavlarına gereksiz detaylardan uzak, 
          doğrudan soru çözdüren püf noktalar ve nokta atışı bilgilerle hazırlanması için kurulmuş modern bir platform.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <Target size={32} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Misyonumuz</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Adayların vakit kaybetmeden ÖSYM tarzı çeldiricileri, sınav püf noktalarını ve en güncel konu özetlerini 
            en sade ve etkili biçimde öğrenmelerini sağlamak.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <ShieldCheck size={32} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>%100 Doğru Bilgi</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            İçeriklerimiz akademik kaynaklar ve geçmiş yıl sınav soruları analiz edilerek özenle hazırlanmakta, 
            bilgi kirliliğinin önüne geçilmektedir.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <Award size={32} style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem' }}>Sınav Odaklılık</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Kitaplar dolusu gereksiz ezber yerine, sınavlarda doğrudan karşınıza çıkacak kritik ipuçlarına 
            ve ÖSYM'nin sevdiği tuzaklara odaklanıyoruz.
          </p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Çalışmaya Başlamaya Hazır mısın?</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Türkçe, Matematik, Tarih, Coğrafya ve Vatandaşlık derslerimizi keşfet.</p>
        </div>
        <Link to="/" className="btn-primary">
          Dersleri İncele
        </Link>
      </div>
    </div>
  );
};

export default About;

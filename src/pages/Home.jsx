import React from 'react';
import { useNavigate } from 'react-router-dom';
import { subjects } from '../data/mockData';
import * as Icons from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-fade-in">
      <section className="hero">
        <h1>KPSS Lisans'a <span className="text-gradient">Modern</span> Bir Hazırlık Deneyimi</h1>
        <p>Genel Yetenek ve Genel Kültür dersleri için özenle hazırlanmış, sade ve şık konu anlatımları.</p>
        <button className="btn-primary" onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })}>
          Derslere Göz At
        </button>
      </section>

      <section>
        <h2 style={{ marginBottom: '1rem' }}>Genel Yetenek</h2>
        <div className="subject-grid">
          {subjects.filter(s => s.category === 'Genel Yetenek').map(subject => {
            const Icon = Icons[subject.icon];
            return (
              <div key={subject.id} className="subject-card glass-panel" onClick={() => navigate(`/ders/${subject.id}`)}>
                <div className="subject-icon">
                  <Icon size={24} />
                </div>
                <h3>{subject.title}</h3>
                <p>{subject.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Genel Kültür</h2>
        <div className="subject-grid">
          {subjects.filter(s => s.category === 'Genel Kültür').map(subject => {
            const Icon = Icons[subject.icon];
            return (
              <div key={subject.id} className="subject-card glass-panel" onClick={() => navigate(`/ders/${subject.id}`)}>
                <div className="subject-icon">
                  <Icon size={24} />
                </div>
                <h3>{subject.title}</h3>
                <p>{subject.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;

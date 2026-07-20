import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { subjects, topics } from '../data/mockData';
import { ArrowLeft, BookOpen } from 'lucide-react';

const SubjectPage = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  
  const subject = subjects.find(s => s.id === subjectId);
  const subjectTopics = topics[subjectId] || [];

  if (!subject) return <div style={{ textAlign: 'center', marginTop: '5rem' }}>Ders bulunamadı.</div>;

  return (
    <div className="animate-fade-in">
      <Link to="/" className="back-btn">
        <ArrowLeft size={20} /> Ana Sayfaya Dön
      </Link>
      
      <div className="content-header">
        <h1>{subject.title} Konuları</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Bu derste yer alan güncel konu başlıkları aşağıda listelenmiştir.</p>
      </div>

      {subjectTopics.length > 0 ? (
        <div className="topic-list">
          {subjectTopics.map((topic, index) => (
            <div key={topic.id} className="topic-item glass-panel" onClick={() => navigate(`/konu/${topic.id}`)}>
              <div className="topic-item-left">
                <span className="topic-number">{index + 1}</span>
                <span className="topic-title">{topic.title}</span>
              </div>
              <BookOpen size={20} style={{ color: 'var(--text-secondary)' }} />
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: 'var(--text-secondary)' }}>Bu ders için henüz içerik eklenmemiştir. Çok yakında eklenecektir!</p>
      )}
    </div>
  );
};

export default SubjectPage;

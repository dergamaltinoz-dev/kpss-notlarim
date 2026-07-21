import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { topicContents } from '../data/mockData';
import { ArrowLeft } from 'lucide-react';

const TopicPage = () => {
  const { topicId } = useParams();
  const [contentData, setContentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Önce statik veriye bak (Türkçe, Tarih, Coğrafya, Vatandaşlık)
    if (topicContents[topicId]) {
      setContentData(topicContents[topicId]);
      setLoading(false);
    } else if (topicId && topicId.startsWith('mat_')) {
      // Matematik konuları için JSON'dan yükle (Vite build cache bypass)
      fetch('/matData.json')
        .then(r => r.json())
        .then(data => {
          setContentData(data[topicId] || null);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [topicId]);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '5rem' }}>Yükleniyor...</div>;
  if (!contentData) return <div style={{ textAlign: 'center', marginTop: '5rem' }}>Konu içeriği bulunamadı veya henüz hazırlanmadı.</div>;

  return (
    <div className="animate-fade-in">
      <div className="breadcrumb">
        <Link to="/">Ana Sayfa</Link> / 
        <Link to={`/ders/${contentData.subjectId}`}>{contentData.subjectTitle}</Link> / 
        <span style={{ color: 'var(--text-primary)' }}>{contentData.title}</span>
      </div>
      
      <Link to={`/ders/${contentData.subjectId}`} className="back-btn">
        <ArrowLeft size={20} /> Konulara Dön
      </Link>

      <div className="glass-panel" style={{ padding: '3rem', marginTop: '1rem' }}>
        <div className="content-header" style={{ marginBottom: '2rem', paddingBottom: '1rem' }}>
          <h1>{contentData.title}</h1>
        </div>
        
        <div 
          className="content-body" 
          dangerouslySetInnerHTML={{ __html: contentData.content }} 
        />
      </div>
    </div>
  );
};

export default TopicPage;

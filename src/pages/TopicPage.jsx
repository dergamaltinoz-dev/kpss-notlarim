import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { topicContents } from '../data/mockData';
import { matTopicContents1 } from '../data/matData1';
import { matTopicContents2 } from '../data/matData2';
import { matTopicContents3 } from '../data/matData3';
import { ArrowLeft } from 'lucide-react';

const allMatContents = {
  ...matTopicContents1,
  ...matTopicContents2,
  ...matTopicContents3
};

const TopicPage = () => {
  const { topicId } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [topicId]);

  const contentData = topicContents[topicId] || allMatContents[topicId];

  if (!contentData) {
    return (
      <div style={{ textAlign: 'center', marginTop: '5rem' }}>
        <h2>Konu içeriği bulunamadı veya henüz hazırlanmadı.</h2>
        <Link to="/" className="back-btn" style={{ marginTop: '1rem', display: 'inline-flex' }}>
          <ArrowLeft size={20} /> Ana Sayfaya Dön
        </Link>
      </div>
    );
  }

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

      <div className="glass-panel topic-card-container">
        <div className="content-header" style={{ marginBottom: '1.5rem', paddingBottom: '1rem' }}>
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

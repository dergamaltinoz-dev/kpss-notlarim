import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SubjectPage from './pages/SubjectPage';
import TopicPage from './pages/TopicPage';

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ders/:subjectId" element={<SubjectPage />} />
            <Route path="/konu/:topicId" element={<TopicPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;

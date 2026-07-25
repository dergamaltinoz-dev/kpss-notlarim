import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import SubjectPage from './pages/SubjectPage.jsx';
import TopicPage from './pages/TopicPage.jsx';
import About from './pages/About.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hakkimizda" element={<About />} />
              <Route path="/ders/:subjectId" element={<SubjectPage />} />
              <Route path="/konu/:topicId" element={<TopicPage />} />
            </Routes>
          </main>
        </div>
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;

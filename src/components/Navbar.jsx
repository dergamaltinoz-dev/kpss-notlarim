import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Sun, Moon, Smartphone } from 'lucide-react';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('kpss_theme') || 'dark';
  });
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kpss_theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the PWA prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <GraduationCap className="text-gradient" size={32} />
        <span>KPSS<span className="text-gradient">Lisans</span></span>
      </Link>
      
      <div className="nav-right">
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Ana Sayfa</Link></li>
          <li><Link to="/hakkimizda" className="nav-link">Hakkımızda</Link></li>
        </ul>

        {deferredPrompt && (
          <button 
            className="pwa-install-btn" 
            onClick={handleInstallClick}
            title="Uygulamayı Yükle"
          >
            <Smartphone size={18} />
            <span>Uygulamayı İndir</span>
          </button>
        )}

        <button 
          className="theme-toggle-btn" 
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Gündüz Moduna Geç' : 'Gece Moduna Geç'}
          aria-label="Tema Değiştir"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

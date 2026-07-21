import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('kpss_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kpss_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
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

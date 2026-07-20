import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <GraduationCap className="text-gradient" size={32} />
        <span>KPSS<span className="text-gradient">Lisans</span></span>
      </Link>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Ana Sayfa</Link></li>
        <li><Link to="/" className="nav-link">Hakkımızda</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

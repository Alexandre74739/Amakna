import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';
import burger from '../assets/menu-hamburger.png';
import './Header.scss';

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <img src={logo} alt="Logo" />

      <nav>
        <Link to="/">Map Monde</Link>
        <Link to="/encyclopedie">Encyclopédie</Link>
        <Link to="/jeux">Mini-Jeux</Link>
      </nav>

      {/* Responsive */}
      <img
        src={burger}
        alt="Menu"
        className="burger"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="nav-mobile">
          <Link to="/" onClick={() => setOpen(false)}>Map Monde</Link>
          <Link to="/encyclopedie" onClick={() => setOpen(false)}>Encyclopédie</Link>
          <Link to="/jeux" onClick={() => setOpen(false)}>Mini-Jeux</Link>
        </div>
      )}
    </header>
  );
}

export default Header;

import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Header.scss';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />

      <nav>
        <Link to="/">Map Monde</Link>
        <Link to="/encyclopedie">Encyclopédie</Link>
        <Link to="/jeux">Mini-Jeux</Link>
      </nav>
    </header>
  );
}

export default Header;

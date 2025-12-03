import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo"/>

      <nav>
        <Link to="/">Map</Link>
        <Link to="/encyclopedie">Encyclopédie</Link>
        <Link to="/jeux">Mini-Jeux</Link>
      </nav>
    </header>
  );
}

export default Header;

import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src="src/assets/logo.png" className="logo" alt="Logo" />

      <nav className="nav">
        <a href="#">Map Monde</a>
        <a href="#">Encyclopédie</a>
        <a href="#">Mini-Jeux</a>
      </nav>
    </header>
  );
}

export default Header;

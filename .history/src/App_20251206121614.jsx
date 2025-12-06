import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Map from './pages/Map';
import Encyclopedie from './pages/Encyclopedie';
import PersonnageDetail from './pages/PersonnageDetail';
import Jeux from './pages/Jeux';
import './App.scss';

function App() {
  return (
    <Router>
      {/* Header visible sur toutes les pages */}
      <Header />

      <div style={{ paddingTop: "150px" }}></div>

      {/* Définition des routes */}
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/encyclopedie" element={<Encyclopedie />} />
        <Route path="/personnage/:id" element={<PersonnageDetail />} />
        <Route path="/jeux" element={<Jeux />} />
      </Routes>

      <div style={{ paddingTop: "150px" }}></div>

      {/* Footer visible sur toutes les pages */}

      <Footer />
      
    </Router>
  );
}

export default App;
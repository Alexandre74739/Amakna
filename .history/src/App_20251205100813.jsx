import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Map from './pages/Map';
import Encyclopedie from './pages/Encyclopedie';
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
        <Route path="/jeux" element={<Jeux />} />
      </Routes>

      <div style={{ paddingTop: "150px" }}></div>

      {/* Footer}
    </Router>
  );
}

export default App;

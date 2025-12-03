import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Map from './pages/Map';
import Encyclopedie from './pages/Encyclopedie';
import MiniJeux from './pages/Jeux';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/encyclopedie" element={<Encyclopedie />} />
        <Route path="/minijeux" element={<Jeux />} />
      </Routes>
    </Router>
  );
}

export default App;

import { useState } from "react";
import Buttons from "../components/Buttons";
import pandora from "../assets/pandora.png";
import "./Encyclopedie.scss";

// --- Exemple de données (tu peux les déplacer dans data.js si tu veux) ---
const personnages = [
  { id: 1, name: "Nox", image: "/images/nox.png" },
  { id: 2, name: "Yugo", image: "/images/yugo.png" },
  { id: 3, name: "Amalia", image: "/images/amalia.png" },
];

function Encyclopedie() {
  const [search, setSearch] = useState("");

  const filtered = personnages.filter((perso) =>
    perso.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="encyclopedie">
      <h1>Amakna</h1>
      <h2>Découvrez les mystères du monde et de ses héros</h2>

      <img className="pandora" src={pandora} alt="pandora" />

      {/* --- BARRE DE RECHERCHE --- */}
      <input
        type="text"
        className="search-bar"
        placeholder="Rechercher un personnage..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cards-container">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
          </div>
        ))}

        {filtered.length === 0 && <p>Aucun résultat</p>}
      </div>

      <Buttons />
    </div>
  );
}

export default Encyclopedie;

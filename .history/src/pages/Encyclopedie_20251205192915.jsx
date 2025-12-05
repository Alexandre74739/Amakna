import { useState } from "react";
import Buttons from "../components/Buttons";
import pandora from "../assets/pandora.png";
import "./Encyclopedie.scss";

// --- Exemple de données avec histoires ---
const personnages = [
  { 
    id: 1, 
    name: "Nox", 
    image: pandora,
    story: "Noximilien l’Horloger, obsédé par le Wakfu, cherche désespérément à remonter le temps pour revoir sa famille." 
  },
  
];

function Encyclopedie() {
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState(null); // id du personnage dont l’histoire est ouverte

  const filtered = personnages.filter((perso) =>
    perso.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="encyclopedie">
      <h1>Amakna</h1>
      <h2>Découvrez les mystères du monde et de ses héros</h2>

      <img className="pandora" src={pandora} alt="pandora" />

      {/* --- Barre de recherche --- */}
      <input
        type="text"
        className="search-bar"
        placeholder="Rechercher un personnage..."
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* --- Cards + histoires associées --- */}
      <div className="cards-container">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="perso-img"
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            />

            {/* histoire sous l'image */}
            {openId === item.id && (
              <div className="story-box">
                <p>{item.story}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Buttons />
    </div>
  );
}

export default Encyclopedie;

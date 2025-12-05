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
  { 
    id: 2, 
    name: "Yugo", 
    image: pandora,
    story: "Yugo est le dernier représentant des Eliatropes. Maître du Wakfu, il peut ouvrir des portails et manipuler l’énergie." 
  },
  { 
    id: 3, 
    name: "Amalia", 
    image: pandora,
    story: "Princesse Sadida, Amalia protège la nature et ses alliés grâce à sa magie végétale." 
  },
  { 
    id: 1, 
    name: "Nox", 
    image: pandora,
    story: "Noximilien l’Horloger, obsédé par le Wakfu, cherche désespérément à remonter le temps pour revoir sa famille." 
  },
  { 
    id: 5, 
    name: "Yugo", 
    image: pandora,
    story: "Yugo est le dernier représentant des Eliatropes. Maître du Wakfu, il peut ouvrir des portails et manipuler l’énergie." 
  },
  { 
    id: 6, 
    name: "Amalia", 
    image: pandora,
    story: "Princesse Sadida, Amalia protège la nature et ses alliés grâce à sa magie végétale." 
  },
  { 
    id: 7, 
    name: "Nox", 
    image: pandora,
    story: "Noximilien l’Horloger, obsédé par le Wakfu, cherche désespérément à remonter le temps pour revoir sa famille." 
  },
  { 
    id: 8, 
    name: "Yugo", 
    image: pandora,
    story: "Yugo est le dernier représentant des Eliatropes. Maître du Wakfu, il peut ouvrir des portails et manipuler l’énergie." 
  },
  { 
    id: 9, 
    name: "Amalia", 
    image: pandora,
    story: "Princesse Sadida, Amalia protège la nature et ses alliés grâce à sa magie végétale." 
  },
];

function Encyclopedie() {
  const [search, setSearch] = useState("");
  const [selectedStory, setSelectedStory] = useState(null); // histoire affichée

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

      {/* --- FILTRE ET AFFICHAGE DES IMAGES SEULEMENT --- */}
      <div className="cards-container">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            <img 
              src={item.image} 
              alt={item.name} 
              onClick={() => setSelectedStory(item.story)} 
              className="perso-img"
            />
          </div>
        ))}

        {filtered.length === 0 && <p>Aucun résultat</p>}
      </div>

      {/* --- Histoire affichée lorsque je clique sur un personnage --- */}
      {selectedStory && (
        <div className="story-box">
          <p>{selectedStory}</p>
          <button onClick={() => setSelectedStory(null)}>Fermer</button>
        </div>
      )}

      <Buttons />
    </div>
  );
}

export default Encyclopedie;

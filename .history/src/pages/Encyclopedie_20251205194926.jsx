import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../components/Buttons";
import pandora from "../assets/pandora.png";
import "./Encyclopedie.scss";

const personnages = [
  { id: 1, name: "Bolgrot", image: "./assets/persos/bolgrot.png" },
  { id: 2, name: "Djaul", image: "/images/persos/djaul.png" },
  { id: 3, name: "Goultard", image: "/images/persos/goultard.png" },
  { id: 4, name: "Harebourg", image: "/images/persos/harebourg.png" },
  { id: 5, name: "Joris", image: "/images/persos/joris.png" },
  { id: 6, name: "Meriana", image: "/images/persos/meriana.png" },
  { id: 7, name: "Ottomai", image: "/images/persos/ottomai.png" }
];

function Encyclopedie() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = personnages.filter((perso) =>
    perso.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="encyclopedie">
      <h1>Amakna</h1>
      <h2>Découvrez les mystères du monde et de ses héros</h2>

      <img className="pandora" src={pandora} alt="pandora" />

      <input
        type="text"
        className="search-bar"
        placeholder="Rechercher un personnage..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cards-container">
        {filtered.map((item) => (
          <div className="card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              onClick={() => navigate(`/personnage/${item.id}`)}
            />
          </div>
        ))}
      </div>

      <Buttons />
    </div>
  );
}

export default Encyclopedie;

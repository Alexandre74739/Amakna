import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "../components/Buttons";
import pandora from "../assets/pandora.png";
import "./Encyclopedie.scss";

const personnages = [
  { id: 1, name: "Bolgrot", image: "/images/nox.png", story: "Histoire complète de Nox..." },
  { id: 2, name: "Djaul", image: "/images/yugo.png", story: "Histoire complète de Yugo..." },
  { id: 3, name: "Goultard", image: "/images/amalia.png", story: "Histoire complète d'Amalia..." },
  { id: 4, name: "Harebourg", image: "/images/tristepin.png", story: "Histoire complète de Tristepin..." },
  { id: 5, name: "Joris", image: "/images/evangelyne.png", story: "Histoire complète d'Evangelyne..." },
  { id: 6, name: "Meriana", image: "/images/ruel.png", story: "Histoire complète de Ruel..." },
   { id: 7, name: "Ottomai", image: "/images/persos/ottomai.png", story: "Histoire complète d'Ottomai..." }
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

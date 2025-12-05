import Buttons from "../components/Buttons";
import pandora from "../assets/pandora.png";
import './Encyclopedie.scss';

function Encyclopedie() {
  const personnages = [
  { id: 1, name: "Nox", image: "/images/nox.png" },
  { id: 2, name: "Yugo", image: "/images/yugo.png" },
  { id: 3, name: "Amalia", image: "/images/amalia.png" },
];
  return (
    <div className="encyclopedie">
      <h1>Amakna</h1>
      <h2>Découvrez les mystères du monde et de ses héros</h2>
      <img className="pandora" src={pandora} alt="pandora" />
      <Buttons />
    </div>
  );
}

export default Encyclopedie;

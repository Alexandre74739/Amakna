import Buttons from "../components/Buttons";
import pandora from "../assets/pandora.png";
import './Encyclopedie.scss';

function Encyclopedie() {
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

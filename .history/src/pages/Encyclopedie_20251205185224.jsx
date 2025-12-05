import pinpin from '../assets/pinpin.png';
import Buttons from "../components/Buttons";
import pandora from "../assets/pandora.png"
import './Encyclopedie.scss';

function Encyclopedie() {
  return (
    <div>
      <h1>Amakna</h1>
      <p>Découvrez les mystères du monde et de ses héros</p>
      <img src={pandora} alt="pandora" />
      <Buttons />
    </div>
  );
}

export default Encyclopedie;
import pinpin from '../assets/pinpin.png';
import Buttons from "../components/Buttons";
import './Map.scss';

function Map() {
  return (
    <div>
      <h1>Amakna</h1>
      <h2>Plongez dans le monde du Krosmoz</h2>
      <img src={pinpin} alt="Pinpin" class="pinpin" />
      <Buttons />
    </div>
  );
}

export default Map;
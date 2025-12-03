import pinpin from '../assets/pinpin.png';
import './Map.scss';

function Map() {
  return (
    <div>
      <h1>Amakna</h1>
      <h2>Plongez dans le monde du Krosmoz</h2>
      <img src={pinpin} alt="Pinpin" class="pinpin" />
    </div>
  );
}

export default Map;
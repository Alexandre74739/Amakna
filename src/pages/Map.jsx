import pinpin from '../assets/pinpin.png';
import Buttons from "../components/Buttons";
import ImagesAccordeon from "../components/ImagesAccordeon";
import './Map.scss';

function Map() {
  return (
    <div className='map'>
      <h1>Amakna</h1>
      <h2>Plongez dans le monde du Krosmoz</h2>
      <img src={pinpin} alt="Pinpin" className="pinpin" />
      <Buttons />
      <ImagesAccordeon />
    </div>
  );
}

export default Map;
import Buttons from "../components/Buttons";
import nox from "../assets/nox.png";
import './Jeux.scss';

function Jeux() {
  return (
    <div>
      <h1>Amakna</h1>
      <h2>Le temps des jeux est compté</h2>
      <img className="nox" src={nox} alt="pandora" />
      <Buttons />
    </div>
  );
}

export default Jeux;
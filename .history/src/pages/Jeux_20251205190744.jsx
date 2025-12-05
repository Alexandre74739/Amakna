import Buttons from "../components/Buttons";
import nox from "../assets/nox.png";
import './Jeux.scss';

function Jeux() {
  return (
    <div className>
      <h1>Amakna</h1>
      <h2>Le temps des jeux est compté</h2>
      <img className="nox" src={nox} alt="nox" />
      <Buttons />
    </div>
  );
}

export default Jeux;
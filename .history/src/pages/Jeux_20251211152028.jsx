import Buttons from "../components/Buttons";
import nox from "../assets/nox.png";
import './Jeux.scss';
import games from "../data/games";
import GameCard from "../components/GameCard";

function Jeux() {
  return (
    <div className="jeux">
      <h1>Amakna</h1>
      <h2>Le temps des jeux est compté</h2>
      <img className="nox" src={nox} alt="nox" />

      <Buttons />

      <div className="games-container">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Jeux;
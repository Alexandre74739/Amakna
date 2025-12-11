import Buttons from "../components/Buttons";
import nox from "../assets/nox.png";
import './Jeux.scss';
import games from "../data/games";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <Link to={game.route}>
      <div className="game-card">
        <h3>{game.title}</h3>
        <p>{game.description}</p>
      </div>
    </Link>
  );
}


export default Jeux;
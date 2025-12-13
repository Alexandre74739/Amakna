import { Link } from "react-router-dom";
import './GameCard.scss';

function GameCard({ game }) {
  return (
    <Link to={`/jeux/${game.id}`} className="game-card">
      <h3>{game.title}</h3>
      <p>{game.description}</p>
      <button>Commencer l’aventure</button>
    </Link>
  );
}

export default GameCard;

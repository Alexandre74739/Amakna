import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <Link to={`/jeux/${game.id}`} className="game-card">
      <h2>{game.title}</h2>
      <p>{game.description}</p>
    </Link>
  );
}

export default GameCard;

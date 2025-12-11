import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <Link to={`/jeux/${game.id}`} className="game-card">
      <h3>{game.title}</h3>
      <p>{game.description}</p>
    </Link>
  );
}

export default GameCard;

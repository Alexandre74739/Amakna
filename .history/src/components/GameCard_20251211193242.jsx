import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <Link to={game.route} className="game-card">
      <h2>{game.title}</h2>
      <p>{game.description}</p>
    </Link>
  );
}

export default GameCard;

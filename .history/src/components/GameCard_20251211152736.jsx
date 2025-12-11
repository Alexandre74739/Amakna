import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <Link to={game.route} className="game-card">
      <h3>{game.title}</h3>
      <p>{}game.des</p>
    </Link>
  );
}

export default GameCard;

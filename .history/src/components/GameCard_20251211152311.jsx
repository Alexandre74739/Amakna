import { Link } from "react-router-dom";

function GameCard({ game }) {
  return (
    <Link to={game.route} className="game-card">
      <img src={game.image} alt={game.title} />
      <h3>{game.title}</h3>
    </Link>
  );
}

export default GameCard;

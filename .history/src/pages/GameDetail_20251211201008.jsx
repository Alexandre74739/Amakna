import { useParams } from "react-router-dom";
import games from "../data/games";

// IMPORTS DES JEUX
import Memory from "../games/Memory";
import BoufLeBouftou from "../games/BoufLeBouftou";
import SpaceNecrome from "../games/SpaceNecrome";

const gameComponents = {
  "memory": Memory,
  "bouf-le-bouftou": BoufLeBouftou,
  "space-necrome": SpaceNecrome
};

function GameDetail() {
  const { id } = useParams();

  const game = games.find((g) => g.id === id);
  const GameComponent = gameComponents[id];

  if (!game || !GameComponent) {
    return <h2>Jeu introuvable</h2>;
  }

  return (
    <div className="game-detail">
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <GameComponent />
    </div>
  );
}

export default GameDetail;

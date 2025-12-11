import { useParams } from "react-router-dom";
import games from "../data/games";
import Memory from "../games/Memory";
import Pacman from "../games/Pacman";
import SpaceInvader from "../games/SpaceInvader";

function GameDetail() {
    const { gameId } = useParams();
    const game = games.find(g => g.id === gameId);

    if (!game) return <h2>Jeu non trouvé !</h2>;

    let GameComponent;
    switch (game.id) {
        case "memory":
            GameComponent = Memory;
            break;
        case "pacman":
            GameComponent = Pacman;
            break;
        case "space-invader":
            GameComponent = SpaceInvader;
            break;
        default:
            return <h2>Jeu non disponible</h2>;
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

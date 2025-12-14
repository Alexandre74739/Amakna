import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./BoufLeBouftou.scss";
import "../_variables.scss";

const GRID_SIZE = 8;
const INITIAL_BOUFTOUS = [
  { x: 7, y: 7 },
  { x: 0, y: 7 },
  { x: 7, y: 0 },
  { x: 3, y: 3 },
];
const FIXED_OBSTACLES = [
  { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 5, y: 1 }, { x: 6, y: 1 },
  { x: 1, y: 2 }, { x: 5, y: 2 }, { x: 6, y: 2 },
  { x: 0, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }, { x: 7, y: 3 },
  { x: 0, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 }, { x: 5, y: 4 },
  { x: 5, y: 5 }, { x: 6, y: 5 },
  { x: 1, y: 6 }, { x: 2, y: 6 }, { x: 5, y: 6 }, { x: 6, y: 6 },
];


function BoufLeBouftou() {
  const navigate = useNavigate();

  const [player, setPlayer] = useState({ x: 0, y: 0 });
  const [bouftous, setBouftous] = useState(INITIAL_BOUFTOUS);
  const [points, setPoints] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  const playerRef = useRef(player);
  const bouftousRef = useRef(bouftous);
  const pointsRef = useRef(points);
  const gameActiveRef = useRef(true);

  const initializeGame = () => {
    const pts = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        if (
          (x !== 0 || y !== 0) &&
          !INITIAL_BOUFTOUS.some(b => b.x === x && b.y === y) &&
          !FIXED_OBSTACLES.some(o => o.x === x && o.y === y)
        ) {
          pts.push({ x, y });
        }
      }
    }
    setPlayer({ x: 0, y: 0 });
    playerRef.current = { x: 0, y: 0 };
    setBouftous(INITIAL_BOUFTOUS);
    bouftousRef.current = INITIAL_BOUFTOUS;
    setPoints(pts);
    pointsRef.current = pts;
    setScore(0);
    setGameOver(false);
    setWin(false);
    gameActiveRef.current = true;
  };

  const handleKey = (e) => {
    if (!gameActiveRef.current) return;

    let { x, y } = playerRef.current;
    let newX = x;
    let newY = y;

    switch (e.key.toLowerCase()) {
      case "z": newY = y - 1; break;  // haut
      case "s": newY = y + 1; break;  // bas
      case "a": newX = x - 1; break;  // gauche
      case "e": newX = x + 1; break;  // droite
      default: return;
    }

    const hitObstacle = FIXED_OBSTACLES.some(o => o.x === newX && o.y === newY);
    if (newX < 0 || newX >= GRID_SIZE || newY < 0 || newY >= GRID_SIZE || hitObstacle) {
      return;
    }

    setPlayer({ x: newX, y: newY });
    playerRef.current = { x: newX, y: newY };
    collectPoint(newX, newY);

    if (bouftousRef.current.some(b => b.x === newX && b.y === newY)) {
      setGameOver(true);
      gameActiveRef.current = false;
    }
  };

  const collectPoint = (x, y) => {
    const remaining = pointsRef.current.filter(p => !(p.x === x && p.y === y));
    if (remaining.length !== pointsRef.current.length) setScore(prev => prev + 10);
    setPoints(remaining);
    pointsRef.current = remaining;
    if (remaining.length === 0) {
      setWin(true);
      gameActiveRef.current = false;
    }
  };

  const moveBouftous = () => {
    if (!gameActiveRef.current) return;

    const newBouftous = bouftousRef.current.map(b => {
      const possibleMoves = [
        { dx: 1, dy: 0 },
        { dx: -1, dy: 0 },
        { dx: 0, dy: 1 },
        { dx: 0, dy: -1 },
      ].filter(dir => {
        const newX = b.x + dir.dx;
        const newY = b.y + dir.dy;
        return (
          newX >= 0 && newX < GRID_SIZE &&
          newY >= 0 && newY < GRID_SIZE &&
          !FIXED_OBSTACLES.some(o => o.x === newX && o.y === newY)
        );
      });

      if (possibleMoves.length === 0) return b;

      const move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
      return { x: b.x + move.dx, y: b.y + move.dy };
    });

    setBouftous(newBouftous);
    bouftousRef.current = newBouftous;

    if (newBouftous.some(b => b.x === playerRef.current.x && b.y === playerRef.current.y)) {
      setGameOver(true);
      gameActiveRef.current = false;
    }
  };

  useEffect(() => {
    initializeGame();
    window.addEventListener("keydown", handleKey);

    const interval = setInterval(moveBouftous, 1000);

    return () => {
      window.removeEventListener("keydown", handleKey);
      clearInterval(interval);
    };
  }, []);

  const renderGrid = () => {
    const grid = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        let className = "cell";
        if (player.x === x && player.y === y) className += " player";
        else if (bouftous.some(b => b.x === x && b.y === y)) className += " bouftou";
        else if (points.some(p => p.x === x && p.y === y)) className += " dot";
        else if (FIXED_OBSTACLES.some(o => o.x === x && o.y === y)) className += " obstacle";

        grid.push(<div key={`${x}-${y}`} className={className} />);
      }
    }
    return grid;
  };

  return (
    <div className="bouf-le-bouftou">
      <div className="buttons">
        <button className="btn1" onClick={initializeGame}>Recommencer</button>
        <button className="btn2" onClick={() => navigate("/jeux")}>Retour aux jeux</button>
      </div>

      <div className="score">Score: {score}</div>
      <div className="grid">{renderGrid()}</div>

      {(gameOver || win) && (
        <div className={`game-status ${win ? "win" : "game-over"}`}>
          {gameOver ? "PERDU !" : "GAGNÉ !"}
        </div>
      )}
    </div>
  );
}

export default BoufLeBouftou;
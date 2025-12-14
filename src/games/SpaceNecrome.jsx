import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SpaceNecrome.scss";

// Constantes du jeu (laissées inchangées)
const canvasWidth = 700;
const canvasHeight = 500;
const playerWidth = 50;
const playerHeight = 20;
const playerSpeed = 20;
const bulletSpeed = 5;
const enemyRows = 4;
const enemyCols = 10;
const enemyWidth = 40;
const enemyHeight = 25;
const enemySpacing = 15;
const baseEnemyMoveSpeed = 1.0;
const enemyDescendStep = 5;
const enemyShootProbability = 0.002;

const SpaceNecrome = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const playerXRef = useRef(canvasWidth / 2 - playerWidth / 2);
  const [bullet, setBullet] = useState(null);
  const [enemies, setEnemies] = useState([]);
  const [enemyDirection, setEnemyDirection] = useState(1);
  const [enemyBullets, setEnemyBullets] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  // Fonction d'initialisation/réinitialisation du jeu
  const initializeDeck = useCallback(() => {
    playerXRef.current = canvasWidth / 2 - playerWidth / 2;
    setBullet(null);
    setEnemyBullets([]);
    setScore(0);
    setGameOver(false);
    setGameWon(false);

    const initialEnemies = [];
    for (let row = 0; row < enemyRows; row++) {
      for (let col = 0; col < enemyCols; col++) {
        initialEnemies.push({
          x: col * (enemyWidth + enemySpacing) + 50,
          y: row * (enemyHeight + enemySpacing) + 50,
          alive: true,
          id: row * enemyCols + col,
          glow: Math.random() * 20 + 10,
        });
      }
    }
    setEnemies(initialEnemies);
    setEnemyDirection(1);
  }, []);

  useEffect(() => {
    initializeDeck();
  }, [initializeDeck]);

  // Gestion clavier pour déplacement + tir Enter/Espace
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver || gameWon) return;

      // Déplacement
      if (e.key === "ArrowLeft") {
        playerXRef.current = Math.max(0, playerXRef.current - playerSpeed);
      }
      if (e.key === "ArrowRight") {
        playerXRef.current = Math.min(canvasWidth - playerWidth, playerXRef.current + playerSpeed);
      }

      // Tir
      if ((e.key === "Enter" || e.key === " ") && !bullet) {
        e.preventDefault();
        setBullet({ x: playerXRef.current + playerWidth / 2 - 2, y: canvasHeight - playerHeight - 10 });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [bullet, gameOver, gameWon]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const gameLoop = () => {
      if (gameOver || gameWon) return;

      let currentEnemies = enemies;
      let currentEnemyBullets = enemyBullets;
      let currentBullet = bullet;
      let currentScore = score;
      let currentEnemyDirection = enemyDirection;
      let newEnemyDirection = currentEnemyDirection;
      let newEnemyBullets = [...currentEnemyBullets];

      const aliveEnemiesCount = currentEnemies.filter(e => e.alive).length;
      const totalEnemies = enemyRows * enemyCols;
      const enemyMoveSpeed = baseEnemyMoveSpeed * (1 + (totalEnemies - aliveEnemiesCount) / totalEnemies) * 1.5;

      // Laser joueur
      if (currentBullet) {
        currentBullet = { ...currentBullet, y: currentBullet.y - bulletSpeed };
        if (currentBullet.y < 0) currentBullet = null;
        setBullet(currentBullet);
      }

      // Déplacement aliens
      let moveDown = false;
      let shouldChangeDirection = false;
      currentEnemies.forEach((enemy) => {
        if (!enemy.alive) return;
        const nextX = enemy.x + currentEnemyDirection * enemyMoveSpeed;
        if (nextX <= 0 || nextX + enemyWidth >= canvasWidth) {
          shouldChangeDirection = true;
        }
      });

      if (shouldChangeDirection) {
        moveDown = true;
        newEnemyDirection = -currentEnemyDirection;
      }
      setEnemyDirection(newEnemyDirection);

      let nextEnemies = currentEnemies.map((enemy) => {
        if (!enemy.alive) return enemy;
        let nextX = enemy.x + newEnemyDirection * enemyMoveSpeed;
        let nextY = enemy.y;
        if (moveDown) nextY += enemyDescendStep;
        return { ...enemy, x: nextX, y: nextY, glow: Math.random() * 25 + 10 };
      });

      // Aliens tirent
      nextEnemies.filter(e => e.alive).forEach((enemy) => {
        if (Math.random() < enemyShootProbability) {
          newEnemyBullets.push({ x: enemy.x + enemyWidth / 2 - 2, y: enemy.y + enemyHeight });
        }
      });

      // Déplacement bullets ennemis & Collision avec joueur
      let playerHit = false;
      const playerTop = canvasHeight - playerHeight - 10;
      newEnemyBullets = newEnemyBullets
        .map((b) => ({ ...b, y: b.y + bulletSpeed }))
        .filter((b) => {
          const bulletHitPlayer = (
            b.x < playerXRef.current + playerWidth &&
            b.x + 4 > playerXRef.current &&
            b.y < playerTop + playerHeight &&
            b.y + 12 > playerTop
          );
          if (bulletHitPlayer) playerHit = true;
          return b.y < canvasHeight && !bulletHitPlayer;
        });
      setEnemyBullets(newEnemyBullets);
      if (playerHit) return setGameOver(true);

      // Collision laser joueur / aliens (avec mise à jour du score)
      if (currentBullet) {
        let hit = false;
        nextEnemies = nextEnemies.map((enemy) => {
          if (!enemy.alive) return enemy;
          const bulletHit = (
            currentBullet.x < enemy.x + enemyWidth &&
            currentBullet.x + 4 > enemy.x &&
            currentBullet.y < enemy.y + enemyHeight &&
            currentBullet.y + 12 > enemy.y
          );
          if (bulletHit) {
            hit = true;
            currentScore += 10; // Incrémente le score local
            return { ...enemy, alive: false };
          }
          return enemy;
        });
        if (hit) {
          setBullet(null);
          setScore(currentScore); // Mise à jour du score global
        }
      }
      setEnemies(nextEnemies);

      // Vérifier game over si aliens atteignent le joueur
      const newAliveEnemiesCount = nextEnemies.filter(e => e.alive).length;
      const playerLine = canvasHeight - playerHeight - 10;
      nextEnemies.forEach((enemy) => {
        if (enemy.alive && enemy.y + enemyHeight >= playerLine) return setGameOver(true);
      });

      // Vérifier victoire
      if (newAliveEnemiesCount === 0 && !gameWon) return setGameWon(true);

      // 1. Fond
      ctx.fillStyle = "#1E1E1E";
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);

      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      // 2. Joueur
      ctx.fillStyle = "#00D0FF";
      ctx.shadowColor = "#00D0FF";
      ctx.shadowBlur = 25;
      ctx.fillRect(playerXRef.current, canvasHeight - playerHeight - 10, playerWidth, playerHeight);

      // 3. Laser joueur
      if (currentBullet) {
        ctx.fillStyle = "#FF00FF";
        ctx.shadowColor = "#FF00FF";
        ctx.shadowBlur = 20;
        ctx.fillRect(currentBullet.x, currentBullet.y, 4, 12);
      }

      // 4. Aliens
      nextEnemies.forEach((enemy) => {
        if (!enemy.alive) return;
        ctx.fillStyle = "#8A2BE2";
        ctx.shadowColor = "#8A2BE2";
        ctx.shadowBlur = enemy.glow;
        ctx.fillRect(enemy.x, enemy.y, enemyWidth, enemyHeight);
      });

      // 5. Bullets ennemis
      newEnemyBullets.forEach((b) => {
        ctx.fillStyle = "#FF0000";
        ctx.shadowColor = "#FF0000";
        ctx.shadowBlur = 15;
        ctx.fillRect(b.x, b.y, 4, 12);
      });

      // 6. Score
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";
      ctx.fillStyle = "#00D0FF";
      ctx.font = "20px 'Poppins', sans-serif";
      ctx.fillText(`Score: ${currentScore}`, 10, 30);

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    animationFrameId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [bullet, enemies, enemyDirection, enemyBullets, score, gameOver, gameWon]);

  return (
    <div className="space-necrome-container">
      <div className="buttons">
        <button className="btn1" onClick={initializeDeck}>Recommencer</button>
        <button className="btn2" onClick={() => navigate("/jeux")}>Retour aux jeux</button>
      </div>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        className="game-canvas" // Utilisation de la classe SCSS
      />
    </div>
  );
};

export default SpaceNecrome;
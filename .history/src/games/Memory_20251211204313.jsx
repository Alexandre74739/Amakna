import React, { useState, useEffect } from "react";
import './Memory.scss';
import bolgrot from "../assets/bolgrot.png";
import djaul from "../assets/djaul.png";
import goultard from "../assets/goultard.png";
import harebourg from "../assets/harebourg.png";
import joris from "../assets/joris.png";
import meriana from "../assets/meriana.png";

function Memory() {
  const images = [bolgrot, djaul, goultard, harebourg, joris, meriana];

  // On double les cartes pour avoir les paires et on mélange
  const [cards, setCards] = useState(() => {
    const doubled = [...images, ...images].map((img, index) => ({
      id: index,
      img,
      flipped: false,
      matched: false
    }));
    return shuffle(doubled);
  });

  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const handleCardClick = (card) => {
    if (disabled || card.flipped || card.matched) return;

    const updatedCards = cards.map(c =>
      c.id === card.id ? { ...c, flipped: true } : c
    );
    setCards(updatedCards);

    if (!firstCard) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
      setDisabled(true);
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.img === secondCard.img) {
        setCards(prev =>
          prev.map(c =>
            c.img === firstCard.img ? { ...c, matched: true } : c
          )
        );
        resetTurn();
      } else {
        setTimeout(() => {
          setCards(prev =>
            prev.map(c =>
              c.id === firstCard.id || c.id === secondCard.id
                ? { ...c, flipped: false }
                : c
            )
          );
          resetTurn();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  const resetGame = () => {
    const doubled = [...images, ...images].map((img, index) => ({
      id: index,
      img,
      flipped: false,
      matched: false
    }));
    setCards(shuffle(doubled));
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  return (
    <div className="memory-game">
      <h2>Memory Krosmoz</h2>
      <button className="reset-btn" onClick={resetGame}>Rejouer</button>
      <div className="board">
        {cards.map(card => (
          <div
            key={card.id}
            className={`card ${card.flipped || card.matched ? "flipped" : ""}`}
            onClick={() => handleCardClick(card)}
          >
            <div className="card-inner">
              <div className="front">❓</div>
              <div className="back">
                <img src={card.img} alt="memory card" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Memory;

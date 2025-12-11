// src/games/Memory.jsx
import { useState, useEffect } from "react";
import bolgrot from "../assets/memory/bolgrot.png";
import djaul from "../assets/memory/djaul.png";
import goultard from "../assets/goultard.png";
import harebourg from "../assets/harebourg.png";
import joris from "../assets/joris.png";
import meriana from "../assets/meriana.png";
import './Memory.scss';

function Memory() {
  const images = [bolgrot, djaul, goultard, harebourg, joris, meriana];
  
  // Crée un deck de 12 cartes (chaque image en double)
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  useEffect(() => {
    const deck = [...images, ...images]
      .map((img, index) => ({ id: index + "-" + img, img }))
      .sort(() => Math.random() - 0.5); // mélange aléatoire
    setCards(deck);
  }, []);

  const handleFlip = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].img === cards[second].img) {
        setMatched([...matched, first, second]);
        setTimeout(() => setFlipped([]), 800);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="memory-game">
      <h1>Memory Krosmoz</h1>
      <div className="cards-container">
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(index);
          return (
            <div
              key={card.id}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={() => handleFlip(index)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img src={card.img} alt="card" />
                </div>
                <div className="card-back"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Memory;

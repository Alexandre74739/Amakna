import { useEffect, useState } from "react";
import "./Memory.scss";
import bolgrot from "../assets/memory/bolgrot.png";
import djaul from "../assets/memory/djaul.png";
import goultard from "../assets/memory/goultard.png";
import harebourg from "../assets/memory/harebourg.png";
import joris from "../assets/memory/joris.png";
import meriana from "../assets/memory/meriana.png";


function Memory() {
  // Cartes du jeu (tout est inclus ici)
  const cardsData = [
  { id: 1, icon: bolgrot },
  { id: 2, icon: djaul },
  { id: 3, icon: goultard },
  { id: 4, icon: harebourg },
  { id: 5, icon: joris },
  { id: 6, icon: meriana }
];


  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  // Mélange des cartes au lancement
  useEffect(() => {
    const shuffled = [...cardsData, ...cardsData]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, uniqueId: index }));

    setCards(shuffled);
  }, []);

  // Clique sur une carte
  const handleFlip = (card) => {
    if (
      flipped.length === 2 ||
      flipped.includes(card.uniqueId) ||
      matched.includes(card.uniqueId)
    ) {
      return;
    }

    const newFlipped = [...flipped, card.uniqueId];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [f, s] = newFlipped;
      const firstCard = cards.find((c) => c.uniqueId === f);
      const secondCard = cards.find((c) => c.uniqueId === s);

      if (firstCard.id === secondCard.id) {
        setMatched((prev) => [...prev, f, s]);
      }

      setTimeout(() => {
        setFlipped([]);
      }, 800);
    }
  };

  return (
    <div className="memory-game">
      <h2>Memory</h2>

      <div className="grid">
        {cards.map((card) => {
          const isFlipped =
            flipped.includes(card.uniqueId) || matched.includes(card.uniqueId);

          return (
            <div
              key={card.uniqueId}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={() => handleFlip(card)}
            >
              <div className="inner">
                <div className="front">❓</div>
                <div className="back">{card.icon}</div>
              </div>
            </div>
          );
        })}
      </div>

      {matched.length === cards.length && (
        <h3 className="win-message">🎉 Bravo ! Tu as gagné !</h3>
      )}
    </div>
  );
}

export default Memory;

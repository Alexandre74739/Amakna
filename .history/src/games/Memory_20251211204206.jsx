import { useState } from "react";
import bolgrot from "../assets/bolgrot.png";
import djaul from "../assets/djaul.png";
import goultard from "../assets/goultard.png";
import harebourg from "../assets/harebourg.png";
import joris from "../assets/joris.png";
import meriana from "../assets/meriana.png";
import "./Memory.scss";

const images = [bolgrot, djaul, goultard, harebourg, joris, meriana];

function Memory() {
  const [cards, setCards] = useState(
    [...images, ...images]
      .map((img, index) => ({ id: index, img, flipped: false }))
      .sort(() => Math.random() - 0.5)
  );

  const flipCard = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, flipped: !card.flipped } : card
      )
    );
  };

  return (
    <div className="memory-game">
      <h2>Memory du Krosmoz</h2>
      <div className="board">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.flipped ? "flipped" : ""}`}
            onClick={() => flipCard(card.id)}
          >
            <div className="card-inner">
              <div className="front">❓</div>
              <div className="back">
                <img src={card.img} alt="Memory" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Memory;

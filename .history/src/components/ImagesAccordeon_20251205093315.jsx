import { useState } from "react";
import Amakna from '../assets/Amakna.png';
// ... autres imports (Bonta, Brakmar, Sufokia)
import "./ImagesAccordeon.scss";

function ImagesAccordeon() {
  const [openIndex, setOpenIndex] = useState(null);

  const images = [
    // ... vos données
  ];

  const togglePanel = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordeon-container">
      <h2>Découvrez l'univers du Krosmoz</h2>
      {images.map((item, index) => (
        <div
          key={index}
          className="accordeon-item"
          onClick={() => togglePanel(index)}
        >
          {/* L'image sert de panneau visuel de base et de bouton */}
          <img src={item.src} alt={`illustration-${index}`} />

          {/* LA NOUVELLE DIV D'ENGOBLEMENT conditionnelle */}
          {openIndex === index && (
            <div className="accordeon-content">
              {/* Le texte à afficher */}
              <p>{item.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ImagesAccordeon;
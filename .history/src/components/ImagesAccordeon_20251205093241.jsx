import { useState } from "react";
import Amakna from '../assets/Amakna.png';
// ... autres imports ...
import "./ImagesAccordeon.scss";

function ImagesAccordeon() {
  const [openIndex, setOpenIndex] = useState(null);

  const images = [
    // ... votre tableau d'images et de textes ...
    {
      src: Amakna,
      text: "..."
    },
    // ... etc.
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
          {/* Nouveau: Le panneau de contenu conditionnel (englobant image ET texte) */}
          {openIndex === index && (
            <div className="content-wrapper"> 
              <img src={item.src} alt={`illustration-${index}`} />
              <div className="text-panel">
                <p>{item.text}</p>
              </div>
            </div>
          )}
          
          {/* Nouveau: L'image par défaut (non cliquée) reste visible ici, sinon rien n'apparaît */}
          {openIndex !== index && (
            <img src={item.src} alt={`illustration-${index}`} className="default-image" />
          )}

        </div>
      ))}
    </div>
  );
}

export default ImagesAccordeon;
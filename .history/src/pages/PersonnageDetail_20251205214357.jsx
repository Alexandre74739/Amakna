import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import pandora from "../assets/pandora.png";
import "./PersonnageDetail.scss";

function PersonnageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [personnage, setPersonnage] = useState(null);

  // --- Récupération des données depuis l'API ---
  useEffect(() => {
    fetch("http://localhost:5000/api/personnages")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setPersonnage(found);
      })
      .catch((err) => console.error("Erreur API :", err));
  }, [id]);

  if (!personnage) return <p>Chargement ou personnage introuvable...</p>;

  return (
    <div className="personnage-detail">
      {/* Breadcrumb / Retour */}
      <button className="back-button" onClick={() => navigate("/encyclopedie")}>
        ← Retour à l'Encyclopédie
      </button>

      {/* Contenu principal */}
      <div className="detail-content">
        {/* On concatène l'URL complète pour accéder aux images depuis le serveur */}
        <img
          src={`http://localhost:5000${personnage.image}`}
          alt={personnage.name}
          className="detail-img"
        />
        <h1>{personnage.name}</h1>
        {personnage.story && <p className="description">{personnage.story}</p>}
      </div>

      <img className="pandora" src={pandora} alt="pandora" />
    </div>
  );
}

export default PersonnageDetail;

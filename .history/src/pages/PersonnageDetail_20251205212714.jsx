import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PersonnageDetail.scss";

function PersonnageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [personnage, setPersonnage] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/personnages")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id));
        setPersonnage(found);
      })
      .catch((err) => console.error("Erreur API :", err));
  }, [id]);

  if (!personnage) return <p>Personnage introuvable</p>;

  return (
    <div className="personnage-detail">
      {/* Retour */}
      <button className="back-button" onClick={() => navigate("/encyclopedie")}>
        ← Retour à l'Encyclopédie
      </button>

      {/* Contenu */}
      <div className="detail-content">
        <img
          src={`http://localhost:5000${personnage.image}`}
          alt={personnage.name}
          className="detail-img"
        />
        <h1>{personnage.name}</h1>
        <p className="description">{personnage.story}</p>
      </div>
    </div>
  );
}

export default PersonnageDetail;

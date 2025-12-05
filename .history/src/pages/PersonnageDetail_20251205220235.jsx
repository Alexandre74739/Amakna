import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PersonnageDetail.scss";

function PersonnageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [personnage, setPersonnage] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/personnages/${id}`)
      .then(res => res.json())
      .then(data => setPersonnage(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!personnage) return <p>Chargement...</p>;

  return (
    <div className="personnage-detail">
      <button className="back-button" onClick={() => navigate("/encyclopedie")}>
        ← Retour à l'Encyclopédie
      </button>

      <div className="detail-content">
        <img src={personnage.image} alt={personnage.name} className="detail-img" />
        <h1>{personnage.name}</h1>

        {personnage.story.map((section, index) => (
          <div key={index} className="story-section">
            <h3>{section.title}</h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonnageDetail;

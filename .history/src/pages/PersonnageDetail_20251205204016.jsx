import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import pandora from "../assets/pandora.png";
import "./PersonnageDetail.scss";

function PersonnageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [personnage, setPersonnage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/personnages/${id}`)
      .then(res => res.json())
      .then(data => {
        setPersonnage(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!personnage) return <p>Personnage introuvable</p>;

  return (
    <div className="personnage-detail">
      <button className="back-button" onClick={() => navigate("/encyclopedie")}>
        ← Retour à l'Encyclopédie
      </button>

      <div className="detail-content">
        <img
          src={`http://localhost:5000/images${personnage.image}`}
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

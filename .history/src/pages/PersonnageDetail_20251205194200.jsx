import { useParams, useNavigate } from "react-router-dom";
import pandora from "../assets/pandora.png";
import "./PersonnageDetail.scss";

// Même dataset que dans Encyclopedie
const personnages = [
  { id: 1, name: "", image: "/images/nox.png", story: "Histoire complète de Nox..." },
  { id: 2, name: "Yugo", image: "/images/yugo.png", story: "Histoire complète de Yugo..." },
  { id: 3, name: "Amalia", image: "/images/amalia.png", story: "Histoire complète d'Amalia..." },
  { id: 4, name: "Tristepin", image: "/images/tristepin.png", story: "Histoire complète de Tristepin..." },
  { id: 5, name: "Evangelyne", image: "/images/evangelyne.png", story: "Histoire complète d'Evangelyne..." },
  { id: 6, name: "Ruel", image: "/images/ruel.png", story: "Histoire complète de Ruel..." },
  { id: 7, name: "Adamaï", image: "/images/adamai.png", story: "Histoire complète d'Adamaï..." },
];

function PersonnageDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const personnage = personnages.find((p) => p.id === parseInt(id));

  if (!personnage) return <p>Personnage introuvable</p>;

  return (
    <div className="personnage-detail">
      {/* Breadcrumb / Retour */}
      <button className="back-button" onClick={() => navigate("/encyclopedie")}>
        ← Retour à l'Encyclopédie
      </button>

      {/* Contenu principal */}
      <div className="detail-content">
        <img src={personnage.image} alt={personnage.name} className="detail-img" />
        <h1>{personnage.name}</h1>
        <p className="description">{personnage.story}</p>
      </div>
    </div>
  );
}

export default PersonnageDetail;

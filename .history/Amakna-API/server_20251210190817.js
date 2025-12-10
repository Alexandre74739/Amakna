import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// --- Récupére le chemin du dossier courant (équivalent __dirname) ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

// --- Sert le dossier images en statique ---
app.use("/images", express.static(path.join(__dirname, "images")));

// ---  Données personnages ---
const personnages = [
    { import { useParams, useNavigate } from "react-router-dom";
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
      <h1>{personnage.name}</h1>
      {personnage.story && <p className="description">{personnage.story}</p>}


      {/* Contenu principal */}
      <div className="detail-content">
        {/* On concatène l'URL complète pour accéder aux images depuis le serveur */}
        <img
          src={`http://localhost:5000${personnage.image}`}
          alt={personnage.name}
          className="detail-img"
        />

      </div>

      {/* Breadcrumb / Retour */}
      <button className="back-button" onClick={() => navigate("/encyclopedie")}>
        ← Retour à l'Encyclopédie
      </button>
    </div>
  );
}

export default PersonnageDetail;
},
    { id: 2, name: "Djaul", image: "/images/djaul.png" },
    { id: 3, name: "Goultard", image: "/images/goultard.png" },
    { id: 4, name: "Harebourg", image: "/images/harebourg.png" },
    { id: 5, name: "Joris", image: "/images/joris.png" },
    { id: 6, name: "Meriana", image: "/images/meriana.png" },
    { id: 7, name: "Ottomai", image: "/images/ottomai.png" },
    { id: 8, name: "Pandawa", image: "/images/pandawa.png" },
    { id: 9, name: "Sacrieur", image: "/images/sacrieur.png" },
    { id: 10, name: "Ush", image: "/images/ush.png" }
];

// Route pour la liste complète
app.get("/api/personnages", (req, res) => {
    res.json(personnages); // Renvoyer le tableau complet
});

// Route API pour récupérer les personnages (par ID)
app.get("/api/personnages/:id", (req, res) => {
    const personnage = personnages.find(p => p.id === parseInt(req.params.id));
    if (!personnage) return res.status(404).json({ error: "Personnage introuvable" });
    res.json(personnage);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
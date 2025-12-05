import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());
app.use(express.json());

// Dossier pour les images
app.use("/images", express.static(path.join("images")));

// Exemple de personnages
const personnages = [
  { id: 1, name: "Bolgrot", image: "/images/bolgrot.png", story: "Histoire complète de Bolgrot..." },
  { id: 2, name: "Djaul", image: "/images/djaul.png", story: "Histoire complète de Djaul..." }
];

// Routes API
app.get("/api/personnages", (req, res) => {
  res.json(personnages);
});

app.get("/api/personnages/:id", (req, res) => {
  const perso = personnages.find(p => p.id === parseInt(req.params.id));
  if (!perso) return res.status(404).json({ error: "Personnage non trouvé" });
  res.json(perso);
});

app.listen(5000, () => console.log("API running on http://localhost:5000"));

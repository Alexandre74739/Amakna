import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors());

// Serve le dossier images
app.use("/images", express.static(path.join(__dirname, "images")));

// Exemple de personnages
const personnages = [
  { id: 1, name: "Bolgrot", image: "/bolgrot.png", story: "Histoire complète de Bolgrot..." },
  { id: 2, name: "Djaul", image: "/djaul.png", story: "Histoire complète de Djaul..." },
  // etc.
];

app.get("/api/personnages", (req, res) => {
  res.json(personnages);
});

app.get("/api/personnages/:id", (req, res) => {
  const personnage = personnages.find(p => p.id === parseInt(req.params.id));
  if (personnage) res.json(personnage);
  else res.status(404).json({ error: "Personnage introuvable" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`API en ligne sur http://localhost:${PORT}`));

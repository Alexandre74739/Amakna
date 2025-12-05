import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());

// Gestion du __dirname avec ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve les images
app.use("/images", express.static(path.join(__dirname, "images")));

// Liste des personnages
const personnages = [
  { id: 1, name: "Bolgrot", image: "/bolgrot.png", story: "Histoire complète de Bolgrot..." },
  { id: 2, name: "Djaul", image: "/djaul.png", story: "Histoire complète de Djaul..." },
  { id: 3, name: "Goultard", image: "/goultard.png", story: "Histoire complète de Goultard..." },
  { id: 4, name: "Harebourg", image: "/harebourg.png", story: "Histoire complète de Harebourg..." },
  { id: 5, name: "Joris", image: "/joris.png", story: "Histoire complète de Joris..." },
  { id: 6, name: "Meriana", image: "/meriana.png", story: "Histoire complète de Meriana..." },
  { id: 7, name: "Ottomai", image: "/ottomai.png", story: "Histoire complète d'Ottomai..." }
];

// Route pour récupérer tous les personnages
app.get("/api/personnages", (req, res) => {
  res.json(personnages);
});

// Route pour récupérer un personnage par id
app.get("/api/personnages/:id", (req, res) => {
  const personnage = personnages.find(p => p.id === parseInt(req.params.id));
  if (personnage) res.json(personnage);
  else res.status(404).json({ error: "Personnage introuvable" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`API en ligne sur http://localhost:${PORT}`));

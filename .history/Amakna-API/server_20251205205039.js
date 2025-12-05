import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// --- Fix pour __dirname en ES module ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Servir le dossier images
app.use("/images", express.static(path.join(__dirname, "images")));

// Exemple de données
const personnages = [
  { id: 1, name: "Bolgrot", image: "/images/bolgrot.png" },
  { id: 2, name: "Djaul", image: "/images/djaul.png" },
  { id: 3, name: "Goultard", image: "/images/goultard.png" },
  { id: 4, name: "Harebourg", image: "/images/harebourg.png" },
  { id: 5, name: "Joris", image: "/images/joris.png" },
  { id: 6, name: "Meriana", image: "/images/meriana.png" },
  { id: 7, name: "Ottomai", image: "/images/ottomai.png" }
];

app.get("/api/personnages", (req, res) => {
  res.json(personnages);
});

app.listen(5000, () => console.log("API en ligne sur http://localhost:5000"));

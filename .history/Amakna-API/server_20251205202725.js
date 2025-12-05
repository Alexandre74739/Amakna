import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Exemple : récupération des personnages
app.get("/api/personnages", (req, res) => {
  res.json([
    { id: 1, name: "Bolgrot", image: "/images/bolgrot.png" },
    { id: 2, name: "Djaul", image: "/images/djaul.png" },
    { id: 3, name: "Goultard", image: "/images/goultard.png" },
    // … autres personnages
  ]);
});

// Servir les images statiques
app.use("/images", express.static("images"));

const PORT = 5000;
app.listen(PORT, () => console.log(`API démarrée sur http://localhost:${PORT}`));

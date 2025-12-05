const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Route API pour récupérer les personnages
app.get("/api/personnages", (req, res) => {
  res.json([
    { id: 1, name: "Bolgrot", image: "/images/bolgrot.png" },
    { id: 2, name: "Djaul", image: "/images/djaul.png" },
    { id: 3, name: "Goultard", image: "/images/goultard.png" },
    { id: 4, name: "Harebourg", image: "/images/harebourg.png" },
    { id: 5, name: "Joris", image: "/images/joris.png" },
    { id: 6, name: "Meriana", image: "/images/meriana.png" },
    { id: 7, name: "Ottomai", image: "/images/ottomai.png" }
  ]);
});

// Servir les images statiques
app.use("/images", express.static("images"));

// Démarrer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`API démarrée sur http://localhost:${PORT}`));

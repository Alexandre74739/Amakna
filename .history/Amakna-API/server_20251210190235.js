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
    { id: 1, name: "Bolgrot", image: "/images/bolgrot.png", description: `
        <h2>Histoire</h2>
        <p>Quand Djaul décide de semer la zizanie dans le Monde des Douze, les répercussions sont terribles… 
        Le sulfureux démon parvient en effet à faire pondre Aguabrial un second Dofus...</p>

        <h3>Naissance de Bolgrot</h3>
        <p>Issu d'un Dofus Turquoise pondu par Aguabrial, Bolgrot n'aurait jamais vu le jour sans l'intervention de Djaul...</p>

        <h3>Le terrible dragon</h3>
        <p>En grandissant, Bolgrot devint un terrible dragon, redouté de tous... Jusqu'à Rykke Errel...</p>

        <h3>Post mortem</h3>
        <p>Après sa mort, l'esprit de Bolgrot resta piégé entre deux mondes...</p>
    ` },
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

// --- AJOUTEZ CETTE ROUTE pour la liste complète ---
app.get("/api/personnages", (req, res) => {
    res.json(personnages); // Renvoyer le tableau complet
});
// ----------------------------------------------------

// Route API pour récupérer les personnages (par ID)
app.get("/api/personnages/:id", (req, res) => {
    const personnage = personnages.find(p => p.id === parseInt(req.params.id));
    if (!personnage) return res.status(404).json({ error: "Personnage introuvable" });
    res.json(personnage);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
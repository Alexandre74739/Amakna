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
    {
        id: 1,
        name: "Bolgrot",
        image: "/images/bolgrot.png",
        description: 
        `<h1>Histoire</h1>
        <p>Quand Djaul décide de semer la zizanie dans le Monde des Douze, les répercussions sont terribles… 
        Le sulfureux démon parvient en effet à faire pondre Aguabrial un second Dofus, qui éclot et donne naissance 
        au petit dragon Bolgrot.</p>

        <h2>Naissance de Bolgrot</h2>
        <p>Issu d'un Dofus Turquoise pondu par Aguabrial, Bolgrot n'aurait jamais vu le jour sans l'intervention de Djaul. 
        Celui-ci ensorcelle les eaux de pluie pour faire apparaître une ondine chargée de séduire le dragon...</p>

        <h2>Le terrible dragon</h2>
        <p>En grandissant, Bolgrot devint un dragon redouté de tous jusqu'à sa rencontre avec Rykke Errel, 
        un jeune disciple Iop qui réussit l'impossible en devenant son ami.</p>

        <p>Mais lorsque Rykke présente Helséphine à Bolgrot, la jalousie du dragon déclenche un drame irréversible...</p>

        <h2>Post mortem</h2>
        <p>Après sa mort, l'esprit de Bolgrot resta piégé entre deux mondes, incapable de se réincarner. 
        Il faillit être ramené à la vie à deux reprises, notamment par Bethel Akarna et plus tard par Furye, 
        avant d'être définitivement scellé.</p>`
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
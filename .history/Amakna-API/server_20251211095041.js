import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// Récupére le chemin du dossier courant
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

// Sert le dossier images en statique
app.use("/images", express.static(path.join(__dirname, "images")));

// Données personnages
const personnages = [
    {
        id: 1,
        name: "Bolgrot",
        image: "/images/bolgrot.png",
        description:
            `<h2>Histoire</h2>
            <p>Quand Djaul décide de semer la zizanie dans le Monde des Douze, les répercussions sont terribles… Le sulfureux démon parvient en effet à faire pondre Aguabrial un second Dofus, qui éclot et donne naissance au petit dragon Bolgrot. Son arrivée provoque la rupture de l’harmonie dans le monde, et les ennuis ne font que commencer…
            Bolgrot grandit et devient un dragon surpuissant redouté de tous. Il fait régner la terreur dans tout Amakna, jusqu’à ce qu’un jeune Iop du nom de Rykke Errel ne vienne le défier. Contre toute attente, les deux adversaires deviennent amis ! Un dragon et un Iop, quelle drôle d’équipe… Mais leur belle amitié prend fin quand tous deux tombent amoureux de la belle Helséphine. Fou de jalousie, Bolgrot la tue avant de livrer un combat titanesque dans lequel les deux anciens amis perdent la vie.
            En découvrant son corps, les sages d’Amakna comprennent enfin la source des pouvoirs extraordinaires de Bolgrot : dans les entrailles du dragon se trouvent les six Dofus Primordiaux ! La manière dont ils se sont retrouvés là reste toutefois toujours inexpliquée… </p>

            <h3>Naissance de Bolgrot</h3>
            <p>Issu d'un Dofus Turquoise pondu par le Dragon élémentaire Aguabrial, Bolgrot n'aurait jamais vu le jour sans l'intervention de Djaul. En l'an 10, le Protecteur de Descendre, souhaitant entrer en possession d'un Dofus, ensorcelle les eaux de pluie pour faire apparaître une ravissante ondine, prête à séduire la créature légendaire et, pourquoi pas, obtenir un oeuf magique !
            Et ce fut ce qui arriva, car Aguabrial pondit un oeuf qu'il couva, et berça de son souffle magique. Fort heureusement pour le Monde des Douze, la ruse de Djaul fut découverte par Ereziah Melkewel, un ami du dragon et alchimiste de renom, qui emprisonna l'ondine dans des menottes magiques, les paires de "têtes à clic et à clac".
            Furieux d'avoir été trompé, Aguabrial voulut détruire la preuve de sa naïveté, mais tandis qu'Ereziah le raisonnait, l'oeuf vint à éclore : Bolgrot était né. </p>

            <h3>Le terrible dragon</h3>
            <p>En grandissant, Bolgrot devint un terrible dragon, redouté de tous... Jusqu'à ce qu'un disciple de Iop répondant au nom de Rykke Errel ne vienne le défier. Contre toute attente, le dragon ne déchiqueta pas son adversaire, et préféra s'agenouiller, si bien que les deux devinrent amis.
            Mais lorsque Rykke présenta sa compagne, Helséphine, au grand dragon, celui-ci la tua, pris de colère et de jalousie. Il s'envola alors au loin, pourchassé par Rykke Errel, et cette chasse s'acheva sur un combat fratricide, en l'an 130, dont ni l'un, ni l'autre ne ressortirent vivants.
            On découvrit alors, peu après les événements, l'origine de la rage du dragon : dans son ventre se trouvaient les six Dofus primordiaux. Les sages prirent alors la décision de séparer les oeufs, et de les garder dans le plus grand secret. Mais lorsque Rykke présente Helséphine à Bolgrot, la jalousie du dragon déclenche un drame irréversible...</p>

            <h3>Post mortem</h3>
            <p>Après sa mort l'esprit de Bolgrot resta piégé entre deux mondes, incapable de se réincarner, car il n'avait pas pondu de Dofus.
            Il faillit être ressuscité deux fois. La première fois en l'an 492 par Bethel Akarna qui voulait se servir de son esprit pour créer un dofus dont il se serait servi pour libérer Koutoulou.
            La deuxième fois, ce fut Furye l'une des Gardiennes d'Amakna qui trahit son serment et voulut continuer l'oeuvre de Bethel. Elle fut arrêtée par les autres gardiennes dont sa mère, Mériana, qui dut la tuer. Après sa mort, l'âme de Furye fut emprisonnée en Externam par Bolgrot. </p>`
    },
    { 
        id: 2, 
        name: "Djaul", 
        image: "/images/djaul.png",
        des },
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
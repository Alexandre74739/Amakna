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
        description: `
            <h2>Histoire</h2>
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
            La deuxième fois, ce fut Furye l'une des Gardiennes d'Amakna qui trahit son serment et voulut continuer l'oeuvre de Bethel. Elle fut arrêtée par les autres gardiennes dont sa mère, Mériana, qui dut la tuer. Après sa mort, l'âme de Furye fut emprisonnée en Externam par Bolgrot. </p>
            `
    },
    {
        id: 2,
        name: "Djaul",
        image: "/images/djaul.png",
        description: `
            <h2>Histoire</h2>
            <p>En l'an 20, alors qu'il était retourné dans la Shukrute, Djaul a accueilli Karibd et Silar, deux humains qui ont réussi à créer un portail pour se téléporter dans le plan démoniaque, et les a présentés à Rushu. Les deux humains ont fait preuve d'une telle cruauté devant le roi des Shushus qu'il les a gardés et leur a permis de construire un portail afin que les démons, menés par Djaul et son ami Brumaire, envahissent le Monde des Douze en l'an 24.
            Djaul et Brumaire ont construit une cité du mal à la gloire de Rushu, qu'ils ont baptisée Brâkmar. Djaul y remarqua le gladiateur Lukryh Leuk, possédé par le dragon noir Celui-Dont-On-Tait-Le-Nom, et après l’avoir entraîné aux arts de la guerre, en fit son champion : Hyrkul le Tendancieux.</p>

            <h3>Le combat contre Jiva</h3>
            <p>Lorsque Jiva fut nommée Protectrice de Javian à la place de Solar, Djaul l'affronta chaque année pour tenter de prolonger son mois au-delà de la date limite. Jiva remporta presque tous les combats, sauf de rares exceptions. Djaul nourrit depuis une haine profonde pour Bonta, cité fondée par Jiva, Ménalt et Pouchecot, éternelle rivale de Brâkmar.</p>

            <h3>La quête des Dofus</h3>
            <p>En l'an 350, Djaul, déjà en possession des Dofus Ébène et Turquoise, cherchait à obtenir le Dofus Pourpre, dont le dernier gardien était Crail. Le démon envoya son serviteur Vil Smisse, autrefois disciple de Crail, pour le capturer et le ramener à Brâkmar. Interrogé par Djaul et Many, Crail révéla, malgré lui, que le Dofus avait été confié à son petit-fils Arty.
            Djaul condamna alors Crail à mort et ordonna aux prêtresses de l’amour de capturer Arty — sans succès. Djaul et Brumaire envoyèrent alors Many. En apprenant la mort de son grand-père, Arty révéla sans le vouloir sa nature draconique en plein cœur de Bonta, déclenchant l'assaut de Vil Smisse et des troupes démoniaques.
            À Brâkmar, Djaul affronta Arty, Goultard, le roi Clustus ainsi que leurs meilleurs guerriers. Bien qu’il éliminât la plupart d’entre eux, il fut contraint d’appeler Karibd et Silar pour achever Goultard et Arty. La bataille ravagea Brâkmar tandis que l’attaque sur Bonta échouait, marquant l'échec cuisant de Djaul.</p>

            <h3>Sous la domination du Cornu Mollu</h3>
            <p>Peu de temps après, Djaul reçut la visite du Cornu Mollu, un dieu maléfique libéré sur le Monde des Douze. Souhaitant conquérir le monde, il réduisit Djaul et Brumaire à l’esclavage et prit possession de Brâkmar. Djaul se soumit à son armée jusqu’à la défaite du Cornu face à Arty et ses alliés, moment où il retrouva son autorité sur Brâkmar.</p>

            <h3>La glaciation de Frigost</h3>
            <p>Djaul est responsable de la glaciation de l’île de Frigost en l’an 552, pour se venger de sa défaite face à Jiva l'année précédente. Celle-ci avait aidé le Comte Harebourg à concevoir la Clepsydre afin de contrer l’influence de Djaul sur Descendre.
            Fondateur de l’Ordre du Cœur Saignant, Djaul nomma son disciple Ralgen au Triumvirat qui dirigea Brâkmar au début du VIIème siècle.</p>
            `
    },
    {
        id: 3,
        name: "Goultard",
        image: "/images/goultard.png",
        description: `
    <h2>Histoire</h2>
    <h3>Enfance</h3>
    <p>
      Goultard est né en -1111 dans le village de Gisgoul, dans lequel il a grandi auprès de sa mère.
      Très jeune, il a manifesté une force surhumaine et a même sauvé ses amis d'un Taure qu'il a tué.
      Cependant, ce Taure était le fils de Kriture, un Taure redouté dans tout le village. Par peur de
      représailles, le village, poussé par le doyen, chassa Goultard et sa mère Cabotine, espérant les
      livrer à Kriture pour éviter son courroux.
    </p>
    <p>
      Lorsque Kriture arriva, Goultard l'envoya valser jusqu’au centre du village où il écrasa le doyen,
      puis il le frappa durant des heures jusqu’à la tombée de la nuit, mettant fin à la vie du Taure.
      Depuis ce jour, Goultard est reconnu comme un héros.
    </p>

    <h3>Amour et perte tragique</h3>
    <p>
      En grandissant, Goultard devient un chasseur de monstres réputé, admiré dans de nombreux villages.
      Il tombe amoureux d’une sorcière et fonde une famille de quatre enfants. Mais Katar, un Sacrieur au
      service de Djaul, kidnappe sa famille pour le forcer à combattre.
    </p>
    <p>
      Durant l’affrontement, Goultard découvre les corps sans vie de sa famille. La douleur laisse place à
      une rage dévastatrice : il terrasse Katar, mais le démon Médoroziam quitte le corps du Sacrieur pour
      prendre possession de celui de Goultard. Corrompu, Goultard devient alors Goultard le Barbare.
    </p>

    <h3>Personnalité multiple</h3>
    <p>
      Lors de l’invasion des Shushus en 24, Goultard perd le contrôle après la mort d’Algathe et donne
      naissance à sa version maléfique : Dark Vlad. Sous cette forme, il massacre villageois et Shushus,
      avant de partir avec le Dofus Émeraude.
    </p>
    <p>
      Après des siècles en tant que Dark Vlad, Goultard crée une nouvelle personnalité bienveillante,
      Vald. Sous cette forme, il rencontre Arty, avec qui il vivra de nombreuses aventures jusqu'à
      l'affrontement contre le Cornu Mollu, son demi-frère.
    </p>

    <h3>Humain à nouveau</h3>
    <p>
      Avec les années, Goultard retrouve son humanité. Médoroziam le quitte pour reprendre possession du
      corps de Katar revenu sous forme de zombie. Goultard récupère sa capacité à ressentir des émotions.
      Plus tard, il affronte de nouveau Katar, mais c’est Ombrage qui élimine ce dernier.
    </p>
    <p>
      Médoroziam tente de reprendre Goultard comme hôte, mais il est finalement dévoré par l’un des
      familiers du demi-dieu.
    </p>

    <h3>Rencontre avec Tristepin</h3>
    <p>
      À l’ère du Wakfu, Goultard retourne à Gisgoul, devenu une attraction touristique exploitant son
      image. Furieux, il détruit les installations. Il y rencontre Tristepin de Percedal, jeune Iop qui
      souhaite simplement se battre, sans connaître Goultard.
    </p>
    <p>
      Touché par le garçon, Goultard lui promet de revenir un jour pour le former.
    </p>

    <h3>Retour d'entre les morts</h3>
    <p>
      Quelques années plus tard, Goultard tient sa promesse et forme Tristepin. Il découvre que ce
      dernier est la réincarnation du Dieu Iop, son propre père, mais garde le secret. Une fois son élève
      prêt, il feint sa mort et lui confie Rubilax.
    </p>
    <p>
      Voyant son disciple perdre confiance, il réapparaît pour l'aider à dompter Rubilax et l’encourager.
      Ensemble, ils retrouvent le Shushu, et Goultard force Rubilax à reprendre sa forme d’épée.
    </p>

    <h3>Seconde invasion des Shushus</h3>
    <p>
      Lors de la deuxième invasion de Rushu, Goultard sauve Tristepin aux Griffes Pourpres. Il affronte
      Rushu et révèle être devenu le nouveau Dieu Iop. Rushu absorbe son armée pour rivaliser, et
      Goultard le saisit pour poursuivre leur combat dans la Shukrute.
    </p>

    <h3>La Quête des Dofus Éliatropes</h3>
    <p>
      Goultard finit par vaincre Rushu et découvre que Tristepin a débloqué ses pouvoirs divins. Il lui
      révèle qu’il est la réincarnation du Dieu Iop. Après la bataille contre Ogrest, Goultard aide Yugo à
      téléporter le Mont Zinit dans la Shukrute, sauvant ainsi le Monde des Douze.
    </p>
    <p>
      Il propose de rendre à Tristepin ses pouvoirs — et son bras — mais celui-ci refuse pour vivre comme
      un simple mortel.
    </p>

    <h3>La Fratrie des Oubliés</h3>
    <p>
      Goultard est attaqué par Adamaï, rejoint la bataille contre Oropo et se retrouve envoyé dans
      l’Inglorium avec les autres héros. Il affronte ensuite Rasha, le frère de Rushu.
    </p>

    <h3>Dans l'Inglorium</h3>
    <p>
      Il accepte une trêve avec Adamaï et part aider à sauver le jeune Pin, possédé par Rasha. Grâce à
      l’intervention d’Evangelyne, Pin reprend le contrôle.
    </p>

    <h3>Retour à la maison</h3>
    <p>
      Tristepin invite Goultard à vivre avec eux, ce qu’il accepte. Ils découvrent que leur maison a été
      reconstruite par Poo, qui s’y est installé. Goultard raconte ensuite ses histoires à Elely, en se
      servant de Poo comme cible.
    </p>

    <h3>L'invasion des Nécromes</h3>
    <p>
      Goultard est recruté par Yugo pour repousser l’invasion des Nécromes. Il participe à la bataille,
      tente de se sacrifier pour sauver Yugo, mais ce dernier le ramène dans le Monde des Douze. Il
      assiste ensuite au mariage de Yugo et Amalia.
    </p>
  `,
    },
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
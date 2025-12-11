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
            <p>Quand Djaul décide de semer la zizanie dans le Monde des Douze, les répercussions sont terribles… 
            Le sulfureux démon parvient en effet à faire pondre Aguabrial un second Dofus, qui éclot et donne naissance au petit dragon Bolgrot. 
            Son arrivée provoque la rupture de l’harmonie dans le monde, et les ennuis ne font que commencer…
            Bolgrot grandit et devient un dragon surpuissant redouté de tous. 
            Il fait régner la terreur dans tout Amakna, jusqu’à ce qu’un jeune Iop du nom de Rykke Errel ne vienne le défier. 
            Contre toute attente, les deux adversaires deviennent amis ! Un dragon et un Iop, quelle drôle d’équipe… 
            Mais leur belle amitié prend fin quand tous deux tombent amoureux de la belle Helséphine. 
            Fou de jalousie, Bolgrot la tue avant de livrer un combat titanesque dans lequel les deux anciens amis perdent la vie.
            En découvrant son corps, les sages d’Amakna comprennent enfin la source des pouvoirs extraordinaires de Bolgrot : dans les entrailles du dragon se trouvent les six Dofus Primordiaux ! 
            La manière dont ils se sont retrouvés là reste toutefois toujours inexpliquée… </p>

            <h3>Naissance de Bolgrot</h3>
            <p>Issu d'un Dofus Turquoise pondu par le Dragon élémentaire Aguabrial, Bolgrot n'aurait jamais vu le jour sans l'intervention de Djaul. 
            En l'an 10, le Protecteur de Descendre, souhaitant entrer en possession d'un Dofus, ensorcelle les eaux de pluie pour faire apparaître une ravissante ondine, prête à séduire la créature légendaire et, pourquoi pas, obtenir un oeuf magique !
            Et ce fut ce qui arriva, car Aguabrial pondit un oeuf qu'il couva, et berça de son souffle magique. 
            Fort heureusement pour le Monde des Douze, la ruse de Djaul fut découverte par Ereziah Melkewel, un ami du dragon et alchimiste de renom, qui emprisonna l'ondine dans des menottes magiques, les paires de "têtes à clic et à clac".
            Furieux d'avoir été trompé, Aguabrial voulut détruire la preuve de sa naïveté, mais tandis qu'Ereziah le raisonnait, l'oeuf vint à éclore : Bolgrot était né. </p>

            <h3>Le terrible dragon</h3>
            <p>En grandissant, Bolgrot devint un terrible dragon, redouté de tous... 
            Jusqu'à ce qu'un disciple de Iop répondant au nom de Rykke Errel ne vienne le défier. 
            Contre toute attente, le dragon ne déchiqueta pas son adversaire, et préféra s'agenouiller, si bien que les deux devinrent amis.
            Mais lorsque Rykke présenta sa compagne, Helséphine, au grand dragon, celui-ci la tua, pris de colère et de jalousie. 
            Il s'envola alors au loin, pourchassé par Rykke Errel, et cette chasse s'acheva sur un combat fratricide, en l'an 130, dont ni l'un, ni l'autre ne ressortirent vivants.
            On découvrit alors, peu après les événements, l'origine de la rage du dragon : dans son ventre se trouvaient les six Dofus primordiaux. 
            Les sages prirent alors la décision de séparer les oeufs, et de les garder dans le plus grand secret. 
            Mais lorsque Rykke présente Helséphine à Bolgrot, la jalousie du dragon déclenche un drame irréversible...</p>

            <h3>Post mortem</h3>
            <p>Après sa mort l'esprit de Bolgrot resta piégé entre deux mondes, incapable de se réincarner, car il n'avait pas pondu de Dofus.
            Il faillit être ressuscité deux fois. 
            La première fois en l'an 492 par Bethel Akarna qui voulait se servir de son esprit pour créer un dofus dont il se serait servi pour libérer Koutoulou.
            La deuxième fois, ce fut Furye l'une des Gardiennes d'Amakna qui trahit son serment et voulut continuer l'oeuvre de Bethel. 
            Elle fut arrêtée par les autres gardiennes dont sa mère, Mériana, qui dut la tuer. Après sa mort, l'âme de Furye fut emprisonnée en Externam par Bolgrot. </p>
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
            <p>Goultard est né en -1111 dans le village de Gisgoul, dans lequel il a grandi auprès de sa mère.
            Très jeune, il a manifesté une force surhumaine et a même sauvé ses amis d'un Taure qu'il a tué.
            Cependant, ce Taure était le fils de Kriture, un Taure redouté dans tout le village. Par peur de
            représailles, le village, poussé par le doyen, chassa Goultard et sa mère Cabotine, espérant les
            livrer à Kriture pour éviter son courroux.>
            Lorsque Kriture arriva, Goultard l'envoya valser jusqu’au centre du village où il écrasa le doyen,
            puis il le frappa durant des heures jusqu’à la tombée de la nuit, mettant fin à la vie du Taure.
            Depuis ce jour, Goultard est reconnu comme un héros.</p>

            <h3>Amour et perte tragique</h3>
            <p>En grandissant, Goultard devient un chasseur de monstres réputé, admiré dans de nombreux villages.
            Il tombe amoureux d’une sorcière et fonde une famille de quatre enfants. Mais Katar, un Sacrieur au
            service de Djaul, kidnappe sa famille pour le forcer à combattre.
            Durant l’affrontement, Goultard découvre les corps sans vie de sa famille. La douleur laisse place à
            une rage dévastatrice : il terrasse Katar, mais le démon Médoroziam quitte le corps du Sacrieur pour
            prendre possession de celui de Goultard. Corrompu, Goultard devient alors Goultard le Barbare.</p>

            <h3>Personnalité multiple</h3>
            <p>Lors de l’invasion des Shushus en 24, Goultard perd le contrôle après la mort d’Algathe et donne
            naissance à sa version maléfique : Dark Vlad. Sous cette forme, il massacre villageois et Shushus,
            avant de partir avec le Dofus Émeraude.
            Après des siècles en tant que Dark Vlad, Goultard crée une nouvelle personnalité bienveillante,
            Vald. Sous cette forme, il rencontre Arty, avec qui il vivra de nombreuses aventures jusqu'à
            l'affrontement contre le Cornu Mollu, son demi-frère.</p>

            <h3>Humain à nouveau</h3>
            <p>Avec les années, Goultard retrouve son humanité. Médoroziam le quitte pour reprendre possession du
            corps de Katar revenu sous forme de zombie. Goultard récupère sa capacité à ressentir des émotions.
            Plus tard, il affronte de nouveau Katar, mais c’est Ombrage qui élimine ce dernier.
            Médoroziam tente de reprendre Goultard comme hôte, mais il est finalement dévoré par l’un des
            familiers du demi-dieu.</p>

            <h3>Rencontre avec Tristepin</h3>
            <p>À l’ère du Wakfu, Goultard retourne à Gisgoul, devenu une attraction touristique exploitant son
            image. Furieux, il détruit les installations. Il y rencontre Tristepin de Percedal, jeune Iop qui
            souhaite simplement se battre, sans connaître Goultard.
            Touché par le garçon, Goultard lui promet de revenir un jour pour le former.</p>

            <h3>Retour d'entre les morts</h3>
            <p>Quelques années plus tard, Goultard tient sa promesse et forme Tristepin. Il découvre que ce
            dernier est la réincarnation du Dieu Iop, son propre père, mais garde le secret. Une fois son élève
            prêt, il feint sa mort et lui confie Rubilax.
            Voyant son disciple perdre confiance, il réapparaît pour l'aider à dompter Rubilax et l’encourager.
            Ensemble, ils retrouvent le Shushu, et Goultard force Rubilax à reprendre sa forme d’épée.</p>

            <h3>Seconde invasion des Shushus</h3>
            <p>Lors de la deuxième invasion de Rushu, Goultard sauve Tristepin aux Griffes Pourpres. Il affronte
            Rushu et révèle être devenu le nouveau Dieu Iop. Rushu absorbe son armée pour rivaliser, et
            Goultard le saisit pour poursuivre leur combat dans la Shukrute. </p>

            <h3>La Quête des Dofus Éliatropes</h3>
            <p>
            Goultard finit par vaincre Rushu et découvre que Tristepin a débloqué ses pouvoirs divins. Il lui
            révèle qu’il est la réincarnation du Dieu Iop. Après la bataille contre Ogrest, Goultard aide Yugo à
            téléporter le Mont Zinit dans la Shukrute, sauvant ainsi le Monde des Douze.
            Il propose de rendre à Tristepin ses pouvoirs — et son bras — mais celui-ci refuse pour vivre comme
            un simple mortel.</p>

            <h3>La Fratrie des Oubliés</h3>
            <p>Goultard est attaqué par Adamaï, rejoint la bataille contre Oropo et se retrouve envoyé dans
            l’Inglorium avec les autres héros. Il accepte une trêve avec Adamaï et part aider à sauver le jeune Pin,
            possédé par Rasha. Grâce à l’intervention d’Evangelyne, Pin reprend le contrôle.</p>

            <h3>Retour à la maison</h3>
            <p>Tristepin invite Goultard à vivre avec eux, ce qu’il accepte. Ils découvrent que leur maison a été
            reconstruite par Poo, qui s’y est installé. Goultard raconte ensuite ses histoires à Elely, en se
            servant de Poo comme cible.</p>

            <h3>L'invasion des Nécromes</h3>
            <p>Goultard est recruté par Yugo pour repousser l’invasion des Nécromes. Il participe à la bataille,
            tente de se sacrifier pour sauver Yugo, mais ce dernier le ramène dans le Monde des Douze. Il
            assiste ensuite au mariage de Yugo et Amalia.</p>
            `
    },
    {
        id: 4,
        name: "Comte-Harebourg",
        image: "/images/harebourg.png",
        description: `
            <h2>Histoire</h2>
            <p>
            Jacquemart Tocante de Harebourg, ou Comte Harebourg, est un demi-dieu Xélor, un membre de la Fratrie des Oubliés, et le Comte de l'île de Frigost.
            En 550, il a remporté le concours agricole de la maire Cantile en proposant la Clepsydre, une machine permettant de diminuer l'influence de l'hiver,
            et a reçu de Jiva le Dofus des Glaces pour décupler la puissance de la machine et diminuer l'influence de Djaul, qu'elle a pu vaincre en 551.
            Djaul s'est vengé en piégeant Frigost dans un hiver perpétuel, laissant Harebourg responsable de cette tragédie. Le Comte est alors devenu l'ennemi
            public numéro un, ce qui l'a rendu fou et lui a fait arrêter le temps, laissant l'île coupée du reste du monde jusqu'à sa redécouverte en 640.
            En 666, il a accueilli la Fratrie sur son île pour un tournoi et s'est retrouvé congelé dans la glace suite à une tentative ratée de Messer de lui voler
            le Dofus des Glaces, puis Sipho s'est fait passer pour lui durant les siècles suivants.
            En 971, le Comte a été décongelé par un aventurier sur l'île Sberg et est rentré en conflit avec lui pendant plusieurs années. En 988, il a participé
            au vol des Dofus Eliatropes et en a emmené deux sur Frigost, dont il a repris possession.<br/>
            Il a aussi profité de la situation catastrophique due à la montée des eaux au Royaume Sadida pour proposer une alliance en épousant la princesse
            Amalia Sheran Sharm, dans le but d'attirer la Confrérie du Tofu et principalement Yugo l'Eliatrope chez lui pour qu'il lui explique comment utiliser
            les Dofus. Il comptait aussi se servir de l'union avec les Sadidas pour exploiter leurs arbres comme combustible, mais ses plans ont été mis en échec
            par la Confrérie et il a été puni par la Fratrie pour ses actes jugés égoïstes en étant à nouveau congelé dans la glace.
            </p>
            `
    },
    {
        id: 5,
        name: "Joris",
        image: "/images/joris.png",
        description: `
            <h2>Histoire</h2>

            <h3>Naissance</h3>
            <p>
            Joris est le fils improbable de deux légendes que tout opposait. D'un côté Jahash Jurgen,
            héros de Bonta et gardien du Dofus Ivoire. De l'autre, Julith Abigor, la "bouchère de Brâkmar",
            détentrice du Dofus Ébène. Alors que l'armée de Brâkmar marchait sur Bonta, les deux Huppermages
            se firent face durant un combat qui dura soixante-neuf jours. Mais au terme de cet affrontement,
            un miracle se produisit : les deux ennemis s'enlacèrent et s'embrassèrent, mettant fin à la bataille.
            Julith épousa Jahash et vécut un temps à Bonta. De leur union naquit Joris. Mais alors qu'il n'était
            qu'un nouveau-né, quelqu'un déchaîna la puissance du Dofus Ébène sur Bonta. Julith tenta de maîtriser
            l'artefact, mais les forces bontariennes, toujours méfiantes envers elle, crurent qu'elle attaquait
            la cité. Transpercée par les lances des soldats, elle s'effondra, laissée pour morte.
            Jahash tenta à son tour de reprendre le contrôle de la situation. En désespoir de cause, il abattit
            le Dofus Ivoire sur le Dofus Ébène, brisant ce dernier. Le choc tua Jahash et expulsa l'âme du dragon
            Grougalorasalar, qui chercha refuge dans l'être vivant le plus proche : Joris. Sa peau prit alors la teinte
            noire des écailles du dragon. Orphelin, il fut confié à Kerubim Crépin, ami proche de Jahash.</p>

            <h3>Dofus : Aux Trésors de Kerubim</h3>
            <p>Joris grandit à Astrub, enfant dégourdi admirant son père adoptif Kerubim, célèbre brocanteur et aventurier,
            dont il écoute avec passion les récits.</p>

            <h3>Dofus, Livre I : Julith</h3>
            <p>Après avoir déménagé à Bonta, Joris s'apprête à assister à un match de Boufbowl pour rencontrer son idole,
            Khan Karkass. Mais Julith revient et s'en prend à lui : elle tue Kerubim et enlève Lilotte, l'amie de Joris.
            Le garçon s'échappe avec Bakara et Khan dans la Dimension Ecaflip, où ils retrouvent le Dofus Ivoire, convoité
            par Julith et autrefois gardé par Kerubim.</p>

            <h3>Dofus - Welsh et Sheddar</h3>
            <p>Joris aide Welsh à récupérer le trône de Bonta. En récompense, il est nommé ambassadeur.</p>

            <h3>Wakfu – La série</h3>
            <p>Durant les événements de Wakfu, Joris est toujours ambassadeur de Bonta. Il se rend plusieurs fois
            au Royaume Sadida pour des affaires diplomatiques et y aide à de nombreuses reprises la Confrérie du Tofu.</p>

            <h3>Manga Wakfu</h3>
            <p>
            Joris s'oppose à Jiva lorsque celle-ci attaque la Confrérie du Tofu lors de l'anniversaire de Yugo et Adamaï.
            Bien qu'il l'interroge sur les raisons de sa colère, la protectrice de Javian le neutralise sans difficulté.
            Après avoir vaincu la Confrérie et tué Phaéris, Jiva prend Chibi et Grougaloragran en otage et exige les six
            Dofus Éliatropes. Joris participe à l'expédition destinée à les retrouver, qui mènera les héros jusqu'à Emrub.
            Une fois les Dofus récupérés, les héros se rendent à Frigost pour négocier avec Jiva, mais celle-ci refuse
            de rendre les nouveaux-nés. Elle s'enfuit sur sa Lune de Glace, poursuivie par Yugo, Tristepin et Joris,
            qui finissent par la vaincre.
            Joris se charge ensuite de cacher les Dofus Éliatropes pour éviter qu'ils ne tombent entre de mauvaises mains.
            Il les dissimule dans un coffre à Bonta.</p>
            `
    },
    {
        id: 6,
        name: "Meriana",
        image: "/images/meriana.png",
        description: `
            <h2>Histoire</h2>

            <h3>Gardienne d'Amakna</h3>
            <p>Mériana faisait autrefois partie d'un groupe de sorcières veillant sur le Monde des Douze : les Gardiennes d'Amakna.
            Elle était ainsi la Gardienne du Sud, dont Pytch est le Méryde.</p>

            <h3>Relation avec Bethel</h3>
            <p>Mériana trouva un amant en la personne de Bethel Akarna, un puissant mage osamodas, avec qui elle eut une fille : Furye.
            En 492, Bethel tenta de profiter de l'alignement des étoiles pour ramener le Dragon Bolgrot à la vie afin d'obtenir de lui un Dofus.
            Les Gardiennes réussirent à stopper sa folie à temps, mais subirent une lourde perte.
            En effet, Furye, la gardienne de l’Ouest, s'était rangée du côté de son père et désirait achever son œuvre.
            Mériana n’eut d’autre choix que de sacrifier sa propre fille pour empêcher la catastrophe.
            Depuis cette date, l’âme de Furye erre sur Externam sans pouvoir trouver le repos.</p>

            <h3>Collecte des Dofus</h3>
            <p>Depuis le Jour Maudit de l'an 634 où les Dofus disparurent, Mériana guide les aventuriers dans leur quête pour les rassembler.
            Pour le Dofus Émeraude d’Aerafal, Mériana utilise ses pouvoirs pour transformer les aventuriers en dragon grâce au talisman de Prysmaradoth, permettant ainsi de vaincre Dark Vlad et de lever la malédiction.
            En guise de gratitude, Goultard leur remet le Dofus Émeraude.
            Pour le Dofus Pourpre d’Ignemikhal, elle oriente les aventuriers vers le labyrinthe du Minotoror, dans l’antichambre du Minotot.
            Ce dernier accepte de remettre son Dofus en échange du masque de Totankama qui appartenait à ses ancêtres.
            Mériana utilise sa magie pour protéger les aventuriers de la malédiction de Totankama mais, une fois le masque restitué, le Minotot dupe ses bienfaiteurs en les enfermant dans le labyrinthe.
            Seule la ruse permet de quitter le labyrinthe et de récupérer le Dofus Pourpre.
            Pour le Dofus Turquoise d’Aguabrial, l’alchimiste Ereziah demande aux aventuriers de libérer l'âme de Furye, la fille de Mériana, de l’emprise du dragon Bolgrot.
            Ceux-ci commencent par vaincre l’esprit de Bolgrot, puis rassemblent les 4 totems des Gardiennes d’Amakna sur le rocher des sacrifiés afin d’invoquer l’esprit de Furye.
            Ils affrontent ainsi l’esprit de la gardienne de l’Ouest afin de briser son lien avec Bolgrot.
            Cet exploit permet à Furye de se réincarner et persuade Aguabrial de remettre son Dofus à son sauveur.
            Pour le Dofus Ocre de Terrakourial, Mériana met les aventuriers sur la piste de l’alchimiste Otomaï, qui souhaite construire une arche pour rassembler tous les êtres vivants du Monde des Douze en prévision d’un événement apocalyptique.
            Ce n’est qu’après avoir capturé l’essence de chaque créature du Monde des Douze puis terrassé le Kralamoure Géant, un monstre ayant pris la vie du dragon Terrakourial lui-même, qu’Otomaï accepte de remettre son Dofus.
            Pour le Dofus Ivoire de Dardondakal, Mériana guide les aventuriers vers la salle d’Ivoire de la dimension Ecaflip, où se trouve l’esprit du dragon.
            Ainsi, les aventuriers affrontent Hyrkul pour modifier le destin du dragon blanc et lui permettre de se réincarner.
            Dardondakal offre ainsi son Dofus Ivoire en reconnaissance.
            Enfin, pour le Dofus Ébène de Grougalorasalar, les aventuriers partent à la recherche de ce que le de son fils Crocoburio.
            Mériana aide d’abord les aventuriers à récupérer Crocobur, l’épée légendaire de Crocoburio, puis procède au rituel de séparation des âmes pour libérer la petite Léane et permettre au fils de Grougalorasalar de se réincarner.
            Si le dragon noir envisage dans un premier temps de carboniser le saveur de son fils, il accepte finalement de lui laisser son Dofus en réalisant que sa mort rendrait Crocoburio inconsolable.
            Grâce à Mériana, les six Dofus primordiaux sont ainsi réunis, permettant l’accomplissement de la prophétie.</p>

            <h3>Réunion des six Dofus</h3>
            <p>Une fois les six Dofus réunis, le gardien des Dofus se rend dans le sanctuaire des Dofus à Pandala pour placer les Dofus sur le réceptacle mais tombe dans le piège des Nordes.
            Il décide alors de retourner auprès de Mériana mais se fait suivre par les envoyés du destin.
            Mériana révèle alors sa véritable apparence de demi-dragonne pour se débarrasser des assaillants.
            La sorcière conseille ensuite au porteur des Dofus primordiaux de couper les fils de la tapisserie des Nordes pour s’affranchir de son destin.</p>
        `
    },
    {
        id: 7,
        name: "Otomai",
        image: "/images/otomai.png",
        description: `
            <h2>Histoire</h2>

            <h3>Créateur et alchimiste</h3>
            <p>Créateur de la célèbre potion contre la myxomawose, enchanteur spécialisé dans l'étude des créatures du vivant, il est à l'origine de la découverte de l'île qui porte aujourd'hui son nom.
            C'est là qu'il a tenté de réunir les différentes espèces animales du Monde des Douze grâce à son arche, afin de pratiquer de mystérieuses expériences.
            Du fait de cet échec, Otomaï décide de s'en remettre aux aventuriers à qui il demande de lui capturer l'âme des monstres dont il a besoin ; en récompense, il leur promet un Dofus.
            Il est également le père d'Ogrest, qu'il aurait créé par erreur à l'aide de la Plasmogrine.</p>

            <h3>Enfance</h3>
            <p>Otomaï passa son enfance dans une famille de simples bergers.
            Sa mère tomba enceinte lors d'une rencontre avec la déesse Féca tandis que son père accepta la présence de ce fils illégitime, espérant en faire son reflet.
            Bien qu'il se montrait tolérant envers Otomaï, ce dernier pouvait être violent avec sa femme.
            Dès son plus jeune âge, Otomaï était fasciné par les sciences et l’étude du vivant, à l'inverse de son père qui aurait préféré que son fils accepte l'œuvre de la déesse plutôt que d'en chercher les causes.</p>

            <h3>Romance</h3>
            <p>Pendant qu’il gardait le troupeau de Bouftous de son père, Otomaï rencontra Mérina, une jeune Féca qui dormait dans les hautes herbes.
            Les deux eurent un coup de foudre l’un pour l’autre.
            Plus tard, Otomaï et Mérina se retrouvèrent sur les bancs de l’école.
            Les années passèrent et confirmèrent leur attirance mutuelle.
            Une fois adulte, le couple souhaitait avoir des enfants mais, malheureusement, Mérina était infertile.
            Otomaï promit alors de l’aider à porter la vie.
            L’alchimiste s’enferma des années dans son laboratoire à la recherche d’une solution pendant que son épouse menait sa vie de bergère.
            Toutefois, contrairement à Otomaï qui était d'ascendance divine, Mérina vieillissait et mourut avant que celui-ci ne puisse tenir sa promesse.
            Cette disparition bouleversa le demi-dieu.</p>

            <h3>Découverte de l'île</h3>
            <p>Otomaï découvrit l'île qui porte aujourd'hui son nom par hasard, en cherchant un nouvel éden, une île vierge de toutes les perversions que l'on peut trouver sur le continent.
            En arrivant sur l'île, il constate que celle-ci a jadis été habitée par une civilisation ayant construit des bâtiments et des laboratoires d'alchimie ; lui et son équipe n'ont fait que restaurer ce qui était déjà en place, bien qu'abîmé.
            De temps en temps, de nouveaux vestiges de cette civilisation jusqu'alors enfouis sous terre sont découverts.
            Lors de ses recherches, Otomaï découvre que cette civilisation disparue aurait été mêlée de près aux Dofus.</p>

            <h3>Gardien de Dofus</h3>
            <p>Les travaux et la sagesse d’Otomaï lui valurent l’honneur d’être approché par les gardiens de Dofus.
            Lors d’une cérémonie secrète, il fut choisi pour devenir le gardien du Dofus Ocre.
            Toutefois, la rumeur de la présence d'un Dofus sur son île attira de nombreux aventuriers qui s’installèrent dans le village côtier.
            Pour tromper les voleurs, l'alchimiste fabriquait régulièrement de faux Dofus Ocre boostés par alchimie.
            C’était un bon stratagème puisque les aventuriers repartaient avec les faux Dofus dont la magie suffisait à les tromper.</p>

            <h3>Naissance d'Ogrest</h3>
            <p>Un jour, Otomaï trouva le corps inanimé de Dathura, une des poupées divines de Sadida, dont le cœur en Ogrine était transpercé.
            L’alchimiste chercha de l’Ogrine pour réparer son cœur.
            Lors de ses expériences, il renversa la substance, donnant naissance à un petit bébé vert.
            Comme cette créature était née de l’Ogrine, Otomaï décida de le nommer Ogrest.
            Il devint son père adoptif et prit en charge son éducation.
            Ogrest possédait deux particularités délicates à gérer : son estomac dimensionnel et ses larmes magiques, qui pouvaient transformer la cave d’Otomaï en piscine géante.
            Ogrest eu une enfance heureuse avec Otomaï, bien qu'il se sentait seul, jusqu’au jour où il découvrit le corps de Dathura dans l'atelier d’Otomaï.
            Sa beauté était tellement envoûtante qu’il en tomba amoureux au premier regard.
            Ogrest parcourut toute l’île à la recherche d’Ogrine mais sans y parvenir.
            Comprenant que la poupée risquait de rester endormie à tout jamais, il pleura sur le corps de Dathura.
            Une de ses larmes tomba sur son cœur et réveilla la poupée divine.
            Dathura reprit vie et accepta de vivre avec Otomaï et Ogrest, elle avait beaucoup d’affection pour Ogrest.</p>

            <h3>Retour à la Solitude</h3>
            <p>En l'an 666, Dathura disparut, appelée par sa sœur Lacrima grâce à la flûte de Sadida.
            Peu après, Ogrest quitta à son tour l'alchimiste pour se lancer à la recherche de sa bien-aimée.
            Ogrest retrouva Dathura au château du comte Harebourg lors du tournoi de la fratrie des Oubliés mais Dathura fut piégée dans la glace en tentant de s'emparer du Dofus des Glaces.
            Otomaï se retrouva à nouveau seul.
            Une fois Ogrest libéré de la glace, il rassembla les Dofus Primordiaux et provoqua une série de catastrophes sur le Monde des Douze menant au Chaos d'Ogrest et la fin de l'âge des Dofus.</p>

            <h3>Ère du Wakfu et fin du Chaos d’Ogrest</h3>
            <p>En l'an 988, Ogrest eut une seconde crise de larmes qui menaçait d’engloutir les terres immergées, à commencer par le Royaume Sadida.
            Otomaï, qui culpabilisait d'avoir abandonné son fils, se rendit au repaire d'Ogrest, au sommet du Mont Zinit.
            Pendant que Yugo et Tristepin affrontaient Ogrest, l'alchimiste mit au point une stratégie pour le neutraliser.
            Otomaï prit la forme d'un oiseau pour entrer dans la gueule d'Ogrest et chercher les Dofus Primordiaux dans son estomac.
            Le plan fonctionna et l’alchimiste parvint à retirer les Dofus du ventre d’Ogrest qui reprit son apparence d’enfant.
            Otomaï s’excusa d’avoir abandonné son fils et promit de rattraper le temps perdu.
            Ogrest accepta de retourner vivre avec son père tandis qu'il confiait ses Dofus aux six Dragons.
            Le roi Sheran Sharm du Royaume Sadida accepta de le laisser partir sans punition après l'assurance d'Otomaï qu'il ne serait plus une menace.</p>

            <h3>Les thèses d'Otomaï</h3>
            <p>Lors de ses recherches sur cette ancienne civilisation, Otomaï lut de nombreux ouvrages dont les thèses remettaient en cause la toute-puissance des dieux.
            Ces livres furent interdits par les autorités qui les jugeaient trop dangereux.
            On peut supposer qu'ils font l'apologie d'une science rationnelle qui exclut toute intervention divine et explique le monde matériel par un enchaînement de causes et d'effets rationnels.
            Otomaï a également procédé à des recherches sur les Dofus et a conclu que les dragons pouvaient être à l'origine d'une couvée entière de Dofus, mais qu'un seul pourrait donner naissance à un autre dragon.
            Il pensait que cette connaissance serait d'ordre transcendant, donc inaccessible pour l'instant.</p>

            <h3>Les expériences d'Otomaï</h3>
            <p>Otomaï ne serait pas connu sans ses expériences aux conséquences parfois désastreuses.
            On peut citer le Tynril, devenu incontrôlable, ou encore Amy l'empoisonneuse, ancienne cobaye de l'alchimiste.
            Il est également à l'origine de la rosissure : en créant un ballotin de chocolats aux vertus aphrodisiaques, une erreur transforma le pelage des bouftous en teinte rosée chaque 14 Flovor, donnant naissance à la fête de La Sain Ballotin.
            Ses assistants, comme le Docteur Morose, semblent cacher de terribles secrets.
            Il découvrit également un remède contre la myxomawose, alors qu'il préparait un dessert à base de gelée.
            En renversant du Plasmogrine sur ses vêtements, il constata qu'ils pouvaient parler, donnant naissance aux Obvijevans.
            Il tenta de les enfermer dans une armoire, mais ils se reproduisirent à son insu.</p>
        `
    },
    {
        id: 8,
        name: "Pandawa",
        image: "/images/pandawa.png",
        description: `
            <h2>Histoire</h2>

            <h3>Accession au Panthéon</h3>
            <p>Un fait peu connu, la Déesse Pandawa était là au commencement du Monde !
            Elle faisait partie des innombrables petits dieux, et était beaucoup moins puissante qu’aujourd’hui.
            Un jour qu’elle réfléchissait, pensant au moyen de convertir de nouveaux fidèles, elle tomba sur une dépouille de Blop ayant succombé à une giclée de Sporme.
            Le tout était presque liquide et une nuée de Corbacs s'agitait autour de la dépouille.
            À sa grande surprise, les volatiles noirs étaient tous ivres, titubant et incapables de s’envoler.
            Elle eut ainsi LA révélation : son pouvoir pouvait s'accroître à mesure qu’elle expérimentait l’art de la fermentation.
            Tout y passa : végétaux et créatures, organes et pelures devenaient des liquides à la saveur incomparable, et qui mettaient ceux qui les buvaient dans des états seconds, durant lesquels la Déesse s’empressait de leur parler.
            Il n’en fallait pas plus pour convaincre tous les ivrognes du coin que la Déesse Pandawa était une déesse extra.
            Sa popularité fut bientôt si grande qu’elle prit la place qui lui revenait de plein droit, le 17 Martalo de l'an 12, aux côtés des autres dieux du Panthéon.</p>

            <h3>Protectrice de Pandala</h3>
            <p>Autrefois, Imagirorukam était le protecteur de Pandala.
            Cependant, l'âme du dragon se sépara en deux lors d'une traversée à travers les abîmes du temps, donnant naissance aux dragons jumeaux Imagiro et Orukam.
            N'étant plus capable de protéger son île, c'est la Déesse Pandawa qui prit sa place et devint la nouvelle protectrice de Pandala.
            La Main de la Déesse Pandawa est toutefois la clé de la réunification des deux dragons.
            En effet, en faisant tourner le Wukin et le Wukang dans la paume de sa main, Pandawa peut de nouveau réunir les deux dragons en un seul.</p>

            <h3>Surnoms</h3>
            <ul>
                <li>La Soif Éternelle</li>
                <li>La Reine des Chopes
            La Dame aux Bambous
            La Grande Ourse qui Mousse</ul>

            <h3>Ses commandements</h3>
            <p>Tu ne poutreras pas ton voisin alors qu'il boit son verre avec une paille, tu risquerais de la lui mettre dans l'œil.
            Tu te serviras d'un éventail pour brasser de l'air.
            Tu tiendras la buvette et l'alcool lors des fêtes estivales.
            Tu prendras garde au coup de bambou après un repas bien arrosé.
            Tu ne renverseras point la divine bibine, car sa mousse tache et a tendance à piquer.
            Tu éviteras les mélanges qui ne sont pas du même tonneau.
            Tu ne conduiras pas d'attelage en état d'ébriété.
            Tu ne porteras point tes amis si tu es trop porté sur la bouteille.
            Tu poseras la question rituelle quand un individu débarquera dans une soirée sacrée sans avoir été invité : "Hey, t'es qui, là ?".
            Tu utiliseras des agents à fermenter si tu veux éviter les mauvaises surprises.
            Si tu ne suis pas ces préceptes, tu devras boire 5 litres d'eau pure en signe de pénitence.</p>
        `
    },
    { id: 9, name: "Sacrieur", image: "/images/sacrieur.png", },
    { id: 10, name: "Ush", image: "/images/ush.png", }
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
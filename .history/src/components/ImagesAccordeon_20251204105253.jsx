import { useState } from "react";
import Amakna from '../assets/Amakna.png';
import Bonta from '../assets/Bonta.png';
import Brakmar from '../assets/Brakmar.png';
import Sufokia from '../assets/Sufokia.png';
import "./ImagesAccordeon.scss";

function ImagesAccordeon() {
  const [openIndex, setOpenIndex] = useState(null);

  const images = [
    {
      src: Amakna,
      text: "En 505, Uk'Not'Allag mena une armée de démons contre Amakna, asservissant la population et la contraignant à rechercher les Dofus disparus, jusqu’à ce qu’Allister, berger du plus grand troupeau de Bouftous, fonde la Guilde d’Allister et, aidé par la déesse Féca, capture le démon en 512 ; Amakna retrouve alors la paix et Allister devient roi, exerçant le pouvoir depuis son château au nord du village avec ses conseillers, tout en construisant plusieurs Kanojedo en souvenir de ses exploits ; le royaume s’étend avec au nord le château et village visible depuis ses remparts, au sud la presqu’île des Dragoeufs, à l’est le port de Madrestam d’où partent les expéditions vers l’île des Wabbits, Sakaï ou Vulkania, et à l’ouest des zones dangereuses comme les marécages et la forêt maléfique, tandis que le royaume abrite la plupart des temples de classes ou des accès à ces temples."
    },
    {
      src: Bonta,
      text: "Bonta, fondée en l’an 25 par les Protecteurs Jiva, Pouchecot et Ménalt sur ordre de Xélor, est créée pour contrer l’influence du démon Rushu et de la cité sombre de Brâkmar. Les deux villes deviennent alors rivales, donnant lieu à des conflits majeurs comme la bataille de l’Aurore Pourpre. Au fil des siècles, Bonta subit de nombreuses attaques : Hyrkul, Crocoburio, le Dragon Noir, puis le Dark Vlad qui incendie la cité et tue le roi. Les Huppermages prennent alors la défense du royaume. Plus tard, l’explosion du Dofus Ébène ravage une partie de la ville. Malgré tout, Bonta résiste, notamment sous Ilyzaelle lors d’une nouvelle offensive brâkmarienne. Aujourd’hui, Bonta est une monarchie constitutionnelle dirigée par le roi Beldarion, avec une milice organisée en trois ordres chargés de protéger la cité."
    },
    {
      src: Brakmar,
      text: "Brâkmar est née dans la nuit du 12 Descendre de l’an 24, une cité teintée de soufre et de ténèbres que certains attribuent à Rushu et d’autres à Hyrkul ; très vite elle devient l’antagoniste de Bonta, affrontement culminant lors de la bataille de l’Aurore Pourpre, puis la rivalité et les guerres se poursuivent (notamment en l’an 135 et lors d’attaques répétées), jusqu’à ce que Brâkmar connaisse des bouleversements politiques successifs — régence d’Erazal, gouvernement du Triumvirat puis coup d’État d’Oto Mustam qui instaure une dictature militaire — et que la cité vive des épisodes dramatiques (attentats, explosions de Dofus, invasions de créatures et assassinats de souverains) montrant son caractère violent et instable ; socialement et économiquement, Brâkmar est organisée autour d’une milice structurée (l’Œil Putride, le Cœur Sanglant, l’Esprit Malsain), pratique couramment l’esclavage — y compris la capture d’Ouginaks contrôlés par des méthodes brutales comme les « croquettes apaisantes » — et interdit le commerce légal, favorisant l’émergence d’un vaste marché noir et d’une économie de contrebande qui entretiennent la criminalité et la brutalité ambiante, faisant de la cité un lieu à la fois puissant et impitoyable."
    },
    {
      src: Sufokia,
      text: "Sufokia fut autrefois engloutie par une inondation provoquée par Zellina, mais ses habitants survécurent grâce à la technomagie des Steamers, qui combinaient magie élémentaire et technologies avancées. Après le retour du sous-marin royal en 246, la cité prospéra et devint un centre de savoir scientifique et magique, maîtrisant l’exploration sous-marine et le commerce maritime. Gouvernée par le Conseil de la Mer et le couple royal, Sufokia s’est organisée autour de la technomagie, de la pêche et du commerce. Ses habitants ont développé des innovations pour exploiter les ressources maritimes et protéger la cité, revendiquant notamment les Griffes Pourpres pour alimenter leurs machines et renforcer leur flotte."
    }
  ];

  const togglePanel = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordeon-container">
      <h2>Découvrez l'univers du Krosmoz</h2>
      div.container
      {images.map((item, index) => (
        <div
          key={index}
          className="accordeon-item"
          onClick={() => togglePanel(index)}
        >
          <img src={item.src} alt={`illustration-${index}`} />

          {/* Le texte apparaît seulement si l’index correspond */}
          {openIndex === index && (
            <div className="text-panel">
              <p>{item.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ImagesAccordeon;

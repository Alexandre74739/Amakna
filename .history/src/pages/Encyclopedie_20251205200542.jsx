import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buttons from "../components/Buttons";

function PersonnageDetail() {
  const { id } = useParams();
  const [perso, setPerso] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/personnages/${id}`)
      .then(res => res.json())
      .then(data => setPerso(data))
      .catch(err => console.error("Erreur API :", err));
  }, [id]);

  if (!perso) return <p>Chargement...</p>;

  return (
    <div className="personnage-detail">
      <h1>{perso.name}</h1>
      <img src={perso.image} alt={perso.name} />
      <p>{perso.story}</p>
      <Buttons />
    </div>
  );
}

export default PersonnageDetail;

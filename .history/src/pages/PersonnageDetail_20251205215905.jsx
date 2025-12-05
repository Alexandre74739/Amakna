import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function PersonnageDetail() {
  const { id } = useParams();
  const [personnage, setPersonnage] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/personnages/${id}`)
      .then(res => res.json())
      .then(data => setPersonnage(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!personnage) return <p>Chargement...</p>;

  return (
    <div className="personnage-detail">
      <h1>{personnage.name}</h1>
      <img src={personnage.image} alt={personnage.name} />

      {personnage.story.map((section, index) => (
        <div key={index} className="story-section">
          <h3>{section.title}</h3>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PersonnageDetail;

import { useState } from "react";
import Bar from "./Bar";
import Card from "./Card";

function CardsList({ data }) {
  const [search, setSearch] = useState("");

  const filtered = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="cards-wrapper">
      <Bar onSearch={setSearch} />

      <div className="cards-container">
        {filtered.map(item => (
          <Card key={item.id} item={item} />
        ))}

        {filtered.length === 0 && <p>Aucun résultat</p>}
      </div>
    </div>
  );
}

export default CardsList;

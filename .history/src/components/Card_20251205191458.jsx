function Card({ item }) {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <img src={item.image} alt={item.name} />
    </div>
  );
}

export default Card;

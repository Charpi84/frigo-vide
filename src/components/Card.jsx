export default function Card({ content }) {
  return (
    <div className="card">
      <img src={content.image} alt={content.nom} className="card-image" />
      <h2 className="card-title">{content.nom}</h2>
    </div>
  );
}
export default function Card({ content }) {
  return (
    <div className="card">
      <img src={content.image} alt={content.nom} className="card-image" />
      <span className="card-title">{content.nom}</span>
    </div>
  );
}
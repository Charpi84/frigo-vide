import { BookmarkSimpleIcon } from "@phosphor-icons/react";
import { useFavoris } from "../context/FavorisContext";

export default function Card({ content }) {

  const { isFavoris } = useFavoris()
  const actif = isFavoris(content.id)

  return (
    <div className="card">
      <img src={content.image} alt={content.nom} className="card-image" />
      <span className="card-title">{content.nom}</span>
      {actif && (
        <div className="bookmark"><BookmarkSimpleIcon size={24} color="#FF5900" weight="fill" /></div>
      )}
    </div>
  );
}
import { useParams, NavLink, useNavigate } from "react-router";
import lesRecettes from "../data/recettes_cuisine.json";
import { ArrowLeftIcon, BookmarkSimpleIcon, ClockIcon, SpinnerIcon, UserIcon } from "@phosphor-icons/react";
import { useFavoris } from "../context/FavorisContext";

export default function RecetteDetail() {
    const { id } = useParams();
    const { isFavoris, toggleFav } = useFavoris()
    const actif = isFavoris(id)
    
    const navigate = useNavigate()

    const recette = lesRecettes.find((laRecette) => laRecette.id === parseInt(id));

    if (!recette) {
        return <p>Recette introuvable</p>;
    }

    return (
        <div className="detail">
            <div className="content">
                <div className="title">
                    <ArrowLeftIcon size={24} onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
                    <h3>{recette.nom}</h3>
                </div>
                <div className="presentation-recette">
                    <img src={recette.image} alt={recette.nom} />

                    <div className="icon-fav"><div className="cuisine">
                        <div className="info"><ClockIcon size={16} weight="bold" /> <p>{recette.temps_preparation}</p></div>
                        <div className="info"><UserIcon size={16} weight="bold" /> <p>{recette.nombre_personnes} personnes</p></div>
                        <div className="info"><SpinnerIcon size={16} weight="bold" /> <p>{recette.temps_cuisson}</p></div>
                    </div>
                        <div className="favorite" onClick={() => toggleFav(id)}>
                            <BookmarkSimpleIcon size={16} weight={actif ? "fill" : "bold"} />
                            <span>{actif ? "Retirer des favoris" : "Ajouter aux favoris"}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="preparation">
                <div className="ing-content">
                    <h2>Ingrédients :</h2>
                    <div className="ing-list">
                        <ul>
                            {recette.ingredients.map((ing, i) => (
                                <li className="i" key={i}><span className="picto">{ing.illustration}</span><span className="qte">{ing.nom}: {ing.quantite} {ing.unite}</span></li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="step-content">
                    <h2>Préparation :</h2>
                    <div className="step-list">
                        <ul>
                            {recette.etapes.map((step, i) => (
                                <li className="s" key={i}> {step}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}



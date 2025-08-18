import { useParams, NavLink, useNavigate } from "react-router";
import lesRecettes from "../data/recettes_cuisine.json";
import { ArrowLeftIcon, ClockIcon, SpinnerIcon, UserIcon } from "@phosphor-icons/react";

export default function RecetteDetail() {
    const { id } = useParams(); 
    const navigate = useNavigate()

    const recette = lesRecettes.find((laRecette) => laRecette.id === parseInt(id));

    if (!recette) {
        return <p>Recette introuvable</p>;
    }

    return (
        <div>
            <h1> <ArrowLeftIcon size={24} onClick={() => navigate(-1)} style={{cursor:"pointer"}}/> {recette.nom}</h1>
            <img src={recette.image} alt={recette.nom} style={{ height: "160px", width: "160px", objectFit: "contain" }} />

            <div className="cuisine">
                <ClockIcon size={16} /> <p>{recette.temps_preparation}</p>
                <UserIcon size={16} /> <p>{recette.nombre_personnes} personnes</p>
                <SpinnerIcon size={16} /> <p>{recette.temps_cuisson}</p>
            </div>


            <h2>Ingrédients :</h2>
            <ul>
                {recette.ingredients.map((ing, i) => (
                    <li key={i}>{ing.illustration}{ing.nom}: {ing.quantite} {ing.unite}</li>
                ))}
            </ul>

            <h2>Préparation :</h2>
            <ul>
                {recette.etapes.map((step, i) => (
                    <li key={i}> {step}</li>
                ))}
            </ul>
        </div>
    );
}



import { NavLink, useNavigate } from "react-router"
import Navbar from './../components/Navbar';
import { useFavoris } from "../context/FavorisContext";
import lesRecettes from "../data/recettes_cuisine.json"
import { ArrowLeftIcon } from "@phosphor-icons/react";
import Card from './../components/Card';

export default function Favoris() {

    const navigate = useNavigate()
    const { favoris } = useFavoris()
    const recettesFavorite =
        lesRecettes.filter(recette =>
            favoris.includes(String(recette.id))
        )

    return (
        <div className="content">
            <div className="title">
                <ArrowLeftIcon size={24} onClick={() => navigate(-1)} style={{ cursor: "pointer" }} />
                <h3>Mes favoris</h3>
            </div>
            {recettesFavorite.length === 0 ? (
                <p>Aucune recette favori.</p>
            ) : (
                <div className="liste-recettes">
                    {recettesFavorite.map((recette) => (
                        <NavLink
                            key={recette.id}
                            to={`/recette/${recette.id}`}
                            className="card-link">
                            <Card content={recette} />
                        </NavLink>
                    ))}
                </div>
            )}
            <Navbar />
        </div>
    )
}
import { NavLink } from "react-router"
import Card from "../components/Card"
import lesRecettes from "../data/recettes_cuisine.json"
import { useIngredient } from "../context/IngredientContext"
import Navbar from "../components/Navbar"

export default function Recette() {

    const { ingredient } = useIngredient()

    const recettesFiltrees = lesRecettes.filter((recette) =>
        recette.ingredients.some((ingredientRecette) =>
            ingredient.some((ingredientFrigo) =>
                ingredientRecette.nom.toLowerCase().includes(ingredientFrigo.nom.toLowerCase())
            )
        )
    );

    return (
        <div>
            <h1>Résultats de recherche</h1>
            {recettesFiltrees.length === 0 ? (
                <p>Aucune recette trouvée avec vos ingrédients.</p>
            ) : (
                <div className="liste-recettes">
                    {recettesFiltrees.map((recette) => (
                        <NavLink
                            key={recette.id}
                            to={`/recette/${recette.id}`}
                            className="card-link">
                            <Card content={recette} />
                        </NavLink>

                    ))}
                </div>
            )}
            <Navbar/>
        </div>

    )
}
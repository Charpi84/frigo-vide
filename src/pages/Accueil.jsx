import { NavLink, useNavigate } from "react-router";
import { useIngredient } from "../context/IngredientContext";
import Ingredients from './../components/Ingredients';
import Navbar from './../components/Navbar';

export default function Accueil() {

  const { len, ingredient, currentIngredient, setCurrentIngredient, addIngredient } = useIngredient()
  let navigate = useNavigate()
  return (
    <div>
      <h1>Vous avez: {len} ingredients</h1>
      <div className="editor">
        <input type="text" name="tache" id="tache" value={currentIngredient} onChange={(e) => { setCurrentIngredient(e.target.value) }} />
        <div className="btn" onClick={addIngredient}>Ajouter l'ingredient</div>
        <div className="liste">
          {
            ingredient.map((elt) => {
              return <Ingredients key={elt.id} content={elt} />
            })
          }
          <button onClick={() => navigate("/recette")}>Rechercher</button>
        </div>
      </div>
      <Navbar />
    </div>

  )
}
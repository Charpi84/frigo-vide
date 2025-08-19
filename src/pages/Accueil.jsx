import { useNavigate } from "react-router";
import { useIngredient } from "../context/IngredientContext";
import Ingredients from './../components/Ingredients';
import Navbar from './../components/Navbar';
import { useState } from "react";

export default function Accueil() {

  const { ingredient, currentIngredient, setCurrentIngredient, addIngredient } = useIngredient()
  const navigate = useNavigate()
  const [accueil, setAccueil] = useState("true")

  return (
    <div className="content">
      {accueil ? (
        <div className="accueil">
          <div className="accueil-title">
            <h1>Frigo Vide</h1>
          </div>
          <div className="accueil-img">
            <img src="images/frigo.png" alt="frigo" />
          </div>
          <div className="accueil-slogan">
            <p>L’application qui t’aide à mieux manger en utilisant tes restes et en économisant au maximum !</p>
          </div>
          <div className="accueil-btn">
            <div className="btn" onClick={() => setAccueil(false)}>Qu'y a t-il dans ton frigo?</div>
          </div>
        </div>
      ) : (
        <>
          <div className="title">
            <h3>Ajouter des ingrédients</h3>
          </div>
          <div className="editor">
            <input
              type="text"
              className="ingredient-input"
              value={currentIngredient}
              onChange={(e) => setCurrentIngredient(e.target.value)}
            />
            <div className="btn" onClick={addIngredient}>
              Ajouter l'ingrédient
            </div>
            <div className="liste">
              <h2>Dans mon frigo, il y a :</h2>
              {ingredient.map((elt) => (
                <Ingredients key={elt.id} content={elt} />
              ))}
            </div>
            <button onClick={() => navigate("/recette")} className="btn-primary">
              GO
            </button>
            <Navbar />
          </div>
        </>
      )}
    </div>
  );
}
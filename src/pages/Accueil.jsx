import { NavLink } from "react-router";

export default function Accueil() {



    return (
        <div>
            <h1>Voici la Home Page</h1>
            <div className="editor">
                <input type="text" name="tache" id="tache" value={currentIngredient} onChange={(e) => { setCurrentIngredient(e.target.value) }} />
                <div className="btn" onClick={addIngredient}></div>

                <NavLink to={'/Favoris'}>Aller à la page Favoris</NavLink>
            </div>
        </div>

            )
}
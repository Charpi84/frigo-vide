import { NavLink } from "react-router"

export default function Recette(){


    return(
        <div>
            <h1>Voici les recette </h1>
            <NavLink to={'/'}>Retour à l'accueil</NavLink> <br/>
            <NavLink to={'/favoris'}>Retour à la page Favoris</NavLink>
        </div>

    )
}
import { NavLink, useParams } from "react-router"

export default function RecetteDetail(){

    const {id} = useParams()

    return(
        <div>
            <h1>Voici la recette n° {id} </h1>
            <NavLink to={'/'}>Retour à l'accueil</NavLink> <br/>
            <NavLink to={'/favoris'}>Retour à la page Favoris</NavLink>
        </div>

    )
}
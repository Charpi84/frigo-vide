import { HouseIcon, ListBulletsIcon, BookIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router";
import { useFavoris } from "../context/FavorisContext";
export default function Navbar() {

    const { favoris } = useFavoris()
    return (
        <div className="navbar">
            <NavLink to="/" end>
                <HouseIcon size={24} />
            </NavLink>

            <NavLink to="/recette">
                <ListBulletsIcon size={24} />
            </NavLink>

            <NavLink to="/favoris">
                <BookIcon size={24} />
                {favoris.length > 0 &&  (
                    <span className="badge">{favoris.length}</span>
                )}
            </NavLink>
        </div>
    )
}

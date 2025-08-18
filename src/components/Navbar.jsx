import { HouseIcon, ListBulletsIcon, BookIcon } from "@phosphor-icons/react";
import { NavLink } from "react-router";
export default function Navbar() {
    return (
        <div className="navbar">
            <NavLink to={'/'}>
                <HouseIcon size={24} color="white" />
            </NavLink>
            <NavLink to={'/recette'}>
                <ListBulletsIcon size={24} color="white" />
            </NavLink>
            <NavLink to={'/favoris'}>
                <BookIcon size={24} color="white" />
            </NavLink>


        </div>
    )
}

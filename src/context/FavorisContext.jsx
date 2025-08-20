import { createContext, useState, useEffect, useContext } from "react";

const FavorisContext = createContext()

export default function FavorisProvider({ children }) {

    const [favoris, setFavoris] = useState(() => {

        const mesFavoris = localStorage.getItem("mesFavoris")

        if (mesFavoris) {
            return JSON.parse(mesFavoris)
        } else {
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem("mesFavoris", JSON.stringify(favoris))
    }, [favoris])



    function toggleFav(id) {
        if (favoris.includes(id)) {
            setFavoris(favoris.filter(elt => elt !== id))
        } else {
            setFavoris([...favoris, id])
        }
    }

    function isFavoris(id) {
        return favoris.includes(String(id))
    }

    return(
        <FavorisContext.Provider value={{favoris, setFavoris, toggleFav, isFavoris }}>
            {children}
        </FavorisContext.Provider>
    )
}

export function useFavoris(){
    return useContext(FavorisContext)
}


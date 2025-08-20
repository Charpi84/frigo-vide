import { createContext, useContext, useState } from "react";

const IngredientContext = createContext()

export default function IngredientProvider({ children }) {
    const [ingredient, setIngredient] = useState([])
    const [currentIngredient, setCurrentIngredient] = useState("")


    function addIngredient() {
        if (currentIngredient.trim() !== "") {

            let ingredientToAdd = {
                id: Date.now(),
                nom: currentIngredient
            }
            setIngredient([...ingredient, ingredientToAdd]);
            setCurrentIngredient("");
        }
    }

    function removeIngredient(id) {
        setIngredient(ingredient.filter(elt =>  elt.id !== id ))
    }

    return (
        <IngredientContext.Provider value={{ingredient, currentIngredient, addIngredient, removeIngredient, setCurrentIngredient}}>
            {children}
        </IngredientContext.Provider>
    )
}

export function useIngredient(){
    return useContext(IngredientContext)
}




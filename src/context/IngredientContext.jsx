import { createContext, useContext, useState, useEffect } from "react";

const IngredientContext = createContext()

export default function IngredientProvider({ children }) {
    const [ingredient, setIngredient] = useState([])
    const [currentIngredient, setCurrentIngredient] = useState("")
    const [len, setLen] = useState(ingredient.length)

    useEffect(() => {
        setLen(ingredient.length)
    }, [ingredient])

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
        <IngredientContext.Provider value={{ingredient, currentIngredient, len, addIngredient, removeIngredient, setCurrentIngredient}}>
            {children}
        </IngredientContext.Provider>
    )
}

export function useIngredient(){
    return useContext(IngredientContext)
}




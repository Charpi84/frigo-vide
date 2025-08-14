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
            setIngredient([...ingredient, currentIngredient.trim()]);
            setCurrentIngredient("");
        }
    }

    function removeIngredient(index) {
        const newList = ingredient.filter((_, i) => i !== index);
        setIngredient(newList);
    }

    return (
        <IngredientContext.Provider value={{ingredient, currentIngredient, len, addIngredient, removeIngredient}}>
            {children}
        </IngredientContext.Provider>
    )
}

export function useIngredient(){
    return useContext(IngredientContext)
}




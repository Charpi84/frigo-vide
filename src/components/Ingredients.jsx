import { XIcon } from "@phosphor-icons/react"
import { useIngredient } from "../context/IngredientContext"


export default function Ingredients({content}) {

    const {removeIngredient} = useIngredient()
  return (
    <div className="ingredient">
        <h4>{content.nom}</h4>
        <XIcon size={24} onClick={() => removeIngredient(content.id)}/>
    </div>
  )
}

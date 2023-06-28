import Card from "./Card"
import logements from "../data/logements.json"

function CardsList() {
    return (
        <>
            {logements.map((logement) => (
                Card(logement) 
            ))}
        </>
    )
}

export default CardsList
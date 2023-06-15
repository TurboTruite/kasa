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
    // const card = props.logements.map((logement) => 
    //     <Card text={logement.title} />
    // );
    // return (
    //     {card}
    // )



export default CardsList
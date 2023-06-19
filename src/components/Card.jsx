import { Link } from "react-router-dom"

function Card(props) {
    const title=props.title
    const id=props.id
    return (
        <div className='background--card' key={id}>
            <Link to={"/logement/" + id}>{title}</Link>
        </div>
    )
}

export default Card
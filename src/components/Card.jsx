import { Link } from "react-router-dom"
import React from "react"

function Card(props) {
    const title=props.title
    const id=props.id
    const cover=props.cover
    return (
        <>
        <div className="card" key={id}>
            <img src={cover} alt="présentation du bien" />
            <div className='background--card' >
                <Link to={"/logement/" + id}>{title}</Link>
            </div>

        </div>

        </>

    )
}

export default Card
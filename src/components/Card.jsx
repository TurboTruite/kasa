function Card(props) {
    const title=props.title
    const id=props.id
    return (
        <div className='background--card' key={id}>
            <h2>{title}</h2>
        </div>
    )
}

export default Card
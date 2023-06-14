function Card(props) {
    const title=props.title
    return (
        <div className='background--card'>
            <h2>{title}</h2>
        </div>
    )
}

export default Card
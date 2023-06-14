import banner from "../assets/banner.jpg"

function Banner() {
    return (
        <div className='banner'>
            <img src={banner} alt="Bord de mer" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner
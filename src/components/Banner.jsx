

function Banner({bannerImg, bannerText}) {
    return (
        <div className='banner'>
            <img src={bannerImg} />
            <h1>{bannerText}</h1>
        </div>
    )
}

export default Banner
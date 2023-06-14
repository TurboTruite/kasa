import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Banner from "../components/Banner"
import CardsList from "../components/CardsList"


function Home() {

    return (
        <div>
            <Header />
            <Banner />
            <div className='background'>
                <CardsList />
            </div>
            <Footer />
        </div>
    )
}

export default Home
import { useParams, Navigate } from 'react-router-dom'
import logements from "../data/logements.json"
import Gallery from '../components/Gallery'
import Header from '../components/Header'
import Footer from '../components/Footer'



function Logement() {

    const { linkId } = useParams()
    const logement = logements.filter((logement) => logement.id === linkId)

    if (!logements.map(logement => logement.id).includes(linkId)) {
        return <Navigate to="/pageNotFound"/>
    }

    return (
        
        <>
            <Header />
            <Gallery logement={logement} />
            <Footer />
        </>

    )
}

export default Logement;
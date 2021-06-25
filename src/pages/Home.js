import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import InfoSection from '../components/InfoSection'
import {homeObjOne, homeObjThree, homeObjFour} from '../components/InfoSection/Data'
import Services from '../components/Services'
import Footer from '../components/Footer'



const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }



    return (
        <>
            {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
            {/* <Navbar toggle={toggle}/> */}
            <Header />
            <InfoSection {...homeObjOne}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
            <Footer />

            

        </>
    )
}

export default Home

import React from 'react'

import About from '../About/About'
import Frontpage from '../FrontPage/Frontpage'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../../Footer/Footer'

function Home() {
    return (
        <>
            <Frontpage />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;

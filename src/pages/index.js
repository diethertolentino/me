import React from 'react'
import HeroInfo from '../components/HeroInfoSection'
import Navbar from '../components/Navbar'
import Works from '../components/Works'
import Skills from '../components/Skills'
import AboutMe from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Aos from 'aos'
import { useEffect } from 'react'
import Sidebar from '../components/Sidebar'

const Home = () => {
  
  useEffect(() => {
    Aos.init({once: true});
}, []);
  return (
    <>
    
    <Navbar />
    <HeroInfo />
    <Works />
    <Skills />
    <AboutMe />
    <Contact />
    <Footer />
    </>
  )
}

export default Home
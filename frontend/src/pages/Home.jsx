import React from 'react'
import HeroSection from '../components/HeroSection'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import About from '../components/About'
import Qualities from '../components/Qualities'



const Home = () => {
    return (
      <>
      <HeroSection/>
      <Menu/>
      <Reservation/>
      <About/>
      <Qualities/>
      <Footer/>
      </>
  )
}

export default Home
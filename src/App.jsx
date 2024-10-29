import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import LandingAnimation from './components/LandingAnimation'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

const locomotiveScroll = new LocomotiveScroll();

  <React/>
  return (
    <div className='w-full max-h-min bg-zinc-950 text-zinc-100'>
    <Navbar/>
    <LandingPage/>
    <LandingAnimation/>
    <About/>
    <Eyes/>
    <Features/>
    <Cards/>
    <Footer/>
  </div>
  )
}

export default App


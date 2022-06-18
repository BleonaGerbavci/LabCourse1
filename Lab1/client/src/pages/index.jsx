import React, {useState}from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import Footer from '../components/footer/footer';



const Home = () => {
    const [isOpen, setIsOpen] =useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
        <Sidebar isOpen={isOpen} toggle ={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <Footer />

    </>
  )
}

export default Home 
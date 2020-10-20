import React, {useState} from 'react'
import { HeroSection } from '../components/HeroSection';
import Navbar from '../components/Navbar';

export const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default Home;

import React from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Achievements from '../components/Achievements';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Experience />
      <Achievements />
      <Footer />
    </div>
  )
}

export default Home;
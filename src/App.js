import React from 'react'
// import {Route} from 'react-router-dom'

import './App.css';
import Home from './Home'
import AboutUs from './AboutUs'
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import Form from './Form';
import FormData from './FormData';
import Whatsapp from './Whatsapp';
import Header from './Header';
import HomeCarousel from './HomeCarousel';
// import HomeSlick from './HomeSlick';

function App() {
  return (
   
    <div className="app-conatiner">
      <Header/>    
      <HomeCarousel/>
      <Home />
      <AboutUs />
      <WhyChooseUs />
      <HowItWorks />
      <FormData/>     
      <Form />
      <Whatsapp/>
      <Footer/>
    </div>  
  )
}

export default App;

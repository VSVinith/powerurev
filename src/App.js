import React from 'react'
import './App.css';
import Home from './Home'
import AboutUs from './AboutUs'
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import Form from './Form';
import Whatsapp from './Whatsapp';
import Header from './Header';
import HomeCarousel from './HomeCarousel';
// import HomeSlick from './HomeSlick';

function App() {
  return (
   
    <div className="app-conatiner">
      <Header/>    
      <HomeCarousel/>
      <Home/>
      <AboutUs/>
      <WhyChooseUs/>
      <HowItWorks/>      
      <Form/>
      <Whatsapp/>
      <Footer/>
    </div>  
  );
}

export default App;

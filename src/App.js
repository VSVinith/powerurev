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
import ReviewsCarousel from './ReviewsCarousel';
// import HomeSlick from './HomeSlick';

const reviewsData = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

function App() {
  return (
   
    <div className="app-conatiner">
      <Header/>
      <Form />    
      <HomeCarousel/>
      <Home />
      <AboutUs />
      <WhyChooseUs />
      <HowItWorks />
      <ReviewsCarousel reviewsData={reviewsData}/>
      <FormData/>      
      <Whatsapp/>
      <Footer/>
    </div>  
  )
}

export default App;

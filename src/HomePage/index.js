import Home from '../Home'
import AboutUs from '../AboutUs'
import WhyChooseUs from '../WhyChooseUs';
import HowItWorks from '../HowItWorks';
import Footer from '../Footer';
import Form from '../Form';
import FormData from '../FormData';
import Whatsapp from '../Whatsapp';
import Header from '../Header';
import HomeCarousel from '../HomeCarousel';
import Testimonials from '../Testimonials';


  
function HomePage()  {
    return (
        <div className="app-home-conatiner">
            <Header/>
            <Form />    
            <HomeCarousel/>
            <Home/>
      <AboutUs />
      <WhyChooseUs />
      <HowItWorks />
      {/* <ReviewsCarousel reviewsData={reviewsData}/> */}
      <Testimonials/>
      <FormData/>      
      <Whatsapp/>
      <Footer/>
        </div>
    )
}
export default HomePage;
import './index.css'
// import Jello from 'react-reveal/Bounce';
import parking from '../Assets/Parking.png'

const AboutUs = () =>  (
    <div className="about-container" id="aboutus">
        <h1 className="au-heading">About Us</h1>
        <div className="container-1"> 
            <div className="content-class-1">
              <h1 className="au-heading au-font">We don't like compromises, be it with the environment or the quality of our equipment.</h1>
              <p className="au-description">We're India's fastly growing EV charging points providing company. We're on a mission to provide a comprehensive charging experience at affordable rates.</p>
              <p className="au-description">With an experience of over 15 years, our highly skilled technicians are experts in installing charging stations at homes, condos, retail stores, housing apartments, hotels, shopping complexes.</p>
            </div>
            <img alt="ev img1" className="about-car-img-1" src={parking}/>    
        </div>
        {/* <div className="container-2">
            <img alt="img2" className="about-car-img-2" src="https://images.unsplash.com/photo-1623079398404-4a024f3f4aee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGV2JTIwdmVoaWNsZXMlMjBjaGFyZ2luZyUyMHN0YXRpb25zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            <div className="content-class-2">
               <p className="description">Affordable Monthly Payment Options With 0% Interest We want to help you find the perfect electric vehicle charger for your…</p>
               <p className="description">Consider the experts in design, planning, installation, networking, craftsmanship, service and support. Let Smart Charge America provide a smart solution for your business today.</p>
            </div>
        </div> */}
    </div>
)

export default AboutUs
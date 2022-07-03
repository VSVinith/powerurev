import './index.css'
// import Jello from 'react-reveal/Bounce';
import parking from '../Assets/Parking.png'

const AboutUs = () => (
    <div className="about-container" id="aboutus">
        <h1 className="au-heading">About Us</h1>
        <div className="container-1">
            <div className="content-class-1">
                <h1 className="au-heading au-font">We don't like compromises, be it with the environment or the quality of our equipment.</h1>
                <p className="au-description">We're India's fastly growing EV charging points providing company. We're on a mission to provide a comprehensive charging experience at affordable rates.</p>
                <p className="au-description">With an experience of over 15 years, our highly skilled technicians are experts in installing charging stations at homes, condos, retail stores, housing apartments, hotels, shopping complexes.</p>
            </div>
            <img alt="ev img1" className="about-car-img-1" src={parking} />
        </div>
    </div>
)

export default AboutUs
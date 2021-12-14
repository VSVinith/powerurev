import './index.css'
import electrician from '../Assets/Electrician.jpg'
const WhyChooseUs = () =>  (
    <div className="why-container" id="whyus">
        <div>
        <h1 className="wcu-heading">Why Choose Powerurev?</h1>
        <div className="container-1"> 
            <div className="content-class-1 why-content">
              <p className="wcu-description">Indian bred company with a team of highly qualified electrical technicians.</p>
              <p className="wcu-description">High Quality products and services at affordable rates.</p>
              <p className="wcu-description">Experienced technicians with over 15 years of collective experience.</p>
              <p className="wcu-description">Adaptable to different setups and technologies.</p>
              <p className="wcu-description">We provide induction prior to the installment, a user manual for lifelong service, and prompt service to solve all your doubts.</p>
            </div>
            <img alt="ev img1" className="why-car-img" src={electrician}/>    
        </div>
        </div>
    
    </div>
)

export default WhyChooseUs
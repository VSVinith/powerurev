import './index.css'
import Carousel from 'react-bootstrap/Carousel'
import LightSpeed from 'react-reveal/LightSpeed';
import electrician from '../Assets/Electrician.jpg'
import image1 from '../Assets/Problem_Statement.png'
import meter from '../Assets/meter.png'

const Home = () => (
    <>
        <div className="home-container">
            <div className="home-content">
                <Carousel className="home-car-img" id="home">
                    <Carousel.Item interval={10000}>
                        <img
                            className="d-block w-100 home-car-img"
                            src={image1} alt="image1"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <img
                            className="d-block w-100 home-car-img"
                            src={meter} alt="image1"
                        />

                    </Carousel.Item>
                </Carousel>
                {/* <img alt="ev img" className="home-car-img" src={image1}/> */}
                <div className="content-class">
                    <LightSpeed left><h1 className="heading-hp">Power Up Your Electric Vehicle</h1></LightSpeed>
                    <p className="description-hp">Owning an electric vehicle is becoming easier, but what about charging it?<br />It is estimated that India's EV market will grow at a compound annual growth rate of more than 35%. In this fast-growing market, the shortage of EV charging is bound to happen.</p>
                    <p className="description-hp">That's where we bring a one-stop solution to all your charging-related problems with your own charging plug, made possible by Powerurev.</p>
                    <p className="description-hp">100% Secure Network, Prompt Service. Highly Experienced Engineers. A-Grade Equipment. Affordable Pricing 2-Year Warranty. No Additional Costs, Pay What You See.</p>
                </div>
            </div>
            <div>
                <div className="services-container">
                    <h1 className="services-title">Having Your Own EV Charging Point Just Got Easy</h1>
                    <p className="description-hp">We bring our EV charging services right to your doorsteps.</p>
                </div>
                <div className="our-services-container">
                    <div>
                        <h1 className="heading-hp">Our Services</h1>
                        {/* <img className="electrician-img-mobile" alt="technician img" src={electrician}/> */}
                        <ol className="gradient-list">
                            <li className="li-width">End-to-end service available 24*7 from installation to maintainence.</li>
                            <li className="li-width">Available for cars, scooters, buses, bikes and bicycles.</li>
                            <li className="li-width">Adaptable to diverse scenarios: housing apartments, malls, offices, public spaces, etc.</li>
                            <li className="li-width">Different charging standards to choose from, cause we know one size doesn't fit all.</li>
                        </ol>
                    </div>
                    <img className="electrician-img" alt="technician img" src={electrician} />
                </div>
            </div>
        </div>
    </>
)

export default Home
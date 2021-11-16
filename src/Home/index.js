import './index.css'
import LightSpeed from 'react-reveal/LightSpeed';

const Home = () =>  (
    <>
    <div className="home-container" id="home"> 
        <div className="home-content">
        <img alt="ev img" className="home-car-img" src="https://techcrunch.com/wp-content/uploads/2020/03/gas-vs-electric.png"/>
        <div className="content-class">
            <LightSpeed left><h1 className="heading-hp">Power Up Your Electric Vehicle</h1></LightSpeed>
            <p className="description-hp">Owning an electric vehicle is becoming easier, but what about charging it?<br/>It is estimated that India's EV market will grow at a compound annual growth rate of more than 35%. In this fast-growing market, the shortage of EV charging is bound to happen.</p>
            <p className="description-hp">That's where we bring a one-stop solution to all your charging-related problems with your own charging plug, made possible by Powerurev.</p>  
            <p className="description-hp">100% Secure Network, Prompt Service. Highly Experienced Engineers. A-Grade Equipment. Affordable Pricing 2-Year Warranty. No Additional Costs, Pay What You See.</p>
        </div> 
        </div>
        <div>
            <div>
                <h1 className="services-title">Having Your Own EV Charging Point Just Got Easy</h1>
                <p className="description-hp">We bring our EV charging services right to your doorsteps.</p>
            </div>
            <div>
                <h1 className="heading-hp">Our Services</h1>
                <ol class="gradient-list">
                    <li>End-to-end service available 24*7 from installation to maintainence.</li>
                    <li>Available for cars, scooters, buses, bikes and bicycles.</li>
                    <li>Adaptable to diverse scenarios: housing apartments, malls, offices, public spaces, etc.</li>
                    <li>Different charging standards to choose from, cause we know one size doesn't fit all.</li>
                </ol>
            </div>
        </div> 
    </div>
    </>
)

export default Home
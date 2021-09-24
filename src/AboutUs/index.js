import './index.css'
import Jello from 'react-reveal/Bounce';

const AboutUs = () =>  (
    <div className="home-app-container" id="aboutus">
        <img alt="ev img1" className="car-img" src="https://afdc.energy.gov/assets/images/fuels/34795_Electricity-20206e2c.jpg"/>
        <Jello><h1 className="heading">About EV vehicles</h1></Jello>
        <p className="description">The fuel efficiency of an EV may be measured in kilowatt-hours (kWh) per 100 miles. To calculate the cost per mile of an EV, the cost of electricity (in dollars per kWh) and the efficiency of the vehicle (how much electricity is used to travel 100 miles) must be known. If electricity costs $0.13 per kWh and the vehicle consumes 33 kWh to travel 100 miles, the cost per mile is about $0.04.</p>
    </div>
)

export default AboutUs
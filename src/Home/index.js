import './index.css'
import LightSpeed from 'react-reveal/LightSpeed';

const Home = () =>  (
    <>
    <div className="home-app-container" id="home">
        
        <img alt="ev img" className="car-img" src="https://techcrunch.com/wp-content/uploads/2020/03/gas-vs-electric.png"/>
        <LightSpeed left><h1 className="heading">Power your EV vehicles</h1></LightSpeed>
        <p className="description">Many PEV owners will be able to meet their daily driving range requirements by charging overnight with Level 1 equipment, requiring no additional cost or installation, provided that a power outlet on a dedicated branch circuit is available near their parking location. For drivers with less regular schedules, or longer commutes, Level 2 charging equipment can be installed. State and utility incentives may be available to help offset the cost of charging equipment.</p>    
    </div>
    </>
)

export default Home
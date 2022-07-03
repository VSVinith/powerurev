// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-bootstrap/Carousel'
import './index.css'
import banner1 from "../Assets/Banner1.png"
import banner2 from "../Assets/Banner2.jpg"
import banner3 from "../Assets/Banner3.png"

const HomeCarousel = () => (
  <Carousel className="carousel-container" id="home">
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 carousel-image"
        src={banner2} alt="image1"
      />
      <Carousel.Caption>
        <h1>Self-sustain your EV charging needs with Powerurev.</h1>
        <h1>Delivering the latest technology to your doorsteps.</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100 carousel-image"
        src={banner1} alt="image1"
      />
      <Carousel.Caption>
        <h1>One-stop, seamless EV charging experience in your own locality.</h1>
        <h1>Get a hassle-free EV charging solution.</h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
      <img
        className="d-block w-100 carousel-image"
        src={banner3} alt="image1"
      />
      <Carousel.Caption>
        <h1>Powerful charging calls for smart technology.</h1>
        <h1>Take the power of your EV in your hands with Powerurev.</h1>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

)

export default HomeCarousel
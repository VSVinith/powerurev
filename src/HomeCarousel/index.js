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

/* <div>
        <Carousel infiniteLoop autoPlay>
            <div className="image">
                <img src="https://indbiz.gov.in/wp-content/uploads/2019/03/India-aims-to-become-a-global-leader-in-EVs.jpg" alt="image1"/>
            </div>
            <div className="image">
                <img src="https://img.etimg.com/thumb/msid-84224120,width-1440,height-1080,imgsize-324695,resizemode-8,quality-100/small-biz/trade/exports/insights/the-ev-market-is-electrifying-but-it-needs-a-spark.jpg" alt="image2"/>
            </div>
            <div className="image">
                <img src="https://indbiz.gov.in/wp-content/uploads/2019/03/India-aims-to-become-a-global-leader-in-EVs.jpg" alt="image3"/>
            </div>
            <div className="image">
                <img src="https://indbiz.gov.in/wp-content/uploads/2019/03/India-aims-to-become-a-global-leader-in-EVs.jpg" alt="image4"/>
            </div>
        </Carousel>
     </div> */


     // <Carousel autoplay>
    //     <div className="carousel-image" >
    //         {/* <h1>Problem statement</h1>
    //         <img className="carousel-image" src="https://indbiz.gov.in/wp-content/uploads/2019/03/India-aims-to-become-a-global-leader-in-EVs.jpg" /> */}
    //     </div>
    //     <div className="carousel-image">
    //         <h1>Problem statement</h1>
    //     </div>
    //     <div className="carousel-image">
    //         <h1>Problem statement</h1>
    //     </div>
    // </Carousel>
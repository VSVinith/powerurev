// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from 'react-bootstrap/Carousel'
import './index.css'

const HomeCarousel = () => (
    <Carousel className="carousel-container">
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 carousel-image"
      src="https://indbiz.gov.in/wp-content/uploads/2019/03/India-aims-to-become-a-global-leader-in-EVs.jpg" alt="image1"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum. n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 carousel-image"
      src="https://indbiz.gov.in/wp-content/uploads/2019/03/India-aims-to-become-a-global-leader-in-EVs.jpg" alt="image1"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100 carousel-image"
      src="https://indbiz.gov.in/wp-content/uploads/2019/03/India-aims-to-become-a-global-leader-in-EVs.jpg" alt="image1"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
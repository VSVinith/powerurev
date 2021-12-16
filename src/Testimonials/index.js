import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiStarSFill } from 'react-icons/ri'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import './index.css'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Testimonials = () => (
  <>
    <h1 className="testimonial-title">Testimonials</h1>
    <p className="test-tagline">What our clients say about us</p>
    {/* <div className="testimonials"> */}
    <Carousel responsive={responsive} draggable={false}
      showDots={false} infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true} >
      <div className="testimonial-card">
        <p className="test-desc"><FaQuoteLeft className="quote-start" />A wonderful experience, from my initial call till installation, everything went so smoothly, I would recommend powerurev to everyone out there without second thought...
          <FaQuoteRight className="quote-end" /></p>
        {/* <div className="stars-container">
          <RiStarSFill className="stars" />
          <RiStarSFill className="stars" />
          <RiStarSFill className="stars" />
          <RiStarSFill className="stars" />
        </div> */}
        <p className="test-name">Niranjan</p>
        <p className="test-loc">Khairatabad</p>
      </div>
      <div className="testimonial-card ">
        <p className="test-desc"><FaQuoteLeft className="quote-start" />My electric vechile is complimented amazingly by powerurev team's charging installation, they look for customer satisfaction more than profit margins..<FaQuoteRight className="quote-end" /></p>
        {/* <div className="stars-container">
          <RiStarSFill className="stars" />
          <RiStarSFill className="stars" />
          <RiStarSFill className="stars" />
          <RiStarSFill className="stars" />
        </div> */}
        <p className="test-name">Prashanth</p>
        <p className="test-loc">Bachupally</p>
      </div>
      <div className="testimonial-card">
        <p className="test-desc"><FaQuoteLeft className="quote-start" />I actually didn't expect them to be soo good, their customer first approach, affordability and sincerity in working stands out among its peers..keep on going powerurev...<FaQuoteRight className="quote-end" /></p>
        {/* <div className="stars-container">
          <RiStarSFill className="stars" />
          <RiStarSFill className="stars" />
          <RiStarSFill className="stars" />
          <RiStarSFill className="stars" />
        </div> */}
        <p className="test-name">Vinith</p>
        <p className="test-loc">Punjagutta</p>
      </div>
      <div className="testimonial-card">
        <p className="test-desc"><FaQuoteLeft className="quote-start" />One of the best times to get customer feedback is straight after you’ve solved a problem for them.<FaQuoteRight className="quote-end" /></p>
        {/* <div className="stars-container">
          <RiStarSFill className="stars" />
          <RiStarSFill className="stars" />
          <RiStarSFill className="stars" />
          <RiStarSFill className="stars" />
        </div> */}
        <p className="test-name">Akhil</p>
        <p className="test-loc">Suchitra</p>
      </div>
    </Carousel>
    {/* </div> */}
  </>
)

export default Testimonials
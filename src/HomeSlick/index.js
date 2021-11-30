import Slider from 'react-slick'
import { Component } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'


class HomeSlick extends Component {
  render() {
    const settings = {
      className: "slides",
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      //speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      //adaptiveHeight: true,
      //variableHeight: true,
    }
    return (
      <>
        <h1 className="title">Thinking how to install your electric vehicle at individual house</h1>
        <div className="slider-container">
          <Slider {...settings}>
            <div >
              {/* <h1 className="title">Thinking how to install your electric vehicle at individual house</h1> */}
              <img width="100%" alt="img1" src="https://media.istockphoto.com/photos/white-electric-suv-recharging-in-parking-garage-picture-id601378566?b=1&k=20&m=601378566&s=170667a&w=0&h=s3A14iOyOpekAA7zOOt4Z4zikt-JJDtZ1CoVpSI7IW4=" />
              {/* <h1 className="description">We got you covered, we provide you an adaptable solution to install your EV charger</h1> */}
            </div>
            <div className="second-slide">

              <img width="100%" alt="img1" src="https://media.istockphoto.com/photos/white-electric-suv-recharging-in-parking-garage-picture-id601378566?b=1&k=20&m=601378566&s=170667a&w=0&h=s3A14iOyOpekAA7zOOt4Z4zikt-JJDtZ1CoVpSI7IW4=" />

            </div>
            <div className="third-slide">
              {/* <h1 className="title">Thinking how to install your electric vehicle at individual house</h1> */}
              <img width="100%" alt="img1" src="https://media.istockphoto.com/photos/white-electric-suv-recharging-in-parking-garage-picture-id601378566?b=1&k=20&m=601378566&s=170667a&w=0&h=s3A14iOyOpekAA7zOOt4Z4zikt-JJDtZ1CoVpSI7IW4=" />
              {/* <h1 className="detail">We got you covered, we provide you an adaptable solution to install your EV charger</h1> */}
            </div>
            <div className="fourth-slide">
              {/* <h1 className="title">Thinking how to install your electric vehicle at individual house</h1> */}
              <img width="100%" alt="img1" src="https://media.istockphoto.com/photos/white-electric-suv-recharging-in-parking-garage-picture-id601378566?b=1&k=20&m=601378566&s=170667a&w=0&h=s3A14iOyOpekAA7zOOt4Z4zikt-JJDtZ1CoVpSI7IW4=" />
              {/* <h1 className="detail">We got you covered, we provide you an adaptable solution to install your EV charger</h1> */}
            </div>
          </Slider>
        </div>
        <h1 className="detail">We got you covered, we provide you an adaptable solution to install your EV charger</h1>
      </>
    )
  }
}

export default HomeSlick
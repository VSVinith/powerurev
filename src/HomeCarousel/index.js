import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './index.css'

const HomeCarousel = () => (
    <div>
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
    </div>
)

export default HomeCarousel
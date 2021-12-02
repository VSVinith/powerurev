import './index.css'
// import {Link} from 'react-router-dom'
import image from '../Assets/ev-logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaRegCopyright } from 'react-icons/fa'

const Footer = () => (
    <div className="footer-sections-container">
        <div className="first-footer-card ">
            <div className="flex-row" >
                <img className="logo-footer" alt="footer logo" src={image} />
            </div>
            <div className="company-name-card">
                <FaRegCopyright className="copyright" />
                <h1 className="company-name">2021 POWERUREV</h1>
            </div>
            <h1 className="company-name-rights">All Rights Reserved</h1>
        </div>
        <div className="links">
            <a className="link" href="/">Home</a>
            <a className="link" href="/#aboutus">About</a>
            <a className="link" href="/#howitworks">HowItWorks</a>
            <a className="link" href="/#whyus">WhyChooseUs</a>
        </div>
        <div className="links">
            <a className="link" href="privacypolicy">Privacy Policy </a>
            <a className="link" href="t&c">Terms & Conditions </a>
        </div>
        <div>
            <img className="msme-logo" alt="msme logo" src="https://i0.wp.com/lamodainstitute.in/wp-content/uploads/2017/11/msme-logo.jpg?ssl=1" />
        </div>
        <div className="icons-container">
            <h5 className="follow">Follow Us</h5>
            <div className="icons">
                <a className="footer-icon" href="https://www.facebook.com/" rel="noreferrer" target="_blank"><FaFacebook className="icon sm-icon" /></a>
                <a className="footer-icon" href="https://www.instagram.com/accounts/login/" rel="noreferrer" target="_blank"><FaInstagram className="icon sm-icon" /></a>
                <a className="footer-icon" href="https://twitter.com/explore" rel="noreferrer" target="_blank"><FaTwitter className="icon sm-icon" /></a>
            </div>
        </div>
    </div>
)

export default Footer
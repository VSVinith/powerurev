import './index.css'
// import {Link} from 'react-router-dom'
import {FaFacebook, FaInstagram, FaTwitter, FaRegCopyright} from 'react-icons/fa'

const Footer = () => (
        <div className="footer-sections-container">
            <div className="">
                <div className="flex-row" >
                    <img className="logo-footer" alt="footer logo" src="https://t3.ftcdn.net/jpg/03/04/14/58/240_F_304145804_prcWDwqwbBhXs5bDfbTtldHCdLfd8oXn.jpg"/>
                    <h1 className="company-name">PowerurEV</h1>
                    <FaRegCopyright className="copyright"/>

                </div>
                <p className="address">niranjan096@gmail.com</p>
                <p className="address">6-3-83/4, Prem Nagar</p>
                <p className="address">Hyderabad, Telangana</p>
            </div>
            <div className="links">
                <a className="link" href="#home">Home </a> 
                <a className="link" href="#aboutus">About </a> 
                <a className="link" href="#howitworks">HowItWorks </a> 
                <a className="link" href="#whyus">WhyChooseUs </a> 
            </div>
            <div className="links">
                <a className="link" href="privacypolicy">Privacy Policy </a> 
                <a className="link" href="t&c">Terms & Conditions </a>            
            </div>
            <div className="icons-container">
                <h5 className="">Follow Us</h5>
                <div className="">
                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><FaFacebook className="icon"/></a>
                    <a href="https://www.instagram.com/accounts/login/" rel="noreferrer" target="_blank"><FaInstagram className="icon"/></a>
                    <a href="https://twitter.com/explore" rel="noreferrer" target="_blank"><FaTwitter className="icon"/></a>
                </div>   
            </div>
        </div>
)

export default Footer
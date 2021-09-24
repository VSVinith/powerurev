import './index.css'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => (
    <div className="footer-container">
        <img className="logo-footer" alt="footer logo" src="https://t3.ftcdn.net/jpg/03/04/14/58/240_F_304145804_prcWDwqwbBhXs5bDfbTtldHCdLfd8oXn.jpg"/>
        <p className="address">niranjan096@gmail.com</p>
        <p className="address">6-3-83/4, prem nagar, Hyderabad, Telangana</p>
        <br/>
        <div className="icons-container">
           <FaFacebook className="icon"/>
           <FaInstagram className="icon"/>
           <FaTwitter className="icon"/>
        </div>   
    </div>
)

export default Footer
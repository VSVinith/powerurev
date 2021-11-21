import './index.css'
import {FaWhatsapp} from 'react-icons/fa'

const Whatsapp = () => (
      <>
      <a href="https://wa.link/uzmh8d" rel="noreferrer" target="_blank">
      <button className="feedback">
          <FaWhatsapp className="icon"/>
          <span className="text-class">Message Us</span>
      </button>
      </a>
      </>
)

export default Whatsapp
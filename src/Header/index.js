import { Navbar, NavDropdown, Container } from 'react-bootstrap' //import Nav if u use
import './index.css'
import image from '../Assets/ev-logo.png'

const Header = () => (
  <>
    <div className="navbar">
      <div className="power-navbar">
        <div>
          <a href="/">
            <img alt="logo" className="logo" src={image} />
          </a>
        </div>
        <ul className="nav-list nav-list-1">
          <li className="list-item-1"><a className="list-item" href="/">Home</a></li>
          <li className="list-item-1"><a className="list-item" href="/#aboutus">About Us</a></li>
          <li className="list-item-1"><a className="list-item" href="/#whyus">Why Choose Us</a></li>
          <li className="list-item-1"><a className="list-item" href="/#howitworks">How it works</a></li>
          <li className="list-item-1"><a href="/#form"><button className="form-btn">Get A Quote</button></a></li>
        </ul>
      </div>
    </div>
    <div className="mobile-nav">
      <Navbar className="mobile-nav-padding" bg="dark" variant="dark" expand="lg">
        <Container className="mobile-nav-container logo-position">
          <Navbar.Brand href="/"><img alt="logo" className="logo" src={image} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavDropdown.Item className="mobile-list-item" href="/">Home</NavDropdown.Item>
            <NavDropdown.Item className="mobile-list-item" href="/#aboutus">About Us</NavDropdown.Item>
            <NavDropdown.Item className="mobile-list-item" href="/#whyus">Why Choose Us</NavDropdown.Item>
            <NavDropdown.Item className="mobile-list-item" href="/#howitworks">How it works</NavDropdown.Item>
            <NavDropdown.Item className="mobile-list-item" href="/#form">Register</NavDropdown.Item>
            <NavDropdown.Divider />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  </>

)

export default Header
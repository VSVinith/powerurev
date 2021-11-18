// import * as ReactBootStrap from 'react-bootstrap';
import { Navbar, NavDropdown, Container } from 'react-bootstrap' //import Nav if u use
import './index.css'

const Header = () => (
  <>  <div className="navbar">
      <div className="power-navbar">       
          <div>
          <img alt="logo" className="logo" src="https://i.imgur.com/EXhJR5K.jpeg"/>
          
          </div>
          <span className="heading-title">PowerUrEV</span>
          <ul className="nav-list nav-list-1">
          
          <li className="list-item-1"><a className="list-item" href="#home">Home</a></li>
          <li className="list-item-1"><a className="list-item" href="#aboutus">About Us</a></li>
          <li className="list-item-1"><a className="list-item" href="#whyus">Why Choose Us</a></li>
          <li className="list-item-1"><a className="list-item" href="#howitworks">How it works</a></li>
          <li className="list-item-1"><a className="list-item" href="#formdata"><button className="form-btn">Get A Quote</button></a></li>
  
        </ul>
      </div>
      </div>
      <div className="mobile-nav">
      <Navbar className="mobile-nav-padding" bg="dark" variant="light" expand="lg">
        <Container className="mobile-nav-container logo-position">
          <Navbar.Brand href="#home"><img alt="logo" className="logo" src="https://i.imgur.com/EXhJR5K.jpeg"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="me-auto">
              <NavDropdown title="Menu" id="basic-nav-dropdown"> */}
                <NavDropdown.Item className="mobile-list-item" href="#home">Home</NavDropdown.Item>
                <NavDropdown.Item className="mobile-list-item" href="#aboutus">About Us</NavDropdown.Item>
                <NavDropdown.Item className="mobile-list-item" href="#whyus">Why Choose Us</NavDropdown.Item>
                <NavDropdown.Item className="mobile-list-item" href="#howitworks">How it works</NavDropdown.Item>
                <NavDropdown.Item className="mobile-list-item" href="#howitworks">Register</NavDropdown.Item>
                <NavDropdown.Divider />
              {/* </NavDropdown> */}
            {/* </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>

</>
    
)

export default Header
import * as ReactBootStrap from 'react-bootstrap';
import './index.css'

const Header = () => (
    <div className="App">
      <ReactBootStrap.Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="#home"><img alt="logo" className="logo" src="https://i.imgur.com/EXhJR5K.jpeg"/></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="navbar-nav-items">
    <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#aboutus">About Us</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#whyus">Why Choose Us</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#howitworks">How it works</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
    </div>
)

export default Header
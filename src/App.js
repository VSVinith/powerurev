import React from 'react'
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import Home from './Home'
import AboutUs from './AboutUs'
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import Form from './Form';


function App() {
  return (
    <>
    <div className="App">
      <ReactBootStrap.Navbar className="navbar-style" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="#home">Power-EV</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
    <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#aboutus">About Us</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#whyus">Why Choose Us</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#howitworks">How it works</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#form">Form</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
    </div>
    <Home/>
    <AboutUs/>
    <WhyChooseUs/>
    <HowItWorks/>
    <Form/>
    <Footer/>
    </>
  );
}

export default App;

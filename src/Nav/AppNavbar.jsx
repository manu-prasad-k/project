import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AppNavbar.css'


function AppNavbar() {
  return (
    <div>
  <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
         
         
         
         
          <img 
              src="https://img.freepik.com/free-vector/commercial-airplane-white-background_1308-22827.jpg?t=st=1721209799~exp=1721213399~hmac=e9bb5b02cd92197db3817604bd0540e1da64ff7097ec12a860535f685154abf8&w=1380" // Update this path
              alt="Brand Logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
              id='logo'
            />
            RouteX
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#about us">ABOUT US</Nav.Link>
            <Nav.Link href="#story">STORY</Nav.Link>
            <Nav.Link href="#visa">VISA</Nav.Link>
            <Nav.Link href="#blog">BLOG</Nav.Link>
            <Nav.Link href="#page">PAGE</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>




          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;

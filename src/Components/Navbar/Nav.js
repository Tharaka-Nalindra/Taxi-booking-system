import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavModule.css';
import Logo from '../image/logo.png';

export default function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={Logo}
            alt="Logo"
            width="150"
            height="50"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./Home">Home</Nav.Link>
            <Nav.Link href="">About Us</Nav.Link> 
            <Nav.Link href="#link">Contact</Nav.Link> 
            <Nav.Link href="./CancelBooking">Booking</Nav.Link> 
            <Nav.Link href="#link">Profile</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

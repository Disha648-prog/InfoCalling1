import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4 text-primary">
          InfoCalling
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#home" className="mx-2 fw-semibold">Home</Nav.Link>
            <Nav.Link href="#about" className="mx-2 fw-semibold">About Us</Nav.Link>
            <Nav.Link href="#professional" className="mx-2 fw-semibold">I am a professional</Nav.Link>
            <Button variant="outline-primary" className="mx-2">Login / Signup</Button>
            <div className="d-flex mt-3 mt-lg-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width="120" />
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" width="120" className="ms-2" />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

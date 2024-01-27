import "./BarraNav.css";
import React from "react";
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";



function Navbar1() {
  return (
    <Navbar expand="lg" className="custom-navbar" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <i class="fa-solid fa-house"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Hola Mundo</Nav.Link>
            <Nav.Link href="#link"> Proyectos </Nav.Link>
            <Nav.Link href="#link"> Herramientas </Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="https://www.linkedin.com/in/florencia-iniguez-trejo/" target="_blank"> <i className="fa-brands fa-linkedin redes p-2 fs-4"></i></Nav.Link>
            <Nav.Link href="https://github.com/FlorIniguez" target="_blank"> <i className="fa-brands fa-github redes p-2 fs-4"></i></Nav.Link>
            <Nav.Link href="https://wa.me/1164096722" target="_blank">  <i className="fa-brands fa-whatsapp redes p-2 fs-4"></i> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;

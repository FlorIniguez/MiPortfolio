import "./BarraNav.css";
import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  Offcanvas,
} from "react-bootstrap";

// function Navbar1() {
//   const expand = false; 

//   return (
//     <Navbar expand={expand} className="custom-navbar mb-3" data-bs-theme="dark">
//       <Container>
//         <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
//         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
//         <Navbar.Offcanvas
//           id={`offcanvasNavbar-expand`}
//           aria-labelledby={`offcanvasNavbarLabel-expand`}
//           placement="end"
//         >
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
//               Offcanvas
//             </Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <Nav className="justify-content-end flex-grow-1 pe-3">
//               <Nav.Link href="#action1">Home</Nav.Link>
//               <Nav.Link href="#action2">Link</Nav.Link>
//               <NavDropdown
//                 title="Dropdown"
//                 id={`offcanvasNavbarDropdown-expand`}
//               >
//                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                 <NavDropdown.Item href="#action4">
//                   Another action
//                 </NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action5">
//                   Something else here
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//             <Form className="d-flex">
//               <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               />
//               <Button variant="outline-success">Search</Button>
//             </Form>
//           </Offcanvas.Body>
//         </Navbar.Offcanvas>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navbar1;

function Navbar1() {
  return (
    <Navbar expand="lg" className="custom-navbar" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"> <i class="fa-solid fa-house"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Hola Mundo</Nav.Link>
            <Nav.Link href="#link"> Proyectos </Nav.Link>
            <Nav.Link href="#link"> Herramientas </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;
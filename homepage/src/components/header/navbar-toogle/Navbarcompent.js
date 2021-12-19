import React from "react";
import "./navbar.css";
import Logo from "../Icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
const Navbarcompent = () => {
  return (
    <>
      <Navbar bg="#669979" expand={false}>
        <Container fluid>
          <Navbar.Toggle aria-controls="offcanvasNavbar" id="btn" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton id="nav-header">
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <img id="image-logo" src={Logo} alt="logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="nav-body">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="nav-links" href="#action1">
                  Cart
                </Nav.Link>
                <Nav.Link className="nav-links" href="#action2">
                  Orders
                </Nav.Link>
                <Nav.Link className="nav-links" href="#action3">
                  Login
                </Nav.Link>
                <Nav.Link className="nav-links" href="#action4">
                  Signup
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarcompent;

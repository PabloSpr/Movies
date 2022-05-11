import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Menu() {
  return (
    <Navbar bg="" expand="lg" className="p-0" variant="dark">
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand className="fs-4 ">« movieFlix »</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link className="text-decoration-none" to="/searchbytitle">
              Search by title{" "}
            </Link>
            <Link className="mx-2 text-decoration-none" to="/searchbyrating">
              Search by rating{" "}
            </Link>
            <Link className="text-decoration-none" to="/">
              Home
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;

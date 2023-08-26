import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function TopNavbar() {
  console.log(localStorage.getItem("isWorker"));
  if (
    localStorage.getItem("token") != null &&
    localStorage.getItem("isWorker") === "true"
  ) {
    return (
      <Navbar
        fixed="top"
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Mechanic's Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Brands" id="basic-nav-dropdown">
                <NavDropdown.Item href="/brands">See all</NavDropdown.Item>
                <NavDropdown.Item href="/brands/add">Add</NavDropdown.Item>
                <NavDropdown.Item href="/brands/delete">
                  Delete
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Models" id="basic-nav-dropdown">
                <NavDropdown.Item href="/models">See all</NavDropdown.Item>
                <NavDropdown.Item href="/models/add">Add</NavDropdown.Item>
                <NavDropdown.Item href="/models/delete">
                  Delete
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Engines" id="basic-nav-dropdown">
                <NavDropdown.Item href="/engines">See all</NavDropdown.Item>
                <NavDropdown.Item href="/engines/add">Add</NavDropdown.Item>
                <NavDropdown.Item href="/engines/delete">
                  Delete
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Cars" id="basic-nav-dropdown">
                <NavDropdown.Item href="/cars">See all</NavDropdown.Item>
                <NavDropdown.Item href="/cars/add">Add</NavDropdown.Item>
                <NavDropdown.Item href="/cars/delete">Delete</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Reservations" id="basic-nav-dropdown">
                <NavDropdown.Item href="/reservations">
                  See all
                </NavDropdown.Item>
                <NavDropdown.Item href="/reservations/add">
                  Add
                </NavDropdown.Item>
                <NavDropdown.Item href="/reservations/delete">
                  Delete
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">Edit</NavDropdown.Item>
                <NavDropdown.Item
                  href="/login"
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Toggle />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else if (
    localStorage.getItem("token") != null &&
    localStorage.getItem("isWorker") === "false"
  ) {
    return (
      <Navbar
        fixed="top"
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Mechanic's Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Brands" id="basic-nav-dropdown">
                <NavDropdown.Item href="/brands">See all</NavDropdown.Item>
                <NavDropdown.Item href="/brands/add">Add</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Models" id="basic-nav-dropdown">
                <NavDropdown.Item href="/models">See all</NavDropdown.Item>
                <NavDropdown.Item href="/models/add">Add</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Engines" id="basic-nav-dropdown">
                <NavDropdown.Item href="/engines">See all</NavDropdown.Item>
                <NavDropdown.Item href="/engines/add">Add</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Cars" id="basic-nav-dropdown">
                <NavDropdown.Item href="/cars">See all</NavDropdown.Item>
                <NavDropdown.Item href="/cars/add">Add</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Reservations" id="basic-nav-dropdown">
                <NavDropdown.Item href="/reservations">
                  See all
                </NavDropdown.Item>
                <NavDropdown.Item href="/reservations/add">
                  Add
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="/profile">Edit</NavDropdown.Item>
                <NavDropdown.Item
                  href="/login"
                  onClick={() => {
                    localStorage.clear();
                  }}
                >
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Toggle />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default TopNavbar;

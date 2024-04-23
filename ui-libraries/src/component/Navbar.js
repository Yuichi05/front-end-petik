import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavbarText,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NavbarComponent(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} expand="md" className="bg-primary navbar-dark">
        <NavbarBrand href="/">Jual-in</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavLink className="text-light mx-3 text-decoration-none" to={"/"}>
              Home
            </NavLink>
            <NavLink
              className="text-light mx-3 text-decoration-none"
              to={"/dashboard"}
            >
              Dashboard
            </NavLink>
            <NavLink className="text-light text-decoration-none" to={"/courses"}>
              Courses
            </NavLink>
          </Nav>
          <NavLink to={"/login"}>
            <Button className="button is-white">Login</Button>
          </NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;

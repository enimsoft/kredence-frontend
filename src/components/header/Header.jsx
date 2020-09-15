import React from "react";
import { Button, Navbar, Nav, Form, NavDropdown } from "react-bootstrap";
import styles from "./Header.module.css";
import {
BrowserRouter as Router,
Switch,
Route,
Link,
useRouteMatch,
useParams,
} from "react-router-dom";

function Header() {
return (
<div className={styles.header}>
  <Navbar class='header' expand="lg">
    <Navbar.Brand as={Link} to="/" href="#home">
      <img src={require("../../assets/logo.png")} className={styles.navlogo} alt="" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link className={styles.navitems} as={Link} to="/" href="#home">
          Home
        </Nav.Link>
        <NavDropdown title={ <span className={styles.navitems}>Products</span>} id="nav-dropdown" >
          <NavDropdown.Item as={Link} to="/products/honeywell" className={styles.dropitems}>Honeywell</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/products/cpc" className={styles.dropitems}>CPC</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/products/elementum" className={styles.dropitems}>Elementum</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/products/altapure" className={styles.dropitems}>Altapure</NavDropdown.Item>
          {/*
          <NavDropdown.Divider /> */}
        </NavDropdown>
        <Nav.Link className={styles.navitems} href="#link">
          Quality Assurance
        </Nav.Link>
        <NavDropdown title={ <span className={styles.navitems}>Downloads</span>
          }
          className={styles.navitems}
          id="nav-dropdown"
          >
          <NavDropdown.Item as={Link} to="/downloads/coa" className={styles.dropitems}>COAs</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/downloads/msds" className={styles.dropitems}>MSDS</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/downloads/trumpcard" className={styles.dropitems}>Trump Card
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className={styles.navitems} as={Link} to="/contactus" href="#link">
          Contact Us
        </Nav.Link>
      </Nav>
      <Form inline>
        <input type="text" placeholder="Search" className={styles.search} />
      </Form>
      {/*
      <hr style={{ color: "#2699FB", margin: "0px" }} /> */}
    </Navbar.Collapse>
  </Navbar>
</div>

);
}

export default Header;
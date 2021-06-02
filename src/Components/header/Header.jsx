import React, { useState } from "react";
import { Navbar, Nav, Form, NavDropdown, Dropdown } from "react-bootstrap";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");

  const SearchLinks = [
    { text: "COAs", link: "/downloads/coa" },
    { text: "MSDs", link: "/downloads/msds" },
    { text: "TREM Card", link: "/downloads/trumpcard" },
    { text: "Honeywell", link: "/products/honeywell" },
    { text: "CPC", link: "/products/cpc" },
    { text: "Elementum", link: "/products/elementum" },
    { text: "Altapure", link: "/products/altapure" },
    {
      text: "Honeywell Burdick & Jackson",
      link: "https://lab.honeywell.com/en/burdick-and-jackson",
    },
    {
      text: "Honeywell Riedel-de-Haen",
      link: "https://lab.honeywell.com/en/riedel-de-haen",
    },
    { text: "Honeywell Fluka", link: "https://lab.honeywell.com/en/fluka" },
  ];

  const [filterSearch, setFilterSearch] = useState(SearchLinks);

  const handleSearch = (event) => {
    setSearch(event.target.value);
    let result = SearchLinks.filter((item) =>
      item.text.toLowerCase().startsWith(event.target.value.toLowerCase())
    );
    setFilterSearch(result);
  };

  return (
    <div className={styles.header}>
      <Navbar className="header" expand="lg">
        <Navbar.Brand as={Link} to="/" href="#home">
          <img
            src={require("../../assets/new_logo.jpg")}
            className={styles.navlogo}
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className={styles.navitems} as={Link} to="/" href="#home">
              Home
            </Nav.Link>
            <NavDropdown
              title={<span className={styles.navitems}>Products</span>}
              id="nav-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/products/honeywell"
                className={styles.dropitems}
              >
                Honeywell
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/products/cpc"
                className={styles.dropitems}
              >
                CPC
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/products/elementum"
                className={styles.dropitems}
              >
                Elementum
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/products/altapure"
                className={styles.dropitems}
              >
                Altapure
              </NavDropdown.Item>
              {/*
          <NavDropdown.Divider /> */}
            </NavDropdown>
            <Nav.Link className={styles.navitems} href="/qualityassurance">
              Quality Assurance
            </Nav.Link>
            <NavDropdown
              title={<span className={styles.navitems}>Downloads</span>}
              className={styles.navitems}
              id="nav-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/downloads/coa"
                className={styles.dropitems}
              >
                COAs
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/downloads/msds"
                className={styles.dropitems}
              >
                MSDS
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/downloads/trumpcard"
                className={styles.dropitems}
              >
                TREM Card
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className={styles.navitems}
              as={Link}
              to="/contactus"
              href="#link"
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Form inline>
            <Dropdown>
              <Dropdown.Toggle className={styles.box}>
                <input
                  type="text"
                  value={search}
                  placeholder="Search"
                  className={styles.search}
                  onChange={handleSearch}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ margin: "20px" }}>
                {filterSearch.length ? (
                  filterSearch.map((item, index) => {
                    return (
                      <Dropdown.Item href={item.link} key={index}>
                        {item.text}
                      </Dropdown.Item>
                    );
                  })
                ) : (
                  <Dropdown.Item>No Items Found</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Form>
          {/*
      <hr style={{ color: "#2699FB", margin: "0px" }} /> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

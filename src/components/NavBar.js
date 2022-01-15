import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"

import { NavLink, useHistory } from "react-router-dom"
const NavBar = () => {
  const history = useHistory()
  return (
    <div>
      <Navbar bg="light" expand="lg">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <NavLink className="navbar-brand" to="/">React-Bootstrap</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <NavLink className="nav-link" activeClassName="active" to="/" exact>Home</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/product" >Product</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/detail" >Detail</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/about" >About</NavLink>
            <NavLink className="nav-link" activeClassName="active" to="/contactus" >Contactus</NavLink>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Workshop Pagination" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => { history.replace('/hospital') }}>Hospital List</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => { history.replace('/category') }}>
                News Category
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink className="nav-link" activeClassName="active" to="/upload" >Upload</NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
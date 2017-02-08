import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const SiteNav = (props) =>
  (<Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">The Remote Post</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem href="#">Order</NavItem>
        <NavItem href="#">About</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)

export default SiteNav
import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

function SiteNav(props) {
  return <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">The Remote Post</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">About Us</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default SiteNav
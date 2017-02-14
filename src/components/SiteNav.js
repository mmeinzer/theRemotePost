import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SiteNav = (props) =>
  (<Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">The Remote Post</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem>Order</NavItem>
        <NavItem>About</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)

export default SiteNav
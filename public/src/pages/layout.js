import * as React from 'react'

import { Link, useStaticQuery, graphql } from 'gatsby'

import {
 sitetitle,
 navlinks_text,

} from './layout.module.css'


import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,
   Navbar,
    NavDropdown,
    Nav,
    Brand,
     Row
   
} from 'react-bootstrap';

import { StaticImage} from 'gatsby-plugin-image'
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)


  return (
<Container>
  <Row>

 
   
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">
    <StaticImage className={sitetitle}
        alt="Logo"
        src="../images/logo.png"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
    <Nav className="justify-content-end me-5"  className={navlinks_text }  activeKey="/home">
    <Nav.Item className="me-4">
      <Nav.Link  >Doors</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link  eventKey="link-1">Kitchens</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link  eventKey="link-2">Bedrooms</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link  eventKey="link-2">Living Room</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link eventKey="link-2">Bathrooms</Nav.Link>
    </Nav.Item>
    <Nav.Item className="me-3">
      <Nav.Link  eventKey="link-2">Other Products</Nav.Link>
    </Nav.Item>
  </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

 </Row>
</Container>

  )
}

export default Layout


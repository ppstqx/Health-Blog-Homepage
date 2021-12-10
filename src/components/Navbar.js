import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap'


export default class NavbarComp extends Component {
    render() {
        return (
            <div>
            <Navbar style={{paddingTop:20}}bg="dark"variant="dark" expand="lg" fixed="top">
  <Container fluid>
    <Navbar.Brand style={{paddingLeft:100,fontWeight:'bold',}}href="#">MedicalNews</Navbar.Brand >
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action2">About</Nav.Link>
        <NavDropdown title="Categories" id="navbarScrollingDropdown">
          <NavDropdown.Item href="Card1">Top Stories</NavDropdown.Item>
          <NavDropdown.Item href="Card2">Mental Health</NavDropdown.Item>
          <NavDropdown.Item href="Card3">Nutrition</NavDropdown.Item>
          <NavDropdown.Item href="Card4">Fitness</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form className="d-flex"style={{paddingRight:100}}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="dark">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </div>
        )
    }
}

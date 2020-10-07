
import React, { Component } from 'react'
import logo from '../img/rent.png'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
 const NavBar = () => {
    return (
        <>
        <Navbar expand="lg">
            <Container >
  <Navbar.Brand href="#home"><img src={logo} style={{width: '50px'}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <NavDropdown title="Home" id="basic-nav-dropdown" className='mr-4'>
        <NavDropdown.Item href="#action/3.1">Home 01</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Home 02</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Home 03</NavDropdown.Item>
        
      </NavDropdown>
      <NavDropdown title="Property" id="basic-nav-dropdown" className='mr-4'>
        <NavDropdown.Item href="#action/3.1">Property</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Property available</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Property by city</NavDropdown.Item>
       
      </NavDropdown>
      <NavDropdown title="Pages" id="basic-nav-dropdown" className='mr-4'>
        <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Advisor</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Search List</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Search Grid</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Pricing</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">User list</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Registration</NavDropdown.Item>
        
      </NavDropdown>
      <NavDropdown title="News" id="basic-nav-dropdown" className='mr-4'>
        <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">News details</NavDropdown.Item>
       
      </NavDropdown>
      <Nav.Link style={{color: '#000'}} href="#contact">Contact us</Nav.Link>
 
 
      
      <Button variant="outline-danger" className='ml-5'>Add listing +</Button>
      </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
)
}
export default NavBar

import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
const navbar = (props) =>{
    return(
        <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Property</Nav.Link>
                        <NavDropdown title="Property" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Properties</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Available Property</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Properties by district</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                        </Nav>
                       
                    </Navbar.Collapse>
                </Navbar>
        </>
    )
}

export default navbar;
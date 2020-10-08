
import React, { Component, useState } from 'react'
import logo from '../img/rent.png'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button, Modal} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";


 const NavBar = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Nav.Link style={{color: '#000'}} href="#contact" className='mr-4'>Contact us</Nav.Link>
      <Nav.Link style={{color: '#000'}} href="#contact" className='lineAfter' onClick={handleShow}>
      <FontAwesomeIcon icon={faUser} className='mr-2'/>
        Sign in</Nav.Link>
   
      <Nav.Link style={{color: '#000'}} href="#contact" onClick={handleShow1}>Sign up</Nav.Link>
 
 
      
      <Button variant="outline-danger" className='ml-5'>Add listing +</Button>

     
      </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


<Modal show={show} onHide={handleClose} className='formStyle'>
  
        
        <Modal.Header closeButton style={{border: 'none', padding :'30px'}}>
          <Modal.Title> <img src={logo} style={{width: '50px'}}/> <i className='ml-3'>Sign In</i></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding: '50px'}}>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control className='borderNone' type="username" placeholder="Type your username" />
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" className='borderNone' placeholder="Type your password" />
            <Form.Text className="text-muted">
              Forgot password ? 
            </Form.Text>
          </Form.Group>
       </Form>
      

          <Button variant="primary" type="submit" style={{ background: '#C82332', border: 'none', padding: '5px 25px', marginTop: '30px'}}>
          Sign in
          </Button>

        <div style={{margin: '50px 0 50px', textAlign: 'center'}}>
        <h6>Or Sign Up Using</h6>
        <div>
                       <FontAwesomeIcon className='mr-2' icon={faFacebookF} style={{color: '#fff', background: '#3B5998',  borderRadius: '50%', width: '40px', height: '40px', padding: '10px'}}/>
                       <FontAwesomeIcon className='mr-2' icon={faTwitter} style={{color: '#fff', background: 'blue',  borderRadius: '50%', width: '40px', height: '40px', padding: '10px'}}/>
                       <FontAwesomeIcon className='mr-2'icon={faGoogle} style={{color: '#fff', background: 'red', borderRadius: '50%', width: '40px', height: '40px', padding: '10px'}}/>
        </div>
        </div>
        </Modal.Body>
        
      </Modal>

      <Modal show={show1} onHide={handleClose1} className='formStyle'>
        <Modal.Header closeButton style={{border: 'none', padding :'30px'}}>
          <Modal.Title> <img src={logo} style={{width: '50px'}}/> <i className='ml-3'>Sign Up</i></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding: '50px'}}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control className='borderNone' type="username" placeholder="Type your name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control className='borderNone' type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control className='borderNone' type="username" placeholder="Type your username" />
          </Form.Group>
        
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className='borderNone' type="password" placeholder="**********" />
            
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control className='borderNone' type="password" placeholder="**********" />
            
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
          <Form.Check style={{fontWeight: '400', margin: '30px 0 30px'}} type="checkbox" label="I agree to the Terms of User" />
        </Form.Group>
         <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Button variant="primary" type="submit" style={{ background: '#C82332', border: 'none', padding: '5px 25px'}}>
            Sign Up
          </Button>

          <Button style={{background: 'none', color: '#535353', border: 'none'}}>
            Sign In  <FontAwesomeIcon style={{fontSize: '10px', marginLeft: '5px'}} icon={faArrowRight} />
          </Button>
          </div>
        </Form>
        </Modal.Body>
       
      </Modal>
</>
)
}
export default NavBar

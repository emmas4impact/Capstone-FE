import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
class Tenant extends Component {
    


    render() {
        return (
            <div style={{background: 'light green', paddingTop: '100px', paddingBottom: '100px'}}>
                <Container>   
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{fontSize: '20px', marginBottom: '30px', fontWeight: '500'}}>Fill in the form and we will get back to you</Form.Label>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Name</Form.Label>
                          <Form.Control className='borderNone' type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Surname</Form.Label>
                          <Form.Control className='borderNone' type="text" placeholder="Surname" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className='borderNone' type="email" placeholder="Email address" />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Phone Nember</Form.Label>
                          <Form.Control className='borderNone' type="tel" placeholder="Number" />
                        </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Property ID</Form.Label>
                          <Form.Control className='borderNone' type="text" placeholder="Property ID" />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ background: '#C82332', border: 'none', padding: '5px 25px', marginTop: '50px'}}>
                            Submit Now
                        </Button>

                        
                        
                  
                    </Form>


                </Container>
            </div>
        );
    }
}


export default withRouter(Tenant);
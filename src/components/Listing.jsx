import React, { Component } from 'react';
import { Form, Button, Container , Row, Col} from 'react-bootstrap'
class Listing extends Component {


    render() {
        return (
            <div style={{background: '#E9ECF3', paddingTop: '100px', paddingBottom: '100px'}}>
                <Container style={{background: '#fff', padding: '50px'}}>   
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{fontSize: '20px', marginBottom: '30px', fontWeight: '500'}}>Add Listing</Form.Label>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{fontWeight: '700'}}>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label style={{fontWeight: '700'}}>Add Title</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label style={{fontWeight: '700'}}>Category</Form.Label>
                    <Form.Control as="select">
                    <option>Select Option</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>


                <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2} style={{fontWeight: '700'}}>
        Type Of Add
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="I Want to Sell"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="I Want to Buy"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="I Want to Rent"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2} style={{fontWeight: '700'}}>
        Who We Are
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Owner"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Agent"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Builder"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
      </Col>
    </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label style={{fontWeight: '700'}}>Type</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label style={{fontWeight: '700'}}>Status</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label style={{fontWeight: '700'}}>Price</Form.Label>
                    <Form.Control className='borderNone' type="number"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{fontWeight: '700'}}>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='text here...' />
                </Form.Group>
                <Form.Group>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
            <Form.Label style={{fontWeight: '700'}}>Name</Form.Label>
            <Form.Control className='borderNone' type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
          <Form.Label style={{fontWeight: '700'}}>Email</Form.Label>
          <Form.Control className='borderNone' type="email" placeholder="Email address" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label style={{fontWeight: '700'}}>Phone Nember</Form.Label>
            <Form.Control className='borderNone' type="tel" placeholder="Number" />
          </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label style={{fontWeight: '700'}}>Address</Form.Label>
            <Form.Control className='borderNone' type="text" placeholder="Address" />
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


export default Listing;
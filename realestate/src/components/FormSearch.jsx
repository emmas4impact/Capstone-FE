import React, { Component } from 'react'
import { FormControl, Form, Container, Button, Row, Col} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class FormSearch extends Component {
    render() {
        return(
            <Container className='mt-5'>
                <Row style={{padding: '30px 20px 10px', background: 'rgb(200, 35, 50, 0.8)', borderRadius: '5px'}}>
                    
            <Form.Group  style={{textAlign:'center', display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexWrap: 'wrap'}}>
            <Col lg={3} md={12} sm={12} className='mb-2'>
            <Form.Control size="sm" placeholder='Entry Landmark Location'>
                
            </Form.Control>
            </Col>
            <Col lg={3} md={12} sm={12} className='mb-2'>
            <Form.Control as="select" size="sm">
                <option>All properties</option>
            </Form.Control>
            </Col>
            <Col lg={3} md={12} sm={12} className='mb-2'>
            <Form.Control as="select" size="sm">
                <option>Room</option>
            </Form.Control>
            </Col>
            <Col lg={2} md={12} sm={12} className='mb-2'>
            <Form.Control size="sm" as="select">
                <option>Any Price</option>
            </Form.Control>
            </Col>
            <Col lg={1} md={12} sm={12} className='mb-2'>
            <Button style={{background:'transparent', border: 'none'}}>
            <FontAwesomeIcon icon={faSearch} /> 
              </Button>
              </Col>
            </Form.Group>
            </Row>
            </Container>
        )
    }
}

export default FormSearch
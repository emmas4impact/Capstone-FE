import React, { Component } from 'react'
import { Form, Container, Button, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class FormSearch extends Component {
    render() {
        return(
            <Container className='mt-5'>
                <Row style={{padding: '30px 20px 10px', background: 'green', borderRadius: '5px'}}>
                    
            <Form.Group  style={{textAlign:'center', display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', flexWrap: 'wrap'}}>
            <Col lg={3} md={12} sm={12} className='mb-2'>
            <Form.Control size="sm" placeholder='Entry Landmark Location'>
                
            </Form.Control>
            </Col>
            <Col lg={2} md={12} sm={12} className='mb-2'>
            <Form.Control as="select" size="sm">
                <option>All properties</option>
            </Form.Control>
            </Col>
            <Col lg={2} md={12} sm={12} className='mb-2'>
            <Form.Control as="select" size="sm">
                <option>Room</option>
            </Form.Control>
            </Col>
            <Col lg={2} md={12} sm={12} className='mb-2'>
            <Form.Control size="sm" as="select">
                <option>Any Price</option>
                <option>200000</option>
                <option>400000</option>
                <option>200000</option>
                <option>600000</option>
                <option>1200000</option>
                <option>1400000</option>
                <option>1600000</option>
                <option>1800000</option>
                <option>2000000</option>
                <option>2500000</option>
            </Form.Control>
            </Col>
            <Col lg={2} md={12} sm={12} className='mb-2'>
            <Form.Control size="sm" as="select">
                <option>Any Price</option>
                <option>400000</option>
                <option>600000</option>
                <option>1000000</option>
                <option>1200000</option>
                <option>1400000</option>
                <option>1600000</option>
                <option>1800000</option>
                <option>2000000</option>
                <option>2500000</option>
                <option>4000000</option>
            </Form.Control>
            </Col>
            <Col lg={1} md={12} sm={12} className='mb-2'>
            <Button style={{background:'transparent', border: 'none', color:"orange"}}>
            <FontAwesomeIcon icon={faSearch} size={22}/> 
              </Button>
              </Col>
            </Form.Group>
            </Row>
            </Container>
        )
    }
}

export default FormSearch
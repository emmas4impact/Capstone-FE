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
                <option>100000</option>
                <option>150000</option>
                <option>200000</option>
                <option>250000</option>
                <option>300000</option>
            </Form.Control>
            </Col>
            <Col lg={2} md={12} sm={12} className='mb-2'>
            <Form.Control size="sm" as="select">
                <option>Any Price</option>
                <option>150000</option>
                <option>250000</option>
                <option>300000</option>
                <option>350000</option>
                <option>400000</option>
            </Form.Control>
            </Col>
            <Col lg={1} md={12} sm={12} className='mb-2'>
            <Button style={{background:'transparent', border: 'none', color:"organge"}}>
            <FontAwesomeIcon icon={faSearch} size={12}/> 
              </Button>
              </Col>
            </Form.Group>
            </Row>
            </Container>
        )
    }
}

export default FormSearch
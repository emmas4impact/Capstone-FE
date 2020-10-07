import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Registration = () => {
    return (
        <div style={{background: 'rgb(200, 35, 50, 0.8)', color: '#fff'}}>
            <Container>
                <Row style={{justifyContent: 'space-between', padding: '80px 50px 30px'}}>
                    <Col lg={6} md={6} sm={12} className='mb-5'>
                        <h3>Become a Real Estate Agent</h3>
                        <h6>We only work with the best companies around the globe</h6>
                    </Col>
                    <Col lg={6} md={6} sm={12} style={{textAlign: 'right'}}>
                        <Button style={{background:'rgb(200, 35, 50, 0.9)', border:'none', padding: '20px 35px'}} >
                            Register Now
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Registration
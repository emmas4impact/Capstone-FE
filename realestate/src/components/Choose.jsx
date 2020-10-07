import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import icon1 from '../img/customer.png'
import icon2 from '../img/property.png'
import icon3 from '../img/finance.png'


const Choose = () => {
    return (
        <div style={{background: '#EBECF1'}}>
        <Container style={{textAlign: 'center'}}>
            <h2 style={{letterSpacing: '5px'}} className='pt-5'>Why Choose Us</h2>
            <h6 style={{letterSpacing: '3px'}}>We provide full service at every step.</h6>
            <Row className='pt-5 pb-5' style={{justifyContent: 'center'}}>
                <Col lg={3} md={6} sm={12} style={{padding: '40px', background: '#fff', margin: '10px', borderRadius: '5px'}}>
                    <img  className='pb-5' src={icon1} style={{width: '50px'}}/>
                    <h5> Trusted By Thousands</h5>
                    <p>Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.</p>
                </Col>
             
                <Col lg={3} md={6} sm={12} style={{padding: '40px',  background: '#fff',  margin: '10px', borderRadius: '5px'}}>
                    <img  className='pb-5' src={icon2} style={{width: '50px'}}/>
                    <h5>Wide Renge Of Properties</h5>
                    <p>Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.</p>
                </Col>
                <Col lg={3} md={6} sm={12} style={{padding: '40px',  background: '#fff', margin: '10px', borderRadius: '5px'}}>
                    <img  className='pb-5' src={icon3} style={{width: '50px'}}/>
                    <h5>Financing Made Easy</h5>
                    <p>Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis.</p>
                </Col>
            </Row>
        </Container>
        </div>
    )
} 

export default Choose
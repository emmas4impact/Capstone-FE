import React, { Component } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faGoogle, faReddit, faPinterest } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div style={{background: '#1D293F'}}>
            <Container>
                <Row style={{padding: '50px', justifyContent: 'space-between', lineHeight: '2.5', fontSize: '12px'}}>
                    <Col lg={4} md={4} sm={12}>
                    <h5 style={{color: '#fff', marginBottom: '20px'}}>About Site</h5>
                    <p style={{color:'#6C7A93'}}>
                    We’re reimagining how you buy, sell and rent. It’s now easier to get into a place you love. So let’s do this, together.
                    </p>
                    </Col>
                    <Col lg={2} md={4} sm={12}>
                    <h5 style={{color: '#fff', marginBottom: '20px'}}>Quick Links</h5>
                    <ul style={{color:'#6C7A93'}} className='list-unstyled'>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Terms & Conditions</a></li>
                        <li><a href='#'>User's Guide</a></li>
                        <li><a href='#'>Support Center</a></li>
                        <li><a href='#'>Press Info</a></li>
                    </ul>
                    </Col>
                    <Col lg={2} md={4} sm={12}>
                    <h5 style={{color: '#fff', marginBottom: '20px'}}>Contact Us</h5>
                    <ul style={{color:'#6C7A93'}} className='list-unstyled'>
                        <li>info@findhouse.com</li>
                        <li>info@findhouse.com</li>
                        <li>+1 246-345-0699</li>
                        <li>+1 246-345-0695</li>
                    </ul>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                    <h5 style={{color: '#fff', marginBottom: '20px'}}>Follow us</h5>
                   <Row>
            
                       <Col style={{ color:'#6C7A93', fontSize: '20px'}}>
                       <FontAwesomeIcon className='mr-2' icon={faFacebook}/>
                       <FontAwesomeIcon className='mr-2' icon={faTwitter}/>
                       <FontAwesomeIcon className='mr-2' icon={faInstagram}/>
                       <FontAwesomeIcon className='mr-2'icon={faGoogle}/>
                       <FontAwesomeIcon className='mr-2' icon={faPinterest}/>
                       <FontAwesomeIcon icon={faReddit}/>

                       </Col>
                      
                   </Row>
                   <Row>
                   <Col>
                       <h5 style={{color: '#fff', marginBottom: '20px'}}>Subscribe</h5>
                       <input className='inp mr-2' placeholder='Your email' style={{width: '70%', borderRadius: '40px', padding: '10px 30px', border: 'none', background:  '#354765'}}/>
                       <small style={{ background:  '#354765', color:'#6C7A93', padding: '15px 20px', borderRadius: '50%', fontSize: '15px', color: '#fff'}}>></small>
                    </Col>
                   </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer
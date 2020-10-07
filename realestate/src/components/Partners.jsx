import React, { Component } from 'react'
import { Container, Col, Row} from 'react-bootstrap'
import img1 from '../img/1.png'
import img2 from '../img/2.png'
import img3 from '../img/3.png'
import img4 from '../img/4.png'
import img5 from '../img/5.png'


const Partners = () => {
    return (
        <div>
            <Container style={{textAlign: 'center'}}>
                <h2 style={{letterSpacing: '5px'}} className='pt-5'>Our Partners</h2>
                <h6 style={{letterSpacing: '3px'}}>We only work with the best companies around the globe</h6>
            <Row style={{justifyContent: 'center'}} className='pt-5 pb-5'>  
             <Col  lg={2} md={2}  sm={6} style={{margin: '10px', padding: '30px'}}>
                <img src={img1}/>
            </Col>  
            <Col  lg={2} md={2}  sm={6} style={{margin: '10px', padding: '30px'}}>
                <img src={img2}/>
            </Col>  
            <Col  lg={2} md={2}  sm={6} style={{margin: '10px', padding: '30px'}}>
                <img src={img3}/>
            </Col>  
            <Col  lg={2} md={2}  sm={6} style={{margin: '10px', padding: '30px'}}>
                <img src={img4}/>
            </Col>  
            <Col className='pl-3' lg={2} md={2}  sm={6} style={{margin: '10px', padding: '30px'}}>
                <img src={img5}/>
            </Col>   
            </Row>
            </Container>
        </div>
    )
}
export default Partners
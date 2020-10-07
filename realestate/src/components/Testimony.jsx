import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import pic1 from '../img/pic-1.jpg'
import pic2 from '../img/pic-2.jpg'
import pic3 from '../img/pic-3.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



class Testimony extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
      };
      return (
          <div style={{background: '#262E3B', padding: '100px', cololr: '#fff'}}>

        <Container style={{textAlign: 'center', color: '#fff'}}>
        <h3 style={{letterSpacing: '5px'}}>Testimonials</h3>
        <h6 style={{letterSpacing: '3px'}} className='pb-5'>Here could be a nice sub title</h6>
                
        <Slider {...settings}>
          <div>
            <img src={pic1}/>
            <h6>Agusta Silva</h6>
            <small>Sales Manager</small>
            <p className='pt-3'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
          <div>
            <img src={pic2} />
            <h6>Leila Mortin</h6>
            <small>CEO</small>
            <p className='pt-3'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
          <div>
            <img src={pic3} />
            <h6>Diana Alutska</h6>
            <small>Product Manager</small>
            <p className='pt-3'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
          
         
        </Slider>
        </Container>
        </div>
      );
    }
  }
  
// function Testimony () {
  
//     return (
//         <div style={{background: '#262E3B', padding: '100px', cololr: '#fff'}}>
//             <Container style={{textAlign: 'center', color: '#fff'}}>
//                 <h3 style={{letterSpacing: '5px'}}>Testimonials</h3>
//                 <h6 style={{letterSpacing: '3px'}} className='pb-5'>Here could be a nice sub title</h6>
                
//             <Carousel>
//                 <Carousel.Item>
                   
//                     <Carousel.Caption style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
//                     <img src={pic1} style={{width:'100px', borderRadius: '50%'}}/>
//                     <h6>Agusta Silva</h6>
//                     <small>Sales Manager</small>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
                   
//                     <Carousel.Caption>
//                     <img src={pic2} style={{width:'100px', borderRadius: '50%'}}/>
//                     <h6>Agusta Silva</h6>
//                     <small>Sales Manager</small>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
                   
//                     <Carousel.Caption>
//                     <img src={pic3} style={{width:'100px', borderRadius: '50%'}}/>
//                     <h6>Agusta Silva</h6>
//                     <small>Sales Manager</small>
//                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 </Carousel>
//            </Container>
//         </div>
//     )

// }

export default Testimony
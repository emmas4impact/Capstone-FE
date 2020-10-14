import React from 'react'
import {Container} from 'react-bootstrap'
import pic1 from '../img/mic.jpeg'
import pic2 from '../img/dad.jpeg'
import pic3 from '../img/ema.jpeg'
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
          <div style={{background: '#262E3B', padding: '100px', color: '#fff'}}>

        <Container style={{textAlign: 'center', color: '#fff'}}>
        <h3 style={{letterSpacing: '5px'}}>Testimonials</h3>
        <h6 style={{letterSpacing: '3px'}} className='pb-5'>Here could be a nice sub title</h6>
                
        <Slider {...settings}>
          <div>
            <img className="test" src={pic1} alt="pic1"/>
            <h6>Michael Adedeji</h6>
            <small>Sales Manager</small>
            <p className='pt-3'>Successfuly Market Many homes</p>
          </div>
          <div>
            <img className="test" src={pic2} alt="pic1"/>
            <h6>John Fawole</h6>
            <small>CEO</small>
            <p className='pt-3'>Founder Of Bridge Homes</p>
          </div>
          <div>
            <img className="test" src={pic3} alt="pic1"/>
            <h6>Emmanuel Adedeji</h6>
            <small>Product Manager</small>
            <p className='pt-3'>10 years experience in real Estate business</p>
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
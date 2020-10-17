import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => state;
class MyCarousel extends Component {
  
  render() {
      console.log("I am carousel",this.props)
    return (
      <Carousel>
      {this.props.data.properties.map((prop, i)=>(
           <Carousel.Item>
           <img
             className="d-block w-100"
             src={prop.images}
             alt={prop.district}
           />
           <Carousel.Caption>
             <h3>{prop.title}</h3>
             <p>{prop.description}</p>
           </Carousel.Caption>
         </Carousel.Item>
          
      ))}
       
        
      </Carousel>
    )
  }
}


export default withRouter(connect(mapStateToProps, null) (MyCarousel));
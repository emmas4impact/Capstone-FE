import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {Container} from 'react-bootstrap'
import {GoLocation} from 'react-icons/go'
import {GiHouse} from 'react-icons/gi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const BASE_URL = process.env.REACT_APP_URL

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({


getListingThunk: (properties) => dispatch(getListingWithThunk(properties)),

});
const getListingWithThunk = (properties) => {
   
    
    return async(dispatch, getState) => {
        const res = await axios.get(`${BASE_URL}/listings`, {
            headers: {
              "Content-Type": "application/json",
            },
           
          })
        
        properties  = await res
       
        // console.log("A thunk was used to dispatch this action", getState());
        dispatch({
            type: "GET_PROPERTY",
            payload: properties.data.data,
        });
        // console.log("Property By ID", users)
    
    };
  };

class Profile extends Component{
    
    componentDidMount = async (id) =>{
       await this.props.getListingThunk(id)
       
    }
    
   
    render(){
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true
          };
        return(
            <>
         <h3 style={{letterSpacing: '5px', color: "black"}}>Available Properties</h3>     
        <Container style={{textAlign: 'center', color: '#fff'}}>
       
         
        <Slider {...settings}>
        {this.props.data.properties.map((prop, i)=>{
          return(
            <div >
            <div >
            <img className="prop" src={prop.image} alt="pic1"/>
            </div>
            <div style={{ paddingBottom: "150px"}}>
            <h6 style={{letterSpacing: '5px', color: "black"}}><GiHouse size={24} style={{margin: "10px"}}/>{prop.title}</h6>
            <small style={{letterSpacing: '5px', color: "black" }}><GoLocation size={24} style={{margin: "10px"}}/>{prop.district}</small>
            </div>
          </div>
          )
        })}
          
         
         
         
        </Slider>
        </Container>
      
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
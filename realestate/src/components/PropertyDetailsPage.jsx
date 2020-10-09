import React, {Component} from 'react';
import {  Card,  Container, Row, Col,Image, Badge}from 'react-bootstrap'
import { connect } from "react-redux";
import StarRatingComponent from 'react-star-rating-component';

const BASE_URL = process.env.REACT_APP_URL
console.log(BASE_URL)

const urlSplit = window.location.href.split('/')
console.log(urlSplit)
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({


getListingThunk: (listings) => dispatch(getListingWithThunk(listings)),

});
const getListingWithThunk = (listings) => {
   
    
    return async(dispatch, getState) => {
        const data= await fetch(`${BASE_URL}/listings/${urlSplit[4]}`)
        listings  = await data.json()
       
        console.log("A thunk was used to dispatch this action", getState());
        dispatch({
            type: "GET_PROPERTY_BY_ID",
            payload: listings,
        });
        console.log("Property By ID", listings)
    
    };
  };


class PropertyListing extends Component {
    componentDidMount = async (id) =>{
        this.props.getListingThunk(id)
       
    }
    
  
    render(){
        console.log(this.props)
        return(
            <>
         
            <Container>
            <Row>
                <Col>
                    <Row className="mt-4 mb-2">
                        <Col md={4}>
                            <Image src={this.props.data.property.image} className="img-fluid" alt="house" />
                        </Col>
                        <Col md={8}>
                            <Card>
                                <Card.Body>
                                    <Card.Title><strong>Property: </strong>{this.props.data.property.title}</Card.Title>
                                    <Card.Subtitle><strong>Type:</strong><Badge variant="danger"> {this.props.data.property.category}</Badge></Card.Subtitle>
                                    <Card.Text><strong>Description:</strong> {this.props.data.property.description}</Card.Text>
                                    <Card.Text><strong>Price: </strong>{this.props.data.property.price}</Card.Text>
                                    <Card.Text><strong>District: </strong>{this.props.data.property.district}</Card.Text>
                                    <Card.Text><strong>Rating: </strong><StarRatingComponent 
                                    name="rating"
                                    starCount={5}
                                    value={this.props.data.property.rating}
                                    />
                                    </Card.Text>
                                    {/* <Card.Text >{this.props.data.property.details[0]}</Card.Text> */}
                                    
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                    </Row>

       
            </Container>  

          
           </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyListing);
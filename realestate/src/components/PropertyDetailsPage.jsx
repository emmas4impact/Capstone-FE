import React, {Component} from 'react';
import {  Card,  Container, Row, Col,Image, Badge, Button}from 'react-bootstrap'
import { connect } from "react-redux";
import StarRatingComponent from 'react-star-rating-component';
import {Link, withRouter} from 'react-router-dom'
import GoogleMapReact from 'google-map-react'

const BASE_URL = process.env.REACT_APP_URL



const mapStateToProps = (state) => state;
const getListingWithThunk = (id) => {
    const urlSplit = window.location.href.split('/')
    
    
    return async(dispatch, getState) => {
        console.log('URL SPLIT', urlSplit[4], getState());
        const data= await fetch(`${BASE_URL}/listings/${id}`);
        console.log('DATA FROM FETCH', data);
        
        // listings  = await data.json();
        // console.log('LISTING DATA', listings);
       
        // console.log("A thunk was used to dispatch this action", getState());
        dispatch({
            type: "GET_PROPERTY_BY_ID",
            payload: await data.json()
        });
    
    };
  };

  const mapDispatchToProps = (dispatch) => ({


    getListingThunk: (listings) => dispatch(getListingWithThunk(listings)),
    
    });


class PropertyDetails extends Component {
    componentDidMount = async () =>{
        this.props.getListingThunk(this.props.match.params.id)
       
    }
    
  
    render(){
        // console.log(this.props)
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
                                    <Card.Text><strong>Price: </strong>N{this.props.data.property.price}</Card.Text>
                                    <Card.Text><strong>District: </strong>{this.props.data.property.district}</Card.Text>
                                    <Card.Text><strong>Rating: </strong><StarRatingComponent 
                                    name="rating"
                                    starCount={5}
                                    value={this.props.data.property.rating}
                                    />
                                    </Card.Text>
                                    <Card.Text ><strong>Features: </strong>{this.props.data.property.features}</Card.Text>
                                    <Card.Text ><strong>Details: </strong>{this.props.data.property.details}</Card.Text>
                                    <Card.Text ><strong>Region: </strong>{this.props.data.property.region}</Card.Text>
                                    <Button variant="primary"
                                        as={Link} to={"/tenant/"}
                                    >Rent Property</Button>
                                   
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* <GoogleMapReact
                            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY}}
                            defaultCenter={location}
                            defaultZoom={17}
                        ></GoogleMapReact> */}
                    </Row>
                </Col>
                    </Row>

       
            </Container>  

          
           </>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PropertyDetails));
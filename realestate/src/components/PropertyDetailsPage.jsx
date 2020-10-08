import React, {Component} from 'react';
import { Jumbotron, Card, Button , Container, Row, Col,Image, Badge}from 'react-bootstrap'
import { connect } from "react-redux";

//import StarRatingComponent from 'react-star-rating-component';

const URL="http://localhost:5001"

console.log(URL)
const urlSplit = window.location.href.split('/')
console.log(urlSplit)
const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({


getListingThunk: (listings) => dispatch(getListingWithThunk(listings)),

});
const getListingWithThunk = (listings) => {
   
    
    return async(dispatch, getState) => {
        const data= await fetch(`${URL}/listings/${urlSplit[4]}`)
        listings  = await data.json()
       
        console.log("A thunk was used to dispatch this action", getState());
        dispatch({
            type: "GET_PROPERTY_BY_ID",
            payload: listings,
        });
        console.log("hello", listings)
    
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
                        <Col md={3}>
                            <Image src={this.props.data.property.image} className="img-fluid" alt="house" />
                        </Col>
                        <Col md={9}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{this.props.data.property.title}</Card.Title>
                                    <Card.Subtitle><Badge variant="danger">{this.props.data.property.category}</Badge></Card.Subtitle>
                                    <Card.Text>{this.props.data.property.description}</Card.Text>
                                    <Card.Text>{this.props.data.property.price}</Card.Text>
                                    <Card.Text>{this.props.data.property.district}</Card.Text>
                                    
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
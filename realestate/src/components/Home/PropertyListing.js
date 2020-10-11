import React, {Component} from 'react';
import {  Card,  Container, Row, Col} from 'react-bootstrap'
import { connect } from "react-redux";
import { Link, withRouter} from 'react-router-dom';
import Maps from '../map/Map'
//import StarRatingComponent from 'react-star-rating-component';


const BASE_URL = process.env.REACT_APP_URL

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({


getListingThunk: (listings) => dispatch(getListingWithThunk(listings)),

});
const getListingWithThunk = (listings) => {
    
    return async(dispatch, getState) => {
        const data= await fetch(`${BASE_URL}/listings`)
        listings  = await data.json()
        console.log("A thunk was used to dispatch this action", getState());
        dispatch({
            type: "GET_PROPERTY",
            payload: listings.data,
        });
       
    };
  };


class PropertyListing extends Component {
    
    componentDidMount = async (id) =>{
        this.props.getListingThunk(id)
        
    }
    render(){
      
        return(
            <>
            
           
            <Container>
            <Row className="mt-5">
             
            {this.props.data.properties.map((property, i)=>(
               
               <Col md={4} className="mb-3" key={i}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={property.image}/>
                        <Card.Body>
                            <Card.Title>{property.title}</Card.Title>
                            <Card.Text>
                             {property.description}
                            </Card.Text>
                            <Card.Text>
                             {property.location.formattedAddress}
                            </Card.Text>
                            <Card.Text>
                             {property.region}
                            </Card.Text>
                            <Link className="btn btn-primary" to={`/properties/${property._id}`}>
                            Go To property
                            </Link>
                            {/* <Button variant="primary"
                            as={Link} 
                          >Go To property</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
               
            ))}
            
            </Row>
            <div> <h1>Properties Location</h1></div>
             <Maps/>               
            </Container>  

          
           </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PropertyListing));
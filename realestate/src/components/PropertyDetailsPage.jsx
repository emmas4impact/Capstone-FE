import React, {Component} from 'react';
import {  Card,  Container, Row, Col,Image, Badge, Button}from 'react-bootstrap'
import { connect } from "react-redux";
import StarRatingComponent from 'react-star-rating-component';
import {Link, withRouter} from 'react-router-dom'
import Maps from  './map/Map'
import Tenant from './Tenant';

const BASE_URL = process.env.REACT_APP_URL



const mapStateToProps = (state) => state;
const getListingWithThunk = (id) => {
       
    return async(dispatch, getState) => {
       
        const data= await fetch(`${BASE_URL}/listings/${id}`);
        console.log('DATA FROM FETCH', data);
    
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
        
        return(
            <>
            <div style={{background: '#F6F7FB', paddingTop: '50px', paddingBottom: '50px'}}>
            <Container style={{border: '1px solid #DEDEE0'}}>
            <Row>
                <Col>
                <h4 className='mt-4 mb-5'>Property Details</h4>
                    <Row className="mt-4 mb-2" style={{display: 'flex', justifyContent: 'space-between'}}>
                        
                        <Col md={12} lg={7} sm={12}>
                            <Image src={this.props.data.property.image} className="img-fluid" alt="house" style={{height: '400px', borderRadius: '5px', objectFit: 'cover'}} />
                        <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}} className='mt-3 ml-3 pb-3'>
                            <Card.Subtitle ><strong  className='mr-3'>Type:</strong><Badge variant="danger"> {this.props.data.property.category}</Badge></Card.Subtitle>
                            <Card.Text className=' ml-5' style={{display: 'flex', justifyContent: 'space-between'}}><strong className=' mr-3'>Rating: </strong><StarRatingComponent 
                                   
                                    name="rating"
                                    starCount={5}
                                    value={this.props.data.property.rating}
                                    />
                            </Card.Text>
                            
                            </div>        
                            <h3 className='ml-3 pb-3'>{this.props.data.property.title}</h3>

                          {/* <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center', padding: '30px'}}>
                            <p style={{color: '#C82332', fontSize: '30px', fontWeight: '800', marginRight: '50px'}}>${this.props.data.property.price}</p>
                            <p style={{color: '#000', fontSize: '40px', fontWeight: '600'}}>{this.props.data.property.title}</p>
                          </div> */}
                        </Col>
                        <Col md={12} lg={5} sm={12}>
                            <Tenant />
                        </Col>
                   </Row>
                   <Row className="mt-5 mb-5">
                        <Col md={12} lg={12} sm={12}>
                           <Card style={{border: 'none'}}>
                           <Card.Body>
                                    {/* <Card.Title><strong style={{  fontSize: '15px'}}>Property: </strong>{this.props.data.property.title}</Card.Title> */}
                                    {/* <Card.Subtitle><strong>Type:</strong><Badge variant="danger"> {this.props.data.property.category}</Badge></Card.Subtitle> */}
                                    <Card.Text><strong  style={{  fontSize: '15px'}}>Description:</strong> {this.props.data.property.description}</Card.Text>
                                    <Card.Text><strong  style={{   fontSize: '15px'}}>Price: </strong>${this.props.data.property.price}</Card.Text>
                                    <Card.Text><strong  style={{   fontSize: '15px'}}>District: </strong>{this.props.data.property.district}</Card.Text>
                                  
                                  
                                    <Card.Text ><strong style={{   fontSize: '15px'}}>Features: </strong>{this.props.data.property.features}</Card.Text>
                                    <Card.Text ><strong style={{   fontSize: '15px'}}>Details: </strong>{this.props.data.property.details}</Card.Text>
                                    <Card.Text ><strong style={{   fontSize: '15px'}}>Region: </strong>{this.props.data.property.region}</Card.Text>
                                    <Button style={{ background: '#C82332', border: 'none', padding: '5px 25px', marginTop: '10px'}}
                                        as={Link} to={"/tenant/"}
                                    >Rent Property</Button>
                                  
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                      </Row>  
                 
                    <Maps/>
                </Col>
                    </Row>

       
            </Container>  
   </div>
          
           </>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PropertyDetails));
import React, {Component} from 'react';
import {  Card,  Container, Row, Col,Image, Badge, Button}from 'react-bootstrap'
import { connect } from "react-redux";
import StarRatingComponent from 'react-star-rating-component';
import {Link, withRouter} from 'react-router-dom'
import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import {GoLocation} from 'react-icons/go'
import {GiHouse} from 'react-icons/gi'
import Tenant from './Tenant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ScrollToTop from 'react-scroll-up'
import {  faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

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
    
    state = {
        viewport: {
          width: "80%",
          height: "100vh",
          latitude: 6.5236,
          longitude: 3.6006,
          zoom: 8
        },
        selectedProp: null,
        property: {}
      };
    
    componentDidMount = async () =>{
       await this.props.getListingThunk(this.props.match.params.id)
        const response = await fetch(`${process.env.REACT_APP_URL}/listings/${this.props.match.params.id}`)
        const property= await response.json()
        this.setState({property})
        const listener = e => {
            if (e.key === "Escape") {
              this.setState({selectedProp: null})
            }
          };
        
          window.addEventListener("keydown", listener);

        return () => {
        window.removeEventListener("keydown", listener);
        };
       
    }
    
  
    render(){
        console.log("from local state",this.state.property)
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

                       
                        </Col>
                        <Col md={12} lg={5} sm={12}>
                            <Tenant />
                        </Col>
                   </Row>
                   <Row className="mt-5 mb-5">
                        <Col md={12} lg={12} sm={12}>
                           <Card style={{border: 'none'}}>
                           <Card.Body>
                                   
                                    <Card.Text><strong  style={{  fontSize: '15px'}}>Description:</strong> {this.props.data.property.description}</Card.Text>
                                    <Card.Text><strong  style={{   fontSize: '15px'}}>Price: </strong>₦{this.props.data.property.price}</Card.Text>
                                    <Card.Text><strong  style={{   fontSize: '15px'}}>District: </strong>{this.props.data.property.district}</Card.Text>
                                  
                                  
                                    <Card.Text ><strong style={{   fontSize: '15px'}}>Features: </strong>{this.props.data.property.features}</Card.Text>
                                    <Card.Text ><strong style={{   fontSize: '15px'}}>Details: </strong>{this.props.data.property.details}</Card.Text>
                                    <Card.Text ><strong style={{   fontSize: '15px'}}>Region: </strong>{this.props.data.property.region}</Card.Text>
                                    <Button style={{ background: '#C82332', border: 'none', padding: '5px 25px', marginTop: '10px'}}
                                        as={Link} to={`/${this.props.match.params.id}/tenant`}
                                    >Rent Property</Button>
                                  
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                      </Row>  
                 
                      <div style={{overflow: "hidden", paddingLeft: "10vw"}}>
          <div> <h1>Properties Location</h1></div>
            <ReactMapGL
                {...this.state.viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle={"mapbox://styles/emmas4impact/ckg7q71if0lw019pn97kcf2yj"}
                onViewportChange={(viewport) => this.setState({viewport})}
            >
                
                    {console.log(this.props.data.property.location)}
                    {/* <Marker latitude={this.state.property.location.coordinates[1]} longitude={this.state.property.location.coordinates[0]}>
                    <GoLocation style={{color: "green"}}
                        />
                        <button
                            onClick={e=>{
                                e.preventDefault()
                                this.setState({selectedProp: this.state.property})
                                
                                }
                                     
                                     }
                        >
                        <GoLocation style={{color: "green"}}
                        />
                        </button>
                    </Marker>
                
               
                 {this.state.selectedProp ? (
                    <Popup
                        latitude={this.state.selectedProp.location.coordinates[1]}
                        longitude={this.state.selectedProp.location.coordinates[0]}
                        onClose={() => {
                        this.setState({selectedProp: null});
                        }}
                    >
                        <div>
                        <h2><GiHouse/> {this.state.selectedProp.title}</h2>
                        <p>{this.state.selectedProp.details}</p>
                        <p>{this.state.selectedProp.location.formattedAddress}</p>
                        </div>
                </Popup>
                ) : null} */}
               
              
             
            </ReactMapGL>  
            </div>
                </Col>
                    </Row>

                    <ScrollToTop showUnder={160}>
                    <FontAwesomeIcon icon={faArrowCircleUp} style={{fontSize: '40px', color: '#D42E3E'}}/>
                    </ScrollToTop>   
            </Container>  
   </div>
          
           </>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PropertyDetails));
import React, {Component} from 'react';
import {  Card,  Container, Row, Col} from 'react-bootstrap'
import { connect } from "react-redux";
import { Link, withRouter} from 'react-router-dom';
import Maps from '../map/Map'
import ReactDOM from 'react-dom'
import { faPhone, faEnvelope, faBed, faShower, faSquareRootAlt, faBorderStyle, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { addressIcon } from '../img/home-address.png'
//import StarRatingComponent from 'react-star-rating-component';
import ScrollToTop from 'react-scroll-up'


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
               
               <Col lg={4} md={6} sm={12} className="mb-3 mt-3" key={i}>
                    <Card style={{ background: '#F6F6F6'}} className='cardStyle'>
                        <Card.Img variant="top" src={property.image} className='imgStyle'/>
                        <Card.Body>
                        <Card.Text className='pt-3' style={{fontSize: '10px'}}>
                            {/* <img src={addressIcon}/> */}
                             <p ><img style={{width: '20px', marginRight: '6px'}} src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQ0M3B0IiB2aWV3Qm94PSItNjEgMCA0NDMgNDQzLjI4OCIgd2lkdGg9IjQ0M3B0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im05Ni4xNDQ1MzEgMTM2djg4aDMydi01NmMwLTQuNDE3OTY5IDMuNTgyMDMxLTggOC04aDQ4YzQuNDE3OTY5IDAgOCAzLjU4MjAzMSA4IDh2NTZoMzJ2LTg4YzAtNC40MTc5NjkgMy41ODIwMzEtOCA4LThoOC40ODA0NjlsLTgwLjQ4MDQ2OS02MS45MDIzNDQtODAuNDgwNDY5IDYxLjkwMjM0NGg4LjQ4MDQ2OWM0LjQxNzk2OSAwIDggMy41ODIwMzEgOCA4em0wIDAiLz48cGF0aCBkPSJtMTQ0LjE0NDUzMSAxNzZoMzJ2NDhoLTMyem0wIDAiLz48cGF0aCBkPSJtMTYwLjE0NDUzMSA0NDMuMjg5MDYyYzMwLjEwMTU2My0zNy41ODU5MzcgMTYwLTIwNC4zMjgxMjQgMTYwLTI4My4yODkwNjIgMC04OC4zNjcxODgtNzEuNjM2NzE5LTE2MC0xNjAtMTYwLTg4LjM2NzE4NyAwLTE2MCA3MS42MzI4MTItMTYwIDE2MCAwIDc4Ljk3NjU2MiAxMjkuODk0NTMxIDI0NS43MTA5MzggMTYwIDI4My4yODkwNjJ6bS0xMDguODc4OTA2LTMxMy42MDE1NjIgMTA0LTgwYzIuODc1LTIuMjE0ODQ0IDYuODgyODEzLTIuMjE0ODQ0IDkuNzU3ODEzIDBsMTA0IDgwYzIuNjkxNDA2IDIuMDk3NjU2IDMuNzU3ODEyIDUuNjY3OTY5IDIuNjU2MjUgOC44OTQ1MzEtMS4wOTc2NTcgMy4yMjY1NjMtNC4xMjUgNS40MDIzNDQtNy41MzUxNTcgNS40MTc5NjloLTI0djg4YzAgNC40MTc5NjktMy41ODIwMzEgOC04IDhoLTE0NGMtNC40MTc5NjkgMC04LTMuNTgyMDMxLTgtOHYtODhoLTI0Yy0zLjQyMTg3NSAwLTYuNDY0ODQzLTIuMTc5Njg4LTcuNTcwMzEyLTUuNDIxODc1LTEuMTAxNTYzLTMuMjQyMTg3LS4wMTk1MzEtNi44MjQyMTkgMi42OTE0MDYtOC45MTQwNjN6bTAgMCIvPjwvc3ZnPg==" />{property.location.formattedAddress}</p>
                             <p >{property.region}</p>
                            </Card.Text>
                            <Card.Title style={{fontWeight: '600', fontSize: '18px'}}>{property.title}</Card.Title>
                        
                            {/* <Card.Text style={{fontSize: '13px', fontWeight: '600'}}>
                             {property.descriptions}
                            </Card.Text> */}
                            <Card.Text style={{fontSize: '13px', fontWeight: '600', borderBottom: '1px solid #E8E8E8', paddingBottom: '20px'}}>
                             $ {property.price}
                            </Card.Text>
                            
                            {/* <Button variant="primary"
                            as={Link} 
                          >Go To property</Button> */}
                          <div className='hoverShow' style={{display: 'flex', justifyContent: 'space-between', margin: '20px 30px 5px', color : '#008001'}}>
                            <FontAwesomeIcon icon={faBed} className='hoverShow'/>
                            <FontAwesomeIcon icon={faShower} />
                            <FontAwesomeIcon icon={faBorderStyle} />
                          </div>
                        </Card.Body>
                        <Card.Footer className='footerCard'>
                              <div style={{display: 'flex' , justifyContent: 'space-between', alignItems: 'center', padding: '10px'}}>
                                 
                                  <button style={{border: 'none', backgroundColor: 'rgb(0, 128, 1, 0.5)', borderRadius: '10%', }}> <FontAwesomeIcon icon={faPhone} style={{color: '#fff'}}/></button>
                                  <button style={{border: 'none', backgroundColor: 'rgb(0, 128, 1, 0.5)', borderRadius: '10%'}}> <FontAwesomeIcon icon={faEnvelope} style={{color: '#fff'}}/></button> 
                                  <Link style={{border: 'none', background: '#008001', color: '#fff', fontSize: '14px'}} className="btn btn-primary" to={`/properties/${property._id}`}>
                            Review Details
                            </Link>
                              </div>
                          </Card.Footer>
                    </Card>
                </Col>
               
            ))}
            
            </Row>
           
             <Maps/>            

             <ScrollToTop showUnder={160}>
                    <FontAwesomeIcon icon={faArrowCircleUp} style={{fontSize: '40px', color: '#D42E3E'}}/>
                    </ScrollToTop>   
            </Container>  

          
           </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PropertyListing));
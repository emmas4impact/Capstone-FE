import React, {Component} from 'react';
import {  Card,  Container, Row, Col,ToggleButtonGroup, ToggleButton,Alert} from 'react-bootstrap'
import { connect } from "react-redux";
import { Link, withRouter} from 'react-router-dom';
import Maps from '../map/Map'



const BASE_URL = process.env.REACT_APP_URL

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({


getListingThunk: (listings) => dispatch(getListingWithThunk(listings)),
getTotalListingThunk: (totalProperties) => dispatch(getTotalListingWithThunk(totalProperties))

});
const getListingWithThunk = (listings) => {
    
    return async(dispatch, getState) => {
        const skip=(getState().data.currentPageNum * getState().data.numPerPage)-getState().data.numPerpage
        const data= await fetch(`${BASE_URL}/listings?limit=${getState().data.numPerPage}&offset=${skip}`)
        listings  = await data.json()
        console.log("A thunk was used to dispatch this action", getState());
        dispatch({
            type: "GET_PROPERTY",
            payload: listings.data,
        });
       
    };
  };

  const getTotalListingWithThunk = (totalProperties) => {
    
    return async(dispatch, getState) => {
        const data= await fetch(`${BASE_URL}/listings`)
        totalProperties  = await data.json()
        console.log("A thunk was used to dispatch this action", getState());
        dispatch({
            type: "TOTAL_PROPERTIES",
            payload: totalProperties.Total,
        });
       
    };
  };

class PropertyListing extends Component {
    
    componentDidMount = async (id) =>{
        this.props.getListingThunk(id)
        this.props.getTotalListingThunk(id)
        
    }
    changePage = (value, c) => {
        if (value > 1) {
            this.props.data.currentPageNum = value
        } else {
            this.props.data.currentPageNum = 1
        }
        this.props.getTotalListingThunk(c)
    }
    render(){
        const pageNums =  []
        for(let i =1; i <= Math.ceil(this.props.data.Total/this.props.data.numPerPage); i++){
            pageNums.push(i)
        }
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
                            
                        </Card.Body>
                    </Card>
                </Col>
               
            ))}
            
            </Row>
            <div> <h1>Properties Location</h1></div>
             <Maps/>    
             <Alert variant="info" className="text-center">page <strong>{this.props.data.currentPageNum}</strong> of <strong>{pageNums.length}</strong></Alert>
             <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="py-3">
                        {pageNums.map((number) => {
                            
                            if (((number === 1) || (number === pageNums.length)) || ((number > this.props.data.currentPageNum - 3) && (number < this.props.data.currentPageNum + 3))) {
                                return (
                                    <ToggleButton className="border" variant="secondary" key={number} value={number} onClick={() => this.changePage(number)}> {number}</ToggleButton>
                                )
                            }
                            
                            else {
                                if (number < 3) {
                                    return (
                                        <ToggleButton className="border" variant="secondary" key={number} value={number} onClick={() => this.changePage(number)}> {'<<'}</ToggleButton>
                                    )
                                } else if (number > pageNums.length - 2) {
                                    return (
                                        <ToggleButton className="border" variant="secondary" key={number} value={number} onClick={() => this.changePage(number)}> {'>>'}</ToggleButton>
                                    )
                                }
                            }
                            
                        })
                        }
                    </ToggleButtonGroup>           
            </Container>  

          
           </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PropertyListing));
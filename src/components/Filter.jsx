import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'
import NavBar from './NavBar'
import FormSearch from './FormSearch'
import {withRouter} from 'react-router-dom'

 class Filter extends Component {
    render() {
      // console.log(this.props.location.pathname)
        return (
            <>
            <div className='back'>
            <NavBar />

            {this.props.location.pathname==="/properties" &&<>
              <Container className='welcome'>
              {/* <h6 style={{ 'letterSpacing': '5px', color: "purple"}}>Bridge Homes The Place</h6>
              <h2 style={{ 'letterSpacing': '5px', marginTop: '10px',color: "purple"}}>To Find Your Dream Home</h2>
              <h5 style={{ 'letterSpacing': '3px', marginTop: '5px', color: "purple"}}>From as low as 1500 Naira per day with limited time offer discounts.</h5> */}
            <div style={{display: 'flex', marginTop: '30px'}}> 
              <Button variant='danger' className='mr-2'>
                  Buy
              </Button>
              <Button variant='success'>
                  Rent
              </Button>
            </div>
              </Container>
              <FormSearch />
            </>  }
              </div>
            </>
        )
    }
}
export default withRouter(Filter)
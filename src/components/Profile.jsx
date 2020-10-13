import React, {Component} from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {Jumbotron, Button} from 'react-bootstrap'
const BASE_URL = process.env.REACT_APP_URL

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({


getListingThunk: (users) => dispatch(getListingWithThunk(users)),

});
const getListingWithThunk = (users) => {
   
    
    return async(dispatch, getState) => {
        const res = await axios.get(`${BASE_URL}/users/me`, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })
        
        users  = await res
       
        // console.log("A thunk was used to dispatch this action", getState());
        dispatch({
            type: "GET_USER",
            payload: users,
        });
        // console.log("Property By ID", users)
    
    };
  };

class Profile extends Component{
    
    componentDidMount = async (id) =>{
       await this.props.getListingThunk(id)
       
    }
    
   
    render(){
        return(
            <>
                <Jumbotron>
                    <h1>Welcome!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
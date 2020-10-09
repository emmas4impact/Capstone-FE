import React, {Component} from 'react';
import {connect} from 'react-redux'
const BASE_URL = process.env.REACT_APP_URL

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({


getListingThunk: (users) => dispatch(getListingWithThunk(users)),

});
const getListingWithThunk = (users) => {
   
    
    return async(dispatch, getState) => {
        const data= await fetch(`${BASE_URL}/users/me`)
        users  = await data.json()
       
        console.log("A thunk was used to dispatch this action", getState());
        dispatch({
            type: "GET_USER",
            payload: users,
        });
        console.log("Property By ID", users)
    
    };
  };

class Profile extends Component{
    
    componentDidMount = async (id) =>{
       await this.props.getListingThunk(id)
       
    }
    
   
    render(){
        return(
            <div>Hello</div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
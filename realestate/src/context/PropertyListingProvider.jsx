import React, {Component}  from 'react';

const BASE_URL = process.env.REACT_APP_SERVER_URL
class PropertyListingsProvider extends Component{
    state=DefaultState
    
    
    componentDidMount = async() =>{
        const response = await fetch(`${BASE_URL}/listings`)
        const data = await response.json()
        this.setState({
            propertyListings: data
        })
        
    }
    render(){
        const {children} = this.props
        const {propertyListings} = this.state
        
        return(
            <PropertyListingsContext.Provider
            value={{
                propertyListings
            }}
            >
            {children}
            </PropertyListingsContext.Provider>
        )
    }
}
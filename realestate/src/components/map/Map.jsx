import React, {Component} from 'react'
import './site.css'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps = (state) => state;
class Maps extends Component{
    
        state = {
            lng: -74.5,
            lat: 40,
            zoom: 2
        };

    componentDidMount =()=>{
       console.log(this.props) 
    }
   
    
    render(){
        const Map = ReactMapboxGl({
            accessToken:
              process.env.REACT_APP_MAPBOX_TOKEN
        });
        return(
            <>
                <Map
                    style="mapbox://styles/mapbox/streets-v11"
                    containerStyle={{
                        height: '100vh',
                  
                }}
                >
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        <Feature coordinates={[6.5244, 3.3792]} />
                    </Layer>
                </Map>;
               
               
            </>)
    }
    
}

export default withRouter(connect(mapStateToProps, null) (Maps));
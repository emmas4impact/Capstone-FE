import React, {Component} from 'react'
import './site.css'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const mapStateToProps = (state) => state;
class Maps extends Component{
    
        state = {
            lng: 9.0820,
            lat: 8.6753,
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
                    // eslint-disable-next-line react/style-prop-object
                    style="mapbox://styles/mapbox/streets-v11"
                    containerStyle={{
                        height: '100vh',
                        width: '100vw'
                }}
                >
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        <Feature coordinates={[9.0820, 8.6753]} />
                    </Layer>
                </Map>
               
               
            </>)
    }
    
}

export default withRouter(connect(mapStateToProps, null) (Maps));
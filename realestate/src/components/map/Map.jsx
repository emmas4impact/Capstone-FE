import React, {Component} from 'react'
import './site.css'
import ReactMapGL,{Marker} from 'react-map-gl';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {GoLocation} from 'react-icons/go'

const mapStateToProps = (state) => state;


 
class Map extends Component {
 
  state = {
    viewport: {
      width: "100%",
    //   height: "100vh",
      latitude: 6.5236,
      longitude: 3.6006,
      zoom: 8
    }
  };
 
  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={"mapbox://styles/emmas4impact/ckg7q71if0lw019pn97kcf2yj"}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
          <GoLocation style={{color: "white"}}/>
          
      </ReactMapGL>
    );
  }
}
export default withRouter(connect(mapStateToProps, null) (Map));
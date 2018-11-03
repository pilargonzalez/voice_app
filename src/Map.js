import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 25.76, lng: -80.19 },
    zoom: 11
  }
  render() {
      return (
        <div className='google-map'>
          <GoogleMapReact
            defaultCenter={ this.props.center }
            defaultZoom={ this.props.zoom }
            bootstrapURLKeys={{ key: "AIzaSyD4ZzMX_7mndy2PGSdWUn1TCsFFBXNsFSs" }}
            >

          </GoogleMapReact>
        </div>
      )
    }
}
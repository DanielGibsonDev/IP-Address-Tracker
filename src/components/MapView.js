import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import styled from 'styled-components';
import '../App.css';
import loadingGif from '../images/loading-img-large.svg';

class MapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasData: false,
      mapCenter: {
        lat: '',
        lng: ''
      },
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.geoData !== this.props.geoData) {
      this.handlePropUpdate()
    }
  }

  handlePropUpdate() {
    if (this.props.geoData) {
      const { latitude, longitude } = this.props.geoData
      this.setState({
        mapCenter: {
          lat: latitude,
          lng: longitude
        },
        hasData: true
      })
    }
  }

  render() {
    const { mapCenter, hasData } = this.state;
    const { lat, lng } = mapCenter;
    return (
      <MapDiv>
        {!(hasData) && (
          <PlaceHolderImage src={loadingGif}></PlaceHolderImage>
        )}
        {(hasData) && (
          <GoogleMap
            bootstrapURLKeys={{ key: "" }}
            zoom={14}
            center={{ lat, lng }}
            options={{fullscreenControl: false, zoomControl: false}}
          >
            <MapMarker 
              lat={lat}
              lng={lng}
            />
          </GoogleMap>
        )}
      </MapDiv>
    )
  }
}

const PlaceHolderImage = styled.img`
  display: block;
  margin: auto;
  padding-top: 200px;
  @media (max-width: 770px ) {
    padding-top: 300px;
  }
`

const MapMarker = () => {
  return <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="56"><path fillRule="evenodd" d="M39.263 7.673c8.897 8.812 8.966 23.168.153 32.065l-.153.153L23 56 6.737 39.89C-2.16 31.079-2.23 16.723 6.584 7.826l.153-.152c9.007-8.922 23.52-8.922 32.526 0zM23 14.435c-5.211 0-9.436 4.185-9.436 9.347S17.79 33.128 23 33.128s9.436-4.184 9.436-9.346S28.21 14.435 23 14.435z"/></svg>
  </div>
}

const MapDiv = styled.div`
  z-index: -4;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 280px;
  @media (max-width: 770px) {
    margin-top: -175px;
    top: 455px;
  }
`

export default MapView;

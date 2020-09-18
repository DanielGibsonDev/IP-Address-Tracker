import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import isEmpty from 'lodash.isempty';
import styled from 'styled-components';
import '../App.css';

class MapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      geoData: [],
      defaultCenter: {
        lat: -36.8568,
        lng: 174.759
      },
    }
  }

  componentDidMount() {
    // Had a CORS issue with trying to directly access ipify so went through proxy server
    fetch(`https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v1?apiKey=at_F3wbWYzAHjbk3RKqmTypEFn5oJDTk&ipAddress=%20103.233.220.252`)
      .then((response) => response.json())
      .then((data) => this.setState({ geoData: data }))
  }

  render() {
    const { geoData, defaultCenter } = this.state;
    return (
      <MapDiv>
        {!isEmpty(geoData) && (
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAVwL4PEHFXQShKmnD6UPqtqBZEvBNQ86U" }}
            defaultCenter={{lat: geoData.location.lat, lng: geoData.location.lng}}
            defaultZoom={14}
            // center={{lat: geoData.location.lat, lng: geoData.location.lng }}
            // yesIWantToUseGoogleMapApiInternals
            // onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, geoData)}
          >
            <MapMarker 
              lat={geoData.location.lat}
              lng={geoData.location.lng}
            />
          </GoogleMapReact>
        )}
      </MapDiv>
    )
  }
}


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

// // Return map bounds based on list of places
// const getMapBounds = (map, maps, geoData) => {
//   const bounds = new maps.LatLngBounds();

//   bounds.extend(new maps.LatLng(
//     geoData.location.lat,
//     geoData.location.lng,
//   ));
//   return bounds;
// };

// // Re-center map when resizing the window
// const bindResizeListener = (map, maps, bounds) => {
//   maps.event.addDomListenerOnce(map, 'idle', () => {
//     maps.event.addDomListener(window, 'resize', () => {
//       map.fitBounds(bounds);
//     });
//   });
// };

// // Fit map to its bounds after the api is loaded
// const apiIsLoaded = (map, maps, geoData) => {
//   // Get bounds by our places
//   const bounds = getMapBounds(map, maps, geoData);
//   // Fit map to bounds
//   map.fitBounds(bounds);
//   // Bind the resize listener
//   bindResizeListener(map, maps, bounds);
// };


export default MapView;

import React, { Component } from 'react';
import styled from 'styled-components';
import Search from './components/Search.js'
import KeyInfo from './components/KeyInfo.js'
import MapView from './components/MapView.js'
import './App.css';
import backgroundPattern from './images/pattern-bg.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingAPI: false,
      geoData: [],
      errorAPI: ''
    }
  }

  onSearchSubmit = (value) => {
    this.setState({ loadingAPI: true })
    this.handleGetAPI(value)
  }

  // Handle search query for IP address or domain name
  async handleGetAPI(searchQuery) {
    try {
      const response = await fetch(`https://json.geoiplookup.io/${searchQuery}`);
      const json = await response.json();
      this.setState({ geoData: json, loadingAPI: false })
    } catch (error) {
      console.log(error);
      this.setState({ errorAPI: error })
    }
  }

  // On first page load show the users IP Address and Geo location on map
  async componentDidMount() {
    try {
      const response = await fetch(`https://json.geoiplookup.io/`);
      const json = await response.json();
      this.setState({ geoData: json })
    } catch (error) {
      console.log(error)
      this.setState({ errorAPI: error })
    }
  }

  render() {
    const { geoData, loadingAPI } = this.state;
    return (
      <div>
        <BackgroundImg />
        <Container>
          <Title>IP Address Tracker</Title>
          <Search onSearchSubmit={this.onSearchSubmit} inputError={geoData.error ? "Error: " + geoData.error : ''} loadingAPI={loadingAPI} />
          <KeyInfo geoData={geoData} />
        </Container>
        <MapView geoData={geoData} />
      </div>
    )
  }
}

const BackgroundImg = styled.div`
  background-image: url(${backgroundPattern});
  height: 280px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;
  position: absolute;
`

const Container = styled.div`
  width: calc(100% - 46px);
  max-width: 1110px;
  margin: 0 auto;
  padding-top: 22px;
`

const Title = styled.h1`
  font-size: 1.95rem;
  font-weight: 500;
  text-align: center;
  color: #fff;
  margin: 0;
  padding-bottom: 17px;
  @media (max-width: 770px) {
    font-size: 1.6rem;
  }
`

export default App;

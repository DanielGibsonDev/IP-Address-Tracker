import React from 'react';
import styled from 'styled-components';
import Search from './components/Search.js'
import KeyInfo from './components/KeyInfo.js'
import MapView from './components/MapView.js'
import './App.css';
import backgroundPattern from './pattern-bg.png';

const App = () => {
  return (
    <div>
      <BackgroundImg />
      <Container>
        <Title>IP Address Tracker</Title>
        <Search />
        <KeyInfo />
        <MapView />
      </Container>
    </div>
  )
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
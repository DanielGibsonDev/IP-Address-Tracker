import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';

class KeyInfo extends Component {
  state = {
  }

  render() {
    return (
      <Container>
        <KeyInfoElement>
          <Heading>IP Address</Heading>
          <Value>192.212.174.101</Value>
        </KeyInfoElement>
        <KeyInfoElement>
          <Heading>Location</Heading>
          <Value>Brooklyn, NY 10001</Value>
        </KeyInfoElement>
        <KeyInfoElement>
          <Heading>TimeZone</Heading>
          <Value>192</Value>
        </KeyInfoElement>
        <KeyInfoElement>
          <Heading>ISP</Heading>
          <Value>192</Value>
        </KeyInfoElement>
      </Container>
    )
  }
}

const Container = styled.div`
  max-width: 1100px;
  min-height: 161px;
  background-color: #fff;
  border-radius: 17px;
  margin-top: 46px;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.1);
  display: flex;
  @media (max-width: 770px) {
    flex-direction: column;
    min-height: 275px;
    padding-bottom: 20px;
    align-items: center;
    width: 328px;
    margin: 23px auto 0;
  }
`

const KeyInfoElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 34px 32px 20px;
  width: 195px;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: calc(50% - 37.5px);
    right: 0;
    height: 75px;
    border-right: 1px solid rgba(0,0,0,0.15);
  }
  @media (max-width: 770px) {
    &:not(:last-child)::after {
      height: 0;
      top: 0;
    }
    width: auto;
    text-align: center;
    padding: 23px 20px 0;
  }
`

const Heading = styled.h2`
  color: var(--dark-gray);
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1.3px;
  margin: 0 0 9px 0;
  @media (max-width: 770px) {
    font-size: 0.65rem;
    margin-bottom: 5px;
  }
`
const Value = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--very-dark-gray);
  margin: 0;
  line-height: 1.2;
  @media (max-width: 770px) {
    font-size: 1.25rem;
  }
`

export default KeyInfo;

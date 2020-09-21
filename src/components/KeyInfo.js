import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import loadingGif from '../images/loading-img.svg';

class KeyInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ipAddress: '',
      location: '',
      timezone: '',
      isp: '',
    }
  }


  componentDidUpdate(prevProps) {
    if (prevProps.geoData !== this.props.geoData) {
      this.handlePropUpdate()
    }
  }

  handlePropUpdate() {
    if (this.props.geoData) {
      const { ip, city, country_code, postal_code, isp, timezone_name } = this.props.geoData
      const ct = require('countries-and-timezones');
      const timezone = ct.getTimezone(timezone_name)
      this.setState({
        ipAddress: ip ? ip : '',
        location: `${city ? city : ''}, ${country_code ? country_code : ''} ${postal_code ? postal_code : ''}`,
        timezone: `${timezone ? "UTC" : ''} ${timezone ? timezone.utcOffsetStr : ''}`,
        isp : isp ? isp : ''
      })
    }
  } 

  render() {
    const { ipAddress, location, timezone, isp } = this.state
    return (
      <Container>
        <KeyInfoElement>
          <Heading>IP Address</Heading>
          <Value>
            { !(ipAddress) && ( <LoadingImg alt="loading dots" src={loadingGif}></LoadingImg> )}
            {ipAddress}
          </Value>
        </KeyInfoElement>
        <KeyInfoElement>
          <Heading>Location</Heading>
          <Value>
            { !(location) && ( <LoadingImg alt="loading dots" src={loadingGif}></LoadingImg> )}
            {location}
          </Value>
        </KeyInfoElement>
        <KeyInfoElement>
          <Heading>TimeZone</Heading>
          <Value>
            { !(timezone) && ( <LoadingImg alt="loading dots" src={loadingGif}></LoadingImg> )}
            {timezone}
          </Value>
        </KeyInfoElement>
        <KeyInfoElement>
          <Heading>ISP</Heading>
          <Value>
            { !(isp) && ( <LoadingImg alt="loading dots" src={loadingGif}></LoadingImg> )}
            {isp}
          </Value>
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
  padding: 34px 40px 20px;
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

const LoadingImg = styled.img `
  display: block;
  padding-left: 10px;
`


// const LoadingGif = () => {
//   return <div>
//     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255) none repeat scroll 0% 0%; display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
//     <circle cx="50" cy="50" fill="none" stroke="#4750a9" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
//       <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
//     </circle></svg>
//   </div>
// }

export default KeyInfo;

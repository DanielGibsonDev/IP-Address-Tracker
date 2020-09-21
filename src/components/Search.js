import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import loadingGif from '../images/loading-img.svg';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      hasBorder: false,
    }
  }

  handleOnChange = event => {
    this.setState({
      searchInput: event.target.value,
      hasBorder: event.target.value === '' ? false : true,
    })
  }

  handleSubmit = event => {
    this.props.onSearchSubmit(this.state.searchInput)
    event.preventDefault();
  }

  render() {
    const { hasBorder, searchInput } = this.state
    const { inputError, loadingAPI } = this.props
    return (
      <SearchForm onSubmit={this.handleSubmit}>
        <WhiteBackground />
        <InputEffect>
          <SearchInput 
            type="text" 
            placeholder="" 
            className={` ${hasBorder ? "has-content" : ""} ${inputError ? "error-border" : ""} `}
            value={ searchInput } 
            onChange={ this.handleOnChange } 
          />
          {(loadingAPI) && (
            <LoadingImg src={loadingGif} alt=""/>
          )}
          <Label>Search for any IP address or domain</Label>
          <ErrorMessage 
            className={ inputError ? "" : "hide-error-message"}
          >
            {inputError}
          </ErrorMessage>
        </InputEffect>
        
        <SearchSubmit type="submit">{iconArrow}</SearchSubmit>
      </SearchForm>
    )
  }
}

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const WhiteBackground = styled.div`
  position: absolute;
  width: 500px;
  height: 56px;
  background-color: #fff;
  z-index: -2;
  margin-right: 57px;
  border-radius: 17px 0 0 17px;
  @media (max-width: 770px) {
    width: 270px;
  }
`

const InputEffect = styled.div`
  position: relative;
`

const SearchInput = styled.input`
  width: 500px;
  height: 56px;
  border-radius: 17px 0 0 17px;
  border: 2px solid #fff;
  padding: 0 10px 0 25px;
  box-sizing: border-box;
  transition: 0.4s; 
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
    border: 2px solid #000;
    transition: 0.4s;
  }
  @media (max-width: 770px) {
    width: 270px;
  }
`

const Label = styled.label`
  position: absolute; 
  left: 26px; 
  width: 100%; 
  top: 14px; 
  color: var(--dark-gray); 
  transition: 0.3s; 
  z-index: -1; 
  font-weight: 400;

  ${SearchInput}:focus ~ &,
  .has-content ~ & {
    top: -18px; 
    left: 25px; 
    font-size: 12px; 
    color: #fff;
    transition: 0.3s;
  }
  @media (max-width: 770px) {
    font-size: 14px;
    left: 25px;
    top: 17px;
  }
`

const SearchSubmit = styled.button`
  width: 58px;
  height: 56px;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0;
  border-radius: 0 17px 17px 0;
  border: 0;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: var(--very-dark-gray);
  }
`

const ErrorMessage = styled.div`
  position: absolute;
  bottom: -27px;
  left: 25px;
  font-size: 13px;
  font-weight: 400;
  color: #D8000C;
  background-color: #FFBABA;
  padding: 3px 10px;
  border-radius: 0 0 10px 10px;
`

const LoadingImg = styled.img`
  position: absolute;
  right: 10px;
  top: 2px;
  height: 52px;
`

const iconArrow = <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>

export default Search;

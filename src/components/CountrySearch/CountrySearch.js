import React from 'react';

import './CountrySearch.scss';

export default class CountrySearch extends React.Component{
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({
            inputValue: e.target.value
        })
    };

    handleClick = (e) => {
        e.preventDefault();
        this.props.searchMethod(this.state.inputValue);
        this.setState({
            inputValue: ''
        })
    };

    render(){
        return (
            <form className="country-search">
                <label  
                    htmlFor="countryName" 
                    className="country-search__label">
                    Write the country name in:
                </label>
                <input 
                    id="countryName" type="text" 
                    className="country-search__input" 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange} />
                <p className="country-search__info">{this.props.error}</p>
                <button 
                    className="country-search__button" 
                    onClick={this.handleClick}>
                    Show the country
                </button>
            </form>
        )
    }
}


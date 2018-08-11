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
            <form className="search">
                <label  htmlFor="countryName" 
                        className="search_label">Write the country name in:</label>
                <input  id="countryName" type="text" className="search_input" 
                        value={this.state.inputValue} onChange={this.handleInputChange} />
                {<p className="search_info">{this.props.error}</p>}
                <button className="search_button" 
                        onClick={this.handleClick}>Show the country</button>
            </form>
        )
    }
}


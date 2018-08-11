import React from 'react';

import './CountryDescription.scss';

export default class CountryDescription extends React.Component{
    render(){
        return (
            <div className="countryInfo">
                <div className="countryInfo_text">
                    <h2 className="countryInfo_name">{this.props.countryData.name}</h2>
                    <h3 className="countryInfo_capital">Capital: {this.props.countryData.capital}</h3>
                    <p className="countryInfo_more">Currency: {this.props.countryData.currencies.map(
                        elem => elem.name + ', '
                    )}</p>
                    <p className="countryInfo_more">Official languages: {this.props.countryData.languages.map(
                    elem => elem.name + ', '
                    )}</p>
                    <a  className="countryInfo_link" target="_blank" 
                        href={`https://en.wikipedia.org/wiki/${this.props.countryData.name}`}>More on Wikipedia</a>
                </div>
                <img src={this.props.countryData.flag} className="countryInfo_flag" />
            </div>
        )
    }
}
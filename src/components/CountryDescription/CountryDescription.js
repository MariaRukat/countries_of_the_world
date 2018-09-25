import React from 'react';

import './CountryDescription.scss';

export default class CountryDescription extends React.Component{
    render(){
        return (
            <div className="country-description">
                <div className="country-description__text">
                    <h2     
                        className="country-description__name">
                        {this.props.countryData.name}
                    </h2>
                    <h3 
                        className="country-description__capital">
                        Capital: 
                        {this.props.countryData.capital} 
                    </h3>
                    <p 
                        className="country-description__more">
                        Currency: 
                        {this.props.countryData.currencies.map(elem => elem.name + ', ')}
                    </p>
                    <p 
                        className="country-description__more">
                        Official languages: 
                        {this.props.countryData.languages.map(elem => elem.name + ', ')}
                    </p>
                    <a  
                        className="country-description__link" 
                        target="_blank" 
                        href={`https://en.wikipedia.org/wiki/${this.props.countryData.name}`}>
                        More on Wikipedia
                    </a>
                </div>
                <img 
                    src={this.props.countryData.flag} 
                    className="country-description__flag"/>
            </div>
        )
    }
}
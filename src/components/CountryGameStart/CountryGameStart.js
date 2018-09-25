import React from 'react';

import './CountryGameStart.scss';

export default class CountryGameStart extends React.Component{
    
    handleClick = (e) => {
        e.preventDefault();
        this.props.clickMethod();
    }

    render(){
        return (
            <div className="country-game-start">
                <p 
                    className="country-game-start__info">
                    Computer will draw one country and show it on the map.
                </p>
                <p 
                    className="country-game-start__info">
                    Your task is to write the name of this country in the brackets.
                </p>
                <button 
                    className="country-game-start__button" 
                    onClick={this.handleClick}>
                    Select the country
                </button>
                <span 
                    className="country-game-start__score">
                    Score: {this.props.score}
                </span>
            </div>
        )
    }
}
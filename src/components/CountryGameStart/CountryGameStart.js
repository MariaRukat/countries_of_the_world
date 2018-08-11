import React from 'react';

import './CountryGameStart.scss';

export default class CountryGameStart extends React.Component{
    
    handleClick = (e) => {
        e.preventDefault();
        this.props.clickMethod();
    }

    render(){
        return (
            <div className="game_start">
                <p className="game_info">Computer will select one country and show it on the map.</p>
                <p className="game_info"> Your task is to write the name of this country.</p>
                <button className="game_button" 
                        onClick={this.handleClick}>Select the country</button>
                <span className="game_score">Score: {this.props.score}</span>
            </div>
        )
    }
}
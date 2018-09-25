import React from 'react';

import './CountryGameAnswer.scss';

export default class CountryGameAnswer extends React.Component{
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

    handleCheckClick = (e) => {
        e.preventDefault();
        if (this.state.inputValue){
            this.props.methodForCheck(this.state.inputValue);
        }
        this.setState({
            inputValue: ''
        })
    };

    handleTipClick = (e) => {
        e.preventDefault();
        this.props.methodForTip();
    }

    render(){
        return (
            <form className="country-game-answer">
                <label 
                    htmlFor="answer" 
                    className="country-game-answer__label">
                    What is the name of the country?
                </label>
                <input  
                    id="answer" 
                    type="text" 
                    className="country-game-answer__input" 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange}/>
                <button 
                    className="country-game-answer__button" 
                    onClick={this.handleCheckClick}>
                    Check
                </button>
                <p 
                    className="country-game-answer__text">
                    or
                </p>
                <button 
                    className="country-game-answer__button" 
                    onClick={this.handleTipClick}>I want a tip</button>
                <p 
                    className="country-game-answer__text">
                    {this.props.tip}
                </p>
                {this.props.children}
            </form>
        )
    }
}


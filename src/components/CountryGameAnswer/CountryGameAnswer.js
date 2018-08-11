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
            <form className="game_answer">
                <label htmlFor="answer" className="game_label">What is the name of the country?</label>
                <input  id="answer" type="text" className="game_input" 
                        value={this.state.inputValue} 
                        onChange={this.handleInputChange}/>
                <button className="game_button" 
                        onClick={this.handleCheckClick}>Check</button>
                <p className="game_text">or</p>
                <button className="game_button" 
                        onClick={this.handleTipClick}>I want a tip</button>
                <p className="game_text">{this.props.tip}</p>
                {this.props.children}
            </form>
        )
    }
}


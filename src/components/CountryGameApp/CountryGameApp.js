import React from 'react';

import CountryGameStart from "./../CountryGameStart/CountryGameStart";
import CountryGameAnswer from "./../CountryGameAnswer/CountryGameAnswer";
import CountryMap from "./../CountryMap/CountryMap";
import CountryDescription from "./../CountryDescription/CountryDescription";

import './CountryGameApp.scss';

export default class CountryGameApp extends React.Component{
    constructor(){
        super();
        this.state = {
            randomCountry: {},
            properAnswer: false,
            currentAnswer: '',
            score: 0,
            tip: null
        }
    }

    getRandomCountry = () => {
        this.setState({
            properAnswer: false,
            tip: ''
        })
        fetch("https://restcountries.eu/rest/v2/all")
            .then(res => res.json())
            .then(data => {
                const dataFilter = data.filter( country => country.area > 100000);
                this.setState({
                    randomCountry: dataFilter[Math.floor(Math.random()*dataFilter.length)]
                });
            });
    }

    checkAnswer = (dataFromInput) => {
        let answerFromUser = dataFromInput.toLowerCase();
        let correctAnswer = this.state.randomCountry.name.toLowerCase();
        if(correctAnswer === answerFromUser && dataFromInput !== this.state.currentAnswer){
            this.setState({
                properAnswer: true,
                currentAnswer: dataFromInput,
                score: this.state.score + 1,
                tip: ''
            })
        }else{
            this.setState({
                properAnswer: false
            })
        }
    };

    giveTip = () => {
        if(this.state.randomCountry.name){
           this.setState({
                tip: `Capital of this country is ${this.state.randomCountry.capital}.`
            })
        }
    }

    render(){
        return (
            <div>
                <div className="game">
                    <CountryGameStart clickMethod={this.getRandomCountry} score={this.state.score} />
                    <CountryGameAnswer 
                        methodForCheck={this.checkAnswer} 
                        methodForTip={this.giveTip} 
                        tip={this.state.tip}/>
                    {this.state.properAnswer && <CountryDescription countryData={this.state.randomCountry}/>}
                </div>
                <CountryMap country={this.state.randomCountry} />
            </div>
        )
    }
}

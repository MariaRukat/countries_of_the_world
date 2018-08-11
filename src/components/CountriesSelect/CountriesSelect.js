import React from 'react';

import './CountriesSelect.scss';

export default class CountriesSelect extends React.Component{
    constructor(){
        super();
        this.state = {
            languageSelect: '---',
            regionSelect: '---'
        }
    }

    handleLanguageSelect = (e) => {
        e.preventDefault();
        this.setState({
            languageSelect: e.target.value,
            regionSelect: '---'
        })
    };

    handleRegionSelect = (e) => {
        e.preventDefault();
        this.setState({
            regionSelect: e.target.value,
            languageSelect: '---'
        })
    };

    handleClick = (e,param) => {
        e.preventDefault();
        param === 'lang'
            ? this.props.searchMethod(this.state.languageSelect, param)
            : this.props.searchMethod(this.state.regionSelect, param)
    };

    render(){
        return (
            <div className="selectForm">
                <h3 className="selectForm_mainTitle">Show the countries selected by:</h3>
                <form className="selectForm_box">
                    <h3 className="selectForm_title">Language</h3>
                    <select className="selectForm_select" 
                            value={this.state.languageSelect} 
                            onChange={this.handleLanguageSelect}>
                        <option value="---" disabled>---</option>
                        <option value="AR">Arabic</option>
                        <option value="EN">English</option>
                        <option value="FR">French</option>
                        <option value="DE">German</option>
                        <option value="PT">Portuguese</option>
                        <option value="RU">Russian</option>
                        <option value="ES">Spanish</option>
                    </select>
                    <button className="selectForm_button" onClick={(e) => this.handleClick(e,'lang')}>OK</button>
                </form>
                <form className="selectForm_box">
                    <h3 className="selectForm_title">Region</h3>
                    <select className="selectForm_select" 
                            value={this.state.regionSelect} 
                            onChange={this.handleRegionSelect}>
                        <option value="---" disabled>---</option>
                        <option value="africa">Africa</option>
                        <option value="asia">Asia</option>
                        <option value="americas">Americas</option>
                        <option value="europe">Europe</option>
                        <option>Oceania</option>
                    </select>
                    <button className="selectForm_button" onClick={(e) => this.handleClick(e,'region')}>OK</button>
                </form>
            </div>
        )
    }
}
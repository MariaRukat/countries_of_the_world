import React from 'react';

import CountrySearch from './../CountrySearch/CountrySearch';
import CountryDescription from './../CountryDescription/CountryDescription';
import CountryMap from './../CountryMap/CountryMap';

import './OneCountryApp.scss';

export default class OneCountryApp extends React.Component{
    constructor(){
        super();
        this.state = {
            country: {},
            pending: true,
            errorInfo: ''
        }
    }

    getData = (dataFromInput) => {
        fetch(`https://restcountries.eu/rest/v2/name/${dataFromInput}`)
                .then(res => res.json())
                .then(data => {
                    if(data[0]){
                        this.setState({
                            country: data[0],
                            pending: false,
                            errorInfo: ''
                        })
                    }else {                    
                        this.setState({
                            errorInfo: 'There is no such country.'
                        })
                    }
                })
    }
    

    render(){
        return (
            <main>
                <div className="main">
                    <CountrySearch searchMethod={this.getData} error={this.state.errorInfo}/>
                    {!this.state.pending
                        ? <CountryDescription countryData={this.state.country}/>
                        : null
                    }
                </div>
                <CountryMap country={this.state.country}/>
            </main>
        )
    }
}

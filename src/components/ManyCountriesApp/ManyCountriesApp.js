import React from 'react';

import CountriesSelect from "./../CountriesSelect/CountriesSelect";
import CountryDescription from "./../CountryDescription/CountryDescription";
import CountryMap from "./../CountryMap/CountryMap";

import './ManyCountriesApp.scss';

export default class ManyCountriesApp extends React.Component{
    constructor(){
        super();
        this.state = {
            countries: [],
            pending: true
        }
    }

    getData = (dataFromSelect,typeOfData) => {
        fetch(`https://restcountries.eu/rest/v2/${typeOfData}/${dataFromSelect}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    countries: data,
                    pending: false
                })
            });
    };

    render(){
        return (
            <div className="many-countries">
                <CountriesSelect 
                    searchMethod={this.getData}/>
                <CountryMap 
                    country={this.state.countries}/>
                {this.state.pending
                    ? null
                    : <div className="many-countries__box">
                        {this.state.countries.map( (elem,index) => {
                        return <CountryDescription key={index} countryData={elem} />
                        })}
                    </div>
                }
            </div>
        )
    }
}

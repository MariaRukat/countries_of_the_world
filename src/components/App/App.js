import React from 'react';

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom'

import Header from './../Header/Header';
import OneCountryApp from './../OneCountryApp/OneCountryApp';
import ManyCountriesApp from './../ManyCountriesApp/ManyCountriesApp';
import CountryGameApp from './../CountryGameApp/CountryGameApp';
import NotFound from './../NotFound/NotFound';

import './App.scss';

export default class App extends React.Component {
    render(){
        return (
            <HashRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/learn" component={OneCountryApp}/>
                        <Route path="/discover" component={ManyCountriesApp}/>
                        <Route path="/play" component={CountryGameApp}/>
                        <Route path="*" component={NotFound}/>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}


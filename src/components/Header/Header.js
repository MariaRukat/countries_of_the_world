import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.scss';

export default class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <nav>
                    <ul className="header_navigationList">
                        <li>
                            <NavLink to="/learn" className="header_link" activeClassName="header_link--active">Learn</NavLink>
                        </li>
                        <li>
                            <NavLink to="/discover" className="header_link" activeClassName="header_link--active">Discover</NavLink>
                        </li>      
                        <li>
                            <NavLink to="/play" className="header_link" activeClassName="header_link--active">Play</NavLink>
                        </li>  
                    </ul>
                </nav>
                <div className="header_titleBox">
                    <i className="fas fa-globe-americas"></i>
                    <h1 className="header_title">Countries of the world</h1>
                    <i className="fas fa-globe-africa"></i>
                </div>
            </header>
        )
    }
}

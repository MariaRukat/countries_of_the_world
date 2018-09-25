import React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.scss';

export default class Header extends React.Component{
    render(){
        return (
            <header className="header">
                <nav>
                    <ul className="header__navigation-list">
                        <li>
                            <NavLink 
                                to="/learn" 
                                className="header__link" 
                                activeClassName="header__link--active">
                                Learn
                        </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/discover" 
                                className="header__link" 
                                activeClassName="header__link--active">
                                Discover
                            </NavLink>
                        </li>      
                        <li>
                            <NavLink 
                                to="/play" 
                                className="header__link" 
                                activeClassName="header__link--active">
                                Play
                            </NavLink>
                        </li>  
                    </ul>
                </nav>
                <div className="header__title-box">
                    <i className="fas fa-globe-americas"></i>
                    <h1 className="header__title">Countries of the world</h1>
                    <i className="fas fa-globe-africa"></i>
                </div>
            </header>
        )
    }
}

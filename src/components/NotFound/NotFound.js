import React from 'react';

import './NotFound.scss';

export default class NotFound extends React.Component{
    render(){
        return (
            <div className="not-found">
                <p className="not-found__info">
                There is no such page.
                <br/> 
                Please choose something from the navigation - on top of the page.
                </p>
            </div>
        )
    }
}

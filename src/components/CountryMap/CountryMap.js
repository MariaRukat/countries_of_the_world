import React from 'react';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';
import generateMap from './map';

import './CountryMap.scss';

class NewToolbar extends React.Component{
    render(){
        return <span></span>
    }
}

export default class CountryMap extends React.Component {
    render(){
        let colorCountry = '';
        if(Array.isArray(this.props.country)){
            this.props.country.forEach( elem => {
                colorCountry += `#${elem.alpha2Code} {fill: #557a95}`
            });
        }else{
            colorCountry = `#${this.props.country.alpha2Code} {fill: #557a95}`;
        }

        return (
            <div className="country-map">
                <div className="country-map__box">
                    <div className="country-map__buttons">
                        <button 
                            className="country-map__button" 
                            onClick={event => this.Viewer.zoomOnViewerCenter(1.1)}>
                            <i className="fas fa-plus"></i>
                        </button>
                        <button 
                            className="country-map__button" 
                            onClick={event => this.Viewer.zoomOnViewerCenter(0.9)}>
                            <i className="fas fa-minus"></i>
                        </button>
                        <button 
                            className="country-map__button" 
                            onClick={event => this.Viewer.fitToViewer()}>
                            <i className="fas fa-home"></i>
                        </button>
                    </div>
                    <ReactSVGPanZoom
                        width={1010} height={660}
                        tool={'auto'}
                        ref = {ref => this.Viewer = ref}
                        customToolbar={NewToolbar}>
                        {generateMap(colorCountry)}
                    </ReactSVGPanZoom>
                </div>
            </div>
        )
    }
}


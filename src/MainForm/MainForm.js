import React, { Component } from 'react';
import Features from '../Features/Features';
import FEATURES from '../FEATURES';
import './MainForm.css';

export default class MainForm extends Component {
    render () {
        const features = Object.keys(FEATURES).map((feature, idx) => {
            const featureHash = feature + '-' + idx
            return (
                <Features 
                    key={featureHash}
                    featureHash={featureHash} 
                    feature={feature} 
                    featuresList={FEATURES} 
                    currencyFormat={this.props.currencyFormat}
                    selectedOptions={this.props.selectedOptions}
                    updateOptions={this.props.updateOptions}
                />
            )})
            console.log(FEATURES)
    
            
            return (
                <form className="main__form">
                    <h2>Customize your laptop</h2>
                    {features} 
                </form>
            )
    }
}
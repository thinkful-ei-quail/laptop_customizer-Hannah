import React, { Component } from 'react';
import Options from '../Options/Options';
import slugify from 'slugify';
import './Features.css';

export default class Features extends Component {
    render () {
        const options = this.props.featuresList[this.props.feature].map(item => {
            const itemHash = slugify(JSON.stringify(item))
            return (
                <Options 
                    key={itemHash}
                    itemHash={itemHash} 
                    feature={this.props.feature} 
                    item={item} 
                    currencyFormat={this.props.currencyFormat}
                    selectedOptions={this.props.selectedOptions} 
                    updateOptions={this.props.updateOptions}
                />)
        })

        return (
            <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                {options}
            </fieldset>
        )
    }
}
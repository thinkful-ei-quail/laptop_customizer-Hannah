import React from 'react';

export default function SummaryItem(props) {
    return (
        <div className="summary__option" key={props.featureHash}>
            <div className="summary__option__label">{props.feature} </div>
            <div className="summary__option__value">{props.selected.name}</div>
            <div className="summary__option__cost">
              {props.currencyFormat.format(props.selected.cost)}
            </div>
          </div>
    )
}
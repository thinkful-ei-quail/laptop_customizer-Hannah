import React from 'react';
import './SummaryTotal.css';

export default function SummaryTotal(props) {
    return (
        <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {props.currencyFormat.format(props.totalCost)}
              </div>
            </div>
    )
}
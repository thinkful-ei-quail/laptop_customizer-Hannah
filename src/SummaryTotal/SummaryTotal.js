import React from 'react';
import './SummaryTotal.css';

export default function SummaryTotal(props) {
  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost, 0
  );
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">
        {props.currencyFormat.format(total)}
      </div>
    </div>
)
}
import React from 'react';
import SummaryTotal from '../SummaryTotal/SummaryTotal';
import SummaryItem from '../SummaryItem/SummaryItem';

export default function MainSummary(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];
        return (
          <SummaryItem 
            featureHash={featureHash}
            selected={selectedOption}
            feature={feature}
            currencyFormat={props.currencyFormat}/>
        );
      });

    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
      );

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
           {summary}
            <SummaryTotal
              totalCost={total}
              currencyFormat={props.currencyFormat} 
            />
        </section>
    )
}
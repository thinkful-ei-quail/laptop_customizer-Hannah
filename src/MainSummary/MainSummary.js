import React from 'react';
import SummaryTotal from '../SummaryTotal/SummaryTotal';
import SummaryItem from '../SummaryItem/SummaryItem';
import './MainSummary.css';

export default function MainSummary(props) {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.selected[feature];
        return (
          <SummaryItem 
            key={idx}
            featureHash={featureHash}
            selected={selectedOption}
            feature={feature}
            currencyFormat={props.currencyFormat}/>
        );
      });

    return (
        <section className="main__summary">
            <h2>Your cart</h2>
           {summary}
            <SummaryTotal
              selected={props.selected}
              currencyFormat={props.currencyFormat} 
            />
        </section>
    )
}
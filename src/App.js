import React, { Component } from 'react';
import MainSummary from './MainSummary/MainSummary';
import MainForm from './MainForm/MainForm';
import Header from './Header/Header';
import './App.css';

//this object will allow us to
// easily conveert number insto US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }
  

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <MainForm 
            featuresList={this.props.features}
            selectedOptions={this.state.selected}
            updateOptions={this.updateFeature}
            currencyFormat={USCurrencyFormat}/>
          <MainSummary 
            selected={this.state.selected}
            currencyFormat={USCurrencyFormat}/>
        </main>
      </div>
    );
  }
}

export default App;

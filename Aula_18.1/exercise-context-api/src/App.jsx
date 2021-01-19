import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import CarsContext from './context/CarsContext';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      signalColor: 'red',
    };

    this.changeSignal = this.changeSignal.bind(this);
  }

  changeSignal(color) {
    this.setState({ signalColor: color })
  }

  render(){
    const { signalColor } = this.state;
    const contexValue = {
      signalColor,
      changeSignal: this.changeSignal,
    }

    return (
      <CarsContext.Provider value={ contexValue } >
        <TrafficSignal />
      </CarsContext.Provider >
    );
  }
}

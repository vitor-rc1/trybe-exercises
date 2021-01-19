import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import TrafficContext from './context/TrafficContext';

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
      <TrafficContext.Provider value={ contexValue } >
        <TrafficSignal />
      </TrafficContext.Provider >
    );
  }
}

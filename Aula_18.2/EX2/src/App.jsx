import React from 'react';
import Cars from './Cars';
import './App.css';

import CarsContext from './context/CarsContext';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
        redCar: false, 
        blueCar: false, 
        yellowCar: false,
    };
    this.moveCar = this.moveCar.bind(this)
  }

  moveCar(color) {
    const stateActual = this.state[color]
    this.setState(() => ({ [color]: !stateActual }));
  }

  render() {
    const contextValue = {
      ...this.state,
      moveCar: this.moveCar,
    }
    return (
      <CarsContext.Provider value={ contextValue }>
        <Cars/>
      </CarsContext.Provider>
    );
  }
}

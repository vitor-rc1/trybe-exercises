import React, { useState } from 'react';
import CarsContext from './CarsContext';

export default function Provider({ children }) {
  const [redCar, setRedCarPosition] = useState(false);
  const [blueCar, setBlueCarPosition] = useState(false);
  const [yellowCar, setYellowCarPosition] = useState(false);

  const moveRedCar = () => {
    setRedCarPosition(!redCar);
  }

  const moveBlueCar = () => {
    setBlueCarPosition(!blueCar);
  }

  const moveYellowCar = () => {
    setYellowCarPosition(!yellowCar);
  }

  const contextValue = {
    redCar,
    blueCar,
    yellowCar,
    moveRedCar,
    moveBlueCar,
    moveYellowCar,
  }
  return(
    <CarsContext.Provider value={contextValue}>
      { children }
    </CarsContext.Provider>
  );
}
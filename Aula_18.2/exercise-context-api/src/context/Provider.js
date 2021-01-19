import React, { useState } from 'react';
import TrafficContext from './TrafficContext';

function Provider({ children }) {
  const [signalColor, setSignalColor] = useState('red');

  const changeSignal = (color) => {
    setSignalColor(color)
  }

  const contexValue = {
    signalColor,
    changeSignal: changeSignal,
  }

  return (
    <TrafficContext.Provider value={contexValue} >
      { children }
    </TrafficContext.Provider >
  );
}

export default Provider;
import React, { useContext } from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import TrafficContext from './context/TrafficContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

function TrafficSignal() {

  const { signalColor, changeSignal } = useContext(TrafficContext)

  return (
        <div>
          <div className="button-container">
            <button
              type="button"
              onClick={() => changeSignal('red')}
            >
              Red
          </button>
            <button
              type="button"
              onClick={() => changeSignal('yellow')}
            >
              Yellow
          </button>
            <button
              type="button"
              onClick={() => changeSignal('green')}
            >
              Green
          </button>
          </div>
          <img className="signal" src={renderSignal(signalColor)} alt="" />
        </div>
  );

}

export default TrafficSignal

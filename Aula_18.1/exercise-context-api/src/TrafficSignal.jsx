import React from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import CarsContext from './context/CarsContext';

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

class TrafficSignal extends React.Component {
  render() {
    return (
      <CarsContext.Consumer>
        {({ changeSignal, signalColor }) => (
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
        )}
      </CarsContext.Consumer>
    );
  }
}

export default TrafficSignal

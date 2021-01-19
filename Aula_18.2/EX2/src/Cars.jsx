import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import CarsContext from './context/CarsContext';

class Cars extends React.Component {
  render() {
    return (
      <CarsContext.Consumer>
        {({moveCar, redCar, blueCar, yellowCar }) => (
          <div>
            <div>
              <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
              <button onClick={() => moveCar('redCar')} type="button">move</button>
            </div>
            <div>
              <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
              <button onClick={() => moveCar('blueCar')} type="button">move</button>
            </div>
            <div>
              <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
              <button onClick={() => moveCar('yellowCar')} type="button">move</button>
            </div>
          </div>
        )}
      </CarsContext.Consumer>
    );
  }
}

export default Cars;

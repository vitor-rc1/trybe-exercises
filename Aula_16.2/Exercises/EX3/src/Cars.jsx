import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { connect } from 'react-redux';
import { moveCar } from './redux/actionCreators'

class Cars extends React.Component {
  render() {
    const { cars: {red: redCar, blue: blueCar, yellow: yellowCar}, moveCar } = this.props;
    return (
      <div>
        <div>
          <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
          <button onClick={() => moveCar('red', !redCar)} type="button">move</button>
        </div>
        <div>
          <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
          <button onClick={() => moveCar('blue', !blueCar)} type="button">move</button>
        </div>
        <div>
          <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
          <button onClick={() => moveCar('yellow', !yellowCar)} type="button">move</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cars: state.carsReducer.cars
})

const mapDispatchToProps = (dispatch) => ({
  moveCar: (car, side) => dispatch(moveCar(car, side))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cars);

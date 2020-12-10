import React from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { changeSignal } from './redux/actionCreators';
import { connect } from 'react-redux'

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
    const { signalColor, changeSignal } = this.props;
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
}

const mapStateToProps = (store) => ({
  signalColor: store.trafficReducer.signal.color
});

const mapDispatchToProps = (dispatch) => ({
  changeSignal: payload => dispatch(changeSignal(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal)

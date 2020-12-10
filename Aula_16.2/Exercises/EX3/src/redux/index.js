import { createStore, combineReducers } from 'redux';
import carsReducer from './carsReducer';
import trafficReducer from './trafficReducer';

const reducers = combineReducers({
  carsReducer,
  trafficReducer,
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

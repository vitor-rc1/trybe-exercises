import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Provider from './context/Provider';

export default function App() {
  return (
    <Provider >
      <TrafficSignal />
    </Provider >
  );
}

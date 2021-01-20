import React from 'react';
import Cars from './Cars';
import './App.css';
import Provider from './context/Provider'

export default function App() {
  return (
    <Provider >
      <Cars />
    </Provider>
  );
}

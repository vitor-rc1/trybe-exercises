import React from 'react';
import Pokemons from './components/Pokemons'
import pokes from './data'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className='title'>Pokedex</h1>
      <Pokemons pokemons={pokes}/>
    </div>
  );
}

export default App;

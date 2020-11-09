import React from 'react';
import './Pokemons.css';
import Pokemon from './Pokemon'

class Pokemons extends React.Component {
  render() {
    const pokemons = this.props.pokemons;
    return (
      <div className='pokemons'>
        {pokemons.map(poke => <Pokemon className='poke' key={poke.id} pokemon={poke} />)}
      </div>
    )
  }
}
export default Pokemons;
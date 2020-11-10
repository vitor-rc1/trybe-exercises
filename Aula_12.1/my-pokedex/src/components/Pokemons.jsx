import React from 'react';
import './Pokemons.css';
import Pokemon from './Pokemon';
import ButtonSelecType from './ButtonSelectType';

class Pokemons extends React.Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
      pokemons: props.pokemons,
      disabled: false,
    };
    this.nextPokemon = this.nextPokemon.bind(this);
    this.pokemonsFilter = this.pokemonsFilter.bind(this);
  }


  nextPokemon() {
    const count = this.state.count;
    const pokes = this.state.pokemons;
    if (count >= pokes.length - 1) {
      this.setState({
        count: 0
      });
    } else {
      this.setState((previuos, _props) => ({
        count: previuos.count + 1
      }))
    }

  }


  pokemonsFilter(event) {
    const target = event.target.innerText;

    if (target === 'All') {
      this.setState({
        pokemons: this.props.pokemons.filter(pokemon => {
          return pokemon.type.includes('')
        }),
        count: 0,
      },
      () => {
        this.setState({
          disabled: this.state.pokemons.length === 1
        })
      })
    } else {
      this.setState({
        pokemons: this.props.pokemons.filter(pokemon => {
          return pokemon.type.includes(target)
        }),
        count: 0,
      },
      () => {
        this.setState({
          disabled: this.state.pokemons.length === 1
        })
      }
      )

    }
  }

  render() {
    const pokemonsTypes = ['All', 'Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon']
    return (
      <div className='pokemons'>
        <Pokemon className='poke' key={this.state.pokemons[this.state.count].id} pokemon={this.state.pokemons[this.state.count]} />
        <div>
          {pokemonsTypes.map(type => {
            return <ButtonSelecType key={type} type={type} function={this.pokemonsFilter} />
          })}
        </div>
        <button disabled={this.state.disabled} className='next' onClick={this.nextPokemon}>Proximo</button>
      </div>
    )
  }
}
export default Pokemons;
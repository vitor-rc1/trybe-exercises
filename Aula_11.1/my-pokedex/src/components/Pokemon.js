import React from 'react';
import './Pokemon.css'

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight: {value, measurementUnit}, image, moreInfo} = this.props.pokemon
    return (
      <div className='poke-card'>
        <div className='infos'>
          <p>Name: {name}</p>
          <p>Type: {type}</p>
          <p>Average weight: {value} {measurementUnit}</p>
        </div>
        <img className='image' src={image} alt={name}/>
      </div>
    )
  }
}

export default Pokemon;
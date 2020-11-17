import React, { Component } from 'react';
import states from './data';

class SelectComponent extends Component {
  render() {
    const { name, describe, value, onChange } = this.props;
    return (
      <div>
        <label htmlFor={name}>{describe}</label>
        <select name={name} id={name} value={value} onChange={onChange}>
          {Object.keys(states).map(state => {
            return <option value={state} key={state} >{states[state]}</option>
          })}
        </select>
      </div>
    )
  }
}

export default SelectComponent;
import React, { Component } from 'react';

class InputComponent extends Component {
  render() {
    const { name, type, describe, value, onChange, maxLength } = this.props;
    return (
      <div>
        <label htmlFor={name} >{describe}</label>
        <input 
        type={type} 
        id={name} 
        name={name} 
        value={value} 
        onChange={onChange}
        maxLength={maxLength}
        />
      </div>
    )
  }
}

export default InputComponent;
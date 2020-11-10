import React from 'react';

class ButtonSelectType extends React.Component {
  render() {
    return (
      <button onClick={this.props.function}>{this.props.type}</button>
    )
  }
}

export default ButtonSelectType;
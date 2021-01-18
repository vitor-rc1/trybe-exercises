import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header-component">
        <h1>Selected: </h1>
        <select>
          <option value="reactjs">reactjs</option>
          <option value="frontend">frontend</option>
        </select>
        <p>Last update</p>
        <button>Refresh</button>
      </div>
    );
  }
}

export default Header;
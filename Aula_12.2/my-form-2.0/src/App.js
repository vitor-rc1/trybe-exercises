import React from 'react';
import './App.css';

import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Cadastro</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;

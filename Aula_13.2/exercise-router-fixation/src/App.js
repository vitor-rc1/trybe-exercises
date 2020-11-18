import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAcess from './StrictAcess';

class App extends Component {
  render() {
    const user = {
      username: 'joao',
      password: 1234
    }
    return (
      <div>

        <BrowserRouter>
          <Link to="/strict">Strict Acess</Link>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/users/:id" render={(props) => <Users {...props} greetingMessage="Good Morning" />} />
            <Route path="/strict" render={(props) => {
            return <StrictAcess {...props} user={user} /> 
          }}/>
          <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
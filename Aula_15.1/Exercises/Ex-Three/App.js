import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      removeDisabled: true,
      itemsSelecteds: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectItem(target, index){
    let itemsSelecteds = this.state.itemsSelecteds;
    if (target.className) {
      target.className = '';
      itemsSelecteds = itemsSelecteds.filter(item => item !== index);
    } else {
      target.className = 'selected';
      itemsSelecteds.push(index);
    }
    const shouldRemoveDisabled = itemsSelecteds.length === 0;
    this.setState({
      itemsSelecteds: itemsSelecteds,
      removeDisabled: shouldRemoveDisabled,
    })
  }

  removeItem() {
    let itemsSelecteds = this.state.itemsSelecteds;
    let listTodo = this.state.listTodo;

    const cleanList = listTodo.filter((item, index) => !itemsSelecteds.includes(index));
    
    this.setState({
      listTodo: cleanList,
      itemsSelecteds: [],
      removeDisabled: true,
    })
  }

  render() {
    const { listTodo, removeDisabled } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        <input 
          type="button" 
          data-testid="id-remove" 
          value="Remover"
          disabled={ removeDisabled }
          onClick={ this.removeItem }
          />
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1} >
                  <Item 
                    selectItem={this.selectItem} 
                    content={todo}
                    selectItem={({target}) => this.selectItem(target, index) } 
                  />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;

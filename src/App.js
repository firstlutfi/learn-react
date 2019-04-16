import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Navbar from './components/layout/Navbar';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Todos number 1',
        completed: false
      },
      {
        id: 2,
        title: 'Todos number 2',
        completed: false
      },
      {
        id: 3,
        title: 'Todos number 3',
        completed: true
      }
    ]
  }

  markComplete = (id) => { // arrow function buat bind this, sama kaya manggil this.markComplete.bind(this )
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    }) });
  }

  deleteItem = (id) => {
    this.setState({ todos:  [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Todos todos={this.state.todos} markComplete={ this.markComplete } deleteItem={ this.deleteItem }/>
      </div>
    );
  }
}

export default App;

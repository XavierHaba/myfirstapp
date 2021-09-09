import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import TodoForm from './components/TodoForm';
import TodosList from './components/TodosList';

import {todos} from './todos.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Aplicació de tasques',
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  handleRemove(index){
    console.log("id: ", index);
    //console.log(this.state.todos);

    if(window.confirm('Estàs segur que vols borrar aquesta tasca?')) {
      this.setState({
        todos: this.state.todos.filter((e,i) => {
          return i !== index
        })
      })
    }
  }

  render(){
    return (
      <div className="App">
        <Nav titulo={this.state.title} numtask={this.state.todos.length} />
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col-6 col-md-9">
                <TodosList mistodos={this.state.todos} onRemoveTodo={this.handleRemove}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

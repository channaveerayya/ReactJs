import React, { Component } from 'react'
import Todos from './Todos'
import Addtodo from './Addtodo'
export default class App extends Component {
  state={
    todos:[
      {id:1,content:'bye some milk'},
      {id:2,content:'play mario kart'}
    ]
  }
  deleteTodo=(id)=>{
    const todos=this.state.todos.filter(todo=>{
      return todo.id!==id
    });
    
    this.setState({todos})
  }
  Addtodo=(todo)=>{
    console.log(todo);
    todo.id=Math.random();
    let copy=[...this.state.todos,todo];
    this.setState({todos:copy})
  }
  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <Addtodo addtodo={this.Addtodo} />
      </div>
    )
  }
}

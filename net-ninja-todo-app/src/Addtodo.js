import React, { Component } from 'react'

export default class Addtodo extends Component {
    state={
        content:''
    }

handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addtodo(this.state);
    this.setState({content:''});
}
handleChange=(e)=>{
this.setState({content:e.target.value});
}
  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Add new Todo's:</label>
            <input type="text" onChange={this.handleChange} value={this.state.content}></input>
        </form>
      </div>
    )
  }
}

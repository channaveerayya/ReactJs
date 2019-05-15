import React, { Component } from 'react'

export default class App extends Component {
  state={
    name:'channu',
    age:26
  }
  handleClick(e){
    console.log(e.target)
    
  }
  handleMouseOver(e){
    console.log(e.target,e.pageX)
      }
    handleOnCopy(e){
      console.log("user copy this text");
      }
  render() {
    return (
      <div>
        <h1>
          Hello {this.state.name}
        </h1>
        <button onClick={this.handleClick}>click me</button>
        <button onMouseOver={this.handleMouseOver}>hoverme</button>
        
        <p onCopy={this.handleOnCopy}>copy this line and check it on console</p>
      </div>
    )
  }
}


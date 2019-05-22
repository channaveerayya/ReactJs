import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Counter extends Component {
    getDefaultProps() {
        console.log('getDefaultProps');
        return {
            title: 'Basic counter!!!'
        }
    }
    
    getInitialState() {
        console.log('getInitialState');
        return {
            count: 0
        }
    }
    handleIncrement=()=> {
        var newCount = this.state.count + 1;
        this.setState({count: newCount});
    }
    
    handleDecrement=()=> {
        var newCount = this.state.count - 1;
        this.setState({count: newCount});
    }
    
   


  render() { console.log('render');
  return (
      <div>
          <h1>{this.props.title}</h1>
          <div>{this.state.count}</div>
          <input type='button' value='+' onClick={this.handleIncrement} />
          <input type='button' value='-' onClick={this.handleDecrement} />
      </div>
  )
  }
}
Counter.propTypes= {
    title:PropTypes.string
}
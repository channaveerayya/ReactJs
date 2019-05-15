import React, { Component } from 'react'

export default class Ninjas extends Component {
  render() {
      const {name ,age , mob}=this.props

    return (
      <div>
        <h2>name:{name}</h2>
        <h2>age:{age}</h2>
        <h2>mob:{mob}</h2>  
      </div>
    )
  }
}

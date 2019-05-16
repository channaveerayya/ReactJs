import React, { Component } from 'react'
import Ninjas from './Ninjas'
import AddNinjas  from './AddNinjas'
export default class App extends Component {
  state={
    ninjas:[{name:'channu',age:26,mob:'9980972009',id:1},
            {name:'vinayak',age:22,mob:'9980779665',id:2},
            {name:'basu',age:24,mob:'9980972009',id:3}
            ]
  }
  render() {
    return (
     
      <div className="container bg-dark my-4 text-capitalize text-light">
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinjas />
      </div>
     
    )
  }
}
import React, { Component } from 'react'
import Ninjas from './components/Ninjas'
import AddNinjas  from './components/AddNinjas'
export default class App extends Component {
  state={
    ninjas:[{name:'channu',age:26,mob:'9980972009',id:1},
            {name:'vinayak',age:22,mob:'9980779665',id:2},
            {name:'basu',age:24,mob:'9980972009',id:3}
            ]
  }
  componentDidMount(){
    console.log("componentdidmount");
  }
  componentDidUpdate(prevProps,prevStates){
    console.log("componentDidUpdate")
    console.log("prev props",prevProps,"prev states",prevStates);
  }
  addNinja=(ninja)=>{
    ninja.id=Math.random();
    let ninjas=[...this.state.ninjas,ninja]
    this.setState({ninjas:ninjas})
    console.log(this.state);
  }
  DeleteNinja=(id)=>{
    
    let ninjaCopy=this.state.ninjas
                  .filter(row=>{ 
                    return(row.id!==id)
                  });
    this.setState({ninjas:ninjaCopy});
  }
  render() {
    return (
     
      <div className="container bg-dark my-4 text-capitalize text-light">
        <Ninjas deleteninja={this.DeleteNinja} ninjas={this.state.ninjas} />
        <AddNinjas  addninja={this.addNinja}/>
      </div>
     
    )
  }
}
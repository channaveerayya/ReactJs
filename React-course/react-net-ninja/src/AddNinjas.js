import React, { Component } from 'react'

export default class AddNinjas extends Component {
    state={
        name:null,
        age:null,
        mob:null
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
       this.props.addninja(this.state)
    }
    handleChange=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }
  render() {
    return (
            <div>
            <form className="form-group" onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" onChange={this.handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="name">Age</label>
            <input type="text" className="form-control" id="age"   onChange={this.handleChange}/>
            </div> 
            <div className="form-group">
            <label htmlFor="name">Mobile</label>
            <input type="text" className="form-control" id="mob"  onChange={this.handleChange} />
            </div>
            <button className="btn btn-primary btn-group-lg btn-block my-1">Submit</button>

            </form>
        </div>
    )
  }
}

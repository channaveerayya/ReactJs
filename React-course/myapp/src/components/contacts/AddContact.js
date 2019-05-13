import React, { Component } from 'react'

 class AddContact extends Component {


    state={
        name:'',
        email:'',
        phone:''
    }
    onSubmit=(e)=>{
        e.preventDefault(); 
    }
    onAction=e=>this.setState(
        {[e.target.name]:e.target.value}
        )
  render() {
    const {name,email,phone}=this.state;
    return (
      <div className="card mb-3">
      <div className="card-header">
          AddContact
      </div>
      <div className="card-body">
          <form onSubmit={this.onSubmit}>
              <div className="form-group">
                  <label htmlFor="name">name</label>
                  <input 
                    type="text"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="enter name.." 
                    value={name}
                    onChange={this.onAction}
                    />
              </div> 
              <div className="form-group">
                  <label htmlFor="name">email</label>
                  <input 
                    type="text"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="enter email.."
                    value={email}
                    onChange={this.onAction}

                    />
              </div>
              <div className="form-group">
                  <label htmlFor="name">phone</label>
                  <input 
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="enter phone.."
                    value={phone}
                    onChange={this.onAction}
                    />
              </div>
              <input type="submit" value="Add Contact"
              className="btn btn-block btn-light"/>
          </form>
      </div>
        
      </div>
    )
  }
}
export default AddContact;
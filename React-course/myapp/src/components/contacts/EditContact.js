 import React, { Component } from 'react'
import {Consumer} from '../../context'
import uuid from 'uuid'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'
class EditContact extends Component {


    state={
        name:'',
        email:'',
        phone:'',
        errors:{}
    }
    async componentDidMount(){
        const { id }=this.props.match.params;
        const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const contact=res.data
        this.setState({
            name:contact.name,
            email:contact.email, 
            phone:contact.phone

            })
    }
    onSubmit=async (dispatch,e)=>{
        e.preventDefault(); 
        const {name,email,phone}=this.state;

        if(name===''){
            this.setState({errors:{name:'name is required'}});
            return;
        }
        if(email===''){
            this.setState({errors:{email:'email is required'}});
            return;

        }
        if(phone===''){
            this.setState({errors:{phone:'phone is required'}});
            return;
        }
        
    //clear state
    this.setState({
        name:'',
        email:'',
        phone:'',
        errors:{}
    });
    this.props.history.push('/');
};
    onAction=e=>this.setState( 
        {[e.target.name]:e.target.value}
        )
  render() {

    const {name,email,phone,errors}=this.state;

    return(
        <Consumer>
{value=>{
    const{dispatch}=value;
    return (
      <div className="card mb-3">
      <div className="card-header">
         Edit Contact
      </div>
      <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this,dispatch)}>
              
            <TextInputGroup
            label="Name"
            name="name"
            placeholder="enter name"
            value={name}
            onChange={this.onAction}
            error={errors.name}
            />
             <TextInputGroup
            label="Email"
            name="email"
            type="email"
            placeholder="enter email"
            value={email}
            onChange={this.onAction}
            error={errors.email}

            />   
             <TextInputGroup
            label="phone"
            name="phone"
            type="phone"
            placeholder="enter Phone"
            value={phone}
            onChange={this.onAction}
            error={errors.phone}

            />
              <input type="submit" value="Update Contact"
              className="btn btn-block btn-light"/>
          </form>
      </div>
        
      </div>)
}}

        </Consumer>
    )
    
  }
}
export default EditContact;
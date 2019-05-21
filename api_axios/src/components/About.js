import React, { Component } from 'react'
import axios from 'axios';

export default class About extends Component {
   state={
     userDetails:null,
     photo:[ ]
   }
   componentDidMount(){
     const id=this.props.match.params.user_id;
    const link='https://jsonplaceholder.typicode.com/users/'+id;
     axios.get(link)
     .then(res=>{
       this.setState({
         userDetails:res.data
       });
     })
     .catch(e=>{
      console.log(e)
  })

  axios.get('https://pixabay.com/api/?key=12529085-4f4ab2b659d002ba71b92b4a9&q=people')
  .then(res=>{
      const temp=res.data.hits.map(img=>{
          return (img.webformatURL)
      })
      this.setState({
          photo:temp
      });
    
  })
  .catch(e=>{
      console.log(e)
  })
 
   }
   
  render() {
    console.log(this.state.userDetails)
    var user=this.state.userDetails;
    const photo =this.state.photo
    
    const show = user ? (
    <div className="row" key={user.id}>
        <div className="col-sm-6 bg-dark text-white">
        <img src={photo[user.id]} style={{height:"440px"}} className=" img-fluid"></img>
        </div>
        <div className="col-sm-6 bg-light">
          <h1 className="display-4">{user.name}</h1>    
          <dl>
           <dt>User name</dt>
           <dd>-  {user.username}</dd>
           <dt>Email</dt>
           <dd>- {user.email}</dd>
           <dt>Phone</dt>
           <dd>- {user.phone}</dd>
           <dt>Website</dt>
           <a href={user.website}>
           <dd>- {user.website}</dd>
           </a>
           <dt>Address</dt>
           <dd>-street: {user.address.street}</dd>
           <dd>-suit: {user.address.suite}</dd>
           <dd>-city: {user.address.city}-{user.address.zipcode}</dd>
          </dl> 
        </div>
    </div>

    ):(
      <h1 className="display-1">loading..</h1>

    )


    return (
   
        <div className="container">    
        {show}
      </div>
    )
  }
}



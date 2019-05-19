import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default class Home extends Component {
  state={
    posts:[ ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res=>{
      this.setState({
        posts:res.data.slice(0,10)
      })
    })
  }
  render() {
    const {posts}=this.state;
     const postlink=posts.length ? (
       posts.map(post=>{
         return(
           <div className="post card" key={post.id}>
             <div className="card-content">
               <Link to={'/'+post.id}>
               <span className="card-title">{post.title}</span>
               </Link>
               <p>{post.body}</p>
             </div>
           </div>
         )
       })
     ) : (
       <div className="center">no poste yet</div>
     )
    return (
      <div className="container">
        <div className="center">
        {postlink}
        </div>
      </div>
    )
  }
}

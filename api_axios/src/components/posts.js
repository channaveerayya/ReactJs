import React, { Component } from 'react'
import imgs from './404.jpg'
import axios from 'axios';

export default class posts extends Component {
    state={
        posts:[],
        photo:[ ],
        comments:[ ]
      }
      componentDidMount(){
        const id=this.props.match.params.user_id;
       const link='https://jsonplaceholder.typicode.com/posts?userId='+id;
        axios.get(link)
        .then(res=>{
          this.setState({
            posts:res.data
          });
        })
        .catch(e=>{
         console.log(e)
     })

     const comment='https://jsonplaceholder.typicode.com/comments';
        axios.get(comment)
        .then(res=>{
          this.setState({
            comments:res.data
          });
        })
        .catch(e=>{
         console.log(e)
     })
    


     
  axios.get('https://pixabay.com/api/?key=12529085-4f4ab2b659d002ba71b92b4a9&q=sports')
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
      console.log(this.state.comments);

      const photo =this.state.photo;
      const posts=this.state.posts;
      const comments =this.state.comments;
    const users= posts.length ?(
        posts.map(post=>{
            return(
                <div className="card bg-secondary text-white mb-4" key={post.id}>
                    <h3 class="card-title text-center">
                        {post.title}
                    </h3>
                    <img src={photo[post.id]} class="card-img-top img-fluid" />
                    <div class="card-block bg-dark text-white">             
                      <strong className="display-5"> {post.body}</strong> 
                      
                     
                    </div>
                    <div className="ex3">
                     <p>{ comments.map(cmt=>{
                            return (<h>
                                {cmt.postId==post.id ? (cmt.name):(null)}
                            </h>)
                            }           
                     )}
                     </p>  
                     </div>
                </div>
            )
        })
    ):(
        <center>
        <div className="">
        {/* <img src={loading} alt="loading"  style={{width:'1100px'}}/>    */}
        loading
         </div>
         </center>
    )


    return (
        <div className="container">
              {users}
        </div>
           
    )
  }
}

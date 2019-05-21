import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import loading from './loading.gif'


export default class jsonplaceholder extends Component {
    
    state={
        users:[],
        photo:[]
    }
    componentDidMount(){
        //let id=this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            this.setState({
                users:res.data
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

  
     const photo =this.state.photo
    const users= this.state.users.length ? (
        this.state.users.map(user=>{
        return(
         
            <div className="col-md-5 col-lg-3 mb-3" key={user.id}>
            <div className="card bg-secondary text-white" style={{height:"300px", width:"270px"}}>
                <div className="card-block">     
                <Link to={'/about/'+user.id}>           
                    <h4 className="card-title text-center text-white">{user.name}</h4>
                    <img src={photo[user.id]} style={{height:"200px"}} className="card-img-top img-fluid"></img>
                    

                        <div className="card-footer text-center  text-white">
                            More About
                        </div>
                    </Link>             
                </div>
            </div>
        </div>  

        )
    })):(
        <center>
        <div className="">
        <img src={loading} alt="loading"  style={{width:'1100px'}}/>   
         </div>
         </center>
    )



    return (
        <div className="container">
        <div className="row">
            {users}
        </div>
        </div>
    )
  }
}

import React, { Component } from 'react'
import axios from 'axios';
import imgs from './404.jpg'
export default class Home extends Component {

    state={
        states:null
    }
    componentDidMount(){
        //let id=this.props.match.params.post_id;
        axios.get('http://services.groupkt.com/state/get/IND/all')
        .then(res=>{
            this.setState({
                states:res.data.RestResponse.result
            });
            console.log(this.state.states)
        })
        .catch(e=>{
            console.log(e)
        })
       
    }
  
  render() {

    
    
    const cards= this.state.states ? (this.state.states.map(details=>{
        return(
         
            <div className="col-md-6 col-lg-2 mb-3">
            <div className="card bg-secondary text-white" style={{height:"300px", width:"170px"}}>
            <img src={imgs} className="card-img-top img-fluid"/>
                <div className="card-block">            
                    <h4 className="card-title text-center">{details.name}</h4>
                    <div class="card-footer">capital:{details.capital}</div>                    
                </div>
            </div>
        </div>  

        )
    })):(
        <div><h1 className="display-3">Loading.... </h1></div>
    )
    
    return (
        <div className="container">
        <div className="row">
            {cards}
        </div>
        </div>
      
      
    )
  }
}

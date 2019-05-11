import React, {Component} from 'react'
import PropTypes from 'prop-types'


export default class Contact extends Component {

  //  static propTypes={
  //     name:PropTypes.string.isRequired, 
  //     email:PropTypes.string.isRequired,
  //     phone:PropTypes.string.isRequired

  // };

  state={
    showContactInfo:false

  };
 onDeleteClick=()=>{
  this.props.deleteClickHandler();
 }

  render() {
    const {name,email,phone} = this.props.contact;
    const {showContactInfo}=this.state;
    return (<div className = "card card-body md-3" >
            <h4>
            { name}{' '}
            <i
              onClick={
                       ()=> this.setState({showContactInfo:
                        !this.state.showContactInfo})
                      }
               className = "fas fa-sort-down" 
               style={{cursor:'pointer'}}
            /> 
            <i className="fas fa-times"
              style={{cursor:'pointer',color:'red',
                    float:'right'}}
              onClick={this.onDeleteClick}        
            />
            </h4>
            {showContactInfo ? (<ul className = "list-group" >
                <li className = "list-group-item" >
                mail: {email} </li>
                <li className = "list-group-item" >
                phone: {phone} </li> 
                </ul>):null}
               
              </div>
            );
  }
}

//or


Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler:PropTypes.func.isRequired

};
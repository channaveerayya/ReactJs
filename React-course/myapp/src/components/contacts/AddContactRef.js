import React, { Component } from 'react'
//uncontroll
 class AddContact extends Component {
  
    constructor(props){
        super(props);
        this.nameInput=React.createRef();
        this.emailInput=React.createRef();
        this.phoneInput=React.createRef();
    }
    
    onSubmit=e=>{
        e.preventDefault(); 
        const contact={
            name:this.nameInput.current.value,
            email:this.emailInput.current.value,
            phone:this.phoneInput.current.value
        }
        
    };
    static defaultProps={
        name:"vinnu",
        email:"vinnu@outlook.com",
        phone:"777-333-2222"

    };
   
  render() {
    const {name,email,phone}=this.props;
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
                    defaultValue={name}
                    ref={this.nameInput}
                    
                    />
              </div> 
              <div className="form-group">
                  <label htmlFor="name">email</label>
                  <input 
                    type="text"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="enter email.."
                    defaultValue={email}
                    ref={this.emailInput}

                    />
              </div>
              <div className="form-group">
                  <label htmlFor="name">phone</label>
                  <input 
                    type="text"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="enter phone.."
                    defaultValue={phone}
                    ref={this.phoneInput}
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
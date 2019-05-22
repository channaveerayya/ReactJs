import React from 'react'
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);

     /* You have to be careful about the meaning of this in JSX callbacks.
       In JavaScript, class methods are not bound by default. 
       If you forget to bind this.handleClick and pass it to onClick,
       this will be undefined when the function is actually called.

       for more refer Bind.Js file
      */
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  export default Toggle;
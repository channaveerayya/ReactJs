import React from 'react'

class Bind extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.thirdClick = this.thirdClick.bind(this);
      }
    
      thirdClick = () => {
        console.log('this is thirdClick:', this);
      }



    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    firstClick = () => {
      console.log('this is: firstClick', this);
    }
  
    /*You have to be careful about the meaning of this in JSX callbacks.
     In JavaScript, class methods are not bound by default. If you forget to bind this.
     handleClick and pass it to onClick, this will be undefined when the function is actually called.

    This is not React-specific behavior; 
    it is a part of how functions work in JavaScript. Generally,
     if you refer to a method without () after it,
      such as onClick={this.handleClick}, you should bind that method.

    If calling bind annoys you, there are two ways you can get around this.
     If you are using the experimental public class fields syntax,
      you can use class fields to correctly bind callbacks:
      */


     secondClick() {
        console.log('this is: secondClick', this);
      }
    

    render() {
        // This syntax ensures `this` is bound within handleClick
      return (
        <div>
            <button onClick={this.firstClick}>
          firstClick
        </button>

        <button onClick={(e)=>this.secondClick(e)}>
        secondClick
        </button>
        {/* here third bind is the best solution for callback and lower Component re rendering  
        method firstbind and secondbind have call back problem and access within class ,
        (for more refer reactJS document )
        */}
        <button onClick={this.thirdClick}>
        thirdClick
        </button>
        </div>


      );
    }
  }
  export default Bind;  
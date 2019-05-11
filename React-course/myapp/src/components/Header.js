import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {

  return ( <nav className="navbar navbar-expand navbar-dark bg-danger mb-3 py-0">
            <div className="container">
            <a href="/" className="navbar-brand">
                {props.branding}
            </a>
        <div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                
            </ul>
        </div>
            </div>
            </nav>
    // <div>
    //   <h1 >{props.branding}  </h1>
    // </div>
  )
}
Header.defaultProps={
    branding:"My App"
};

Header.prototype={
    branding:PropTypes.string.isRequired
};
// const headingStyle={
//     color :'red',
//     fontSize :'60px'
    
// };

            //or


// const Header =()=>{
//     return(
//     <div>
//         <h1>Contact Manager</h1>
//     </div>
//     );
// }

// export default Header;
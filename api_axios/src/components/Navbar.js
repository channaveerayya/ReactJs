import React from 'react'
import { Link,NavLink,withRouter } from 'react-router-dom';


 const Navbar=()=> {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark  mb-3 py-0">
    <div className="container-fluid">
        <div className="navbar-header">
            <a  className="navbar-brand text-light"> 
            <h1 className="display-4"><strong>User info..</strong></h1>
            </a>
        </div>
            <ul className="nav navbar-nav nav-right ">
                <li className="nav-item">
                <Link to='/' className="nav-link" ><strong>Home</strong></Link>
                </li>
                <li className="nav-item">
                <Link to='/posts' className="nav-link" ><strong>Posts</strong></Link>
                </li>
                <li className="nav-item">
                <Link to='/about' className="nav-link" ><strong>About</strong></Link>
                </li>

            </ul>
            
        </div>
 
    </nav>
  )
}
export default withRouter(Navbar);
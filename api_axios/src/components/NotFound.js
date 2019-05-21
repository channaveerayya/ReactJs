import React from 'react'
import img404 from "./404.jpg";
export default function NotFound() {
  return (
    <div className="container-fluid center backimg">
        <h2 className="display-4 text-center text-danger">
        <strong>please... go to Home page.</strong>
        </h2>
        <img src={img404}  alt="404"  style={{width:"101%"}}/>

    </div>
  )
}

import React from 'react'
import PropTypes from 'prop-types'

const Demo = props=>
{
    return (
        <div>
         <h1>Name is {props.name}</h1> 
        </div>
      )
}
try{
Demo.propTypes=
{
    name:PropTypes.bool.isRequired
}
}
catch(e){
    console.log("errrrr",e.messege);
}
export default Demo;
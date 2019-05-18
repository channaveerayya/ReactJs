import React from 'react'

const  Rainbow=(WrappedComponent)=> {
  
    const colours=['red','green','blue','black','yellow','grey'];
    const randColour=colours[Math.floor(Math.random()*6)];
    const className=randColour+'-text';
    return(props)=>{
    return(
    <div className={className}>
        <WrappedComponent {...props} />
    </div>
  )
}
}
export default Rainbow
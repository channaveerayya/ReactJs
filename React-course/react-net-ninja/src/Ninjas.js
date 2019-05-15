import React from 'react'
const  Ninjas =({ninjas})=> {
        
       const ninjalist= ninjas.map(ninja=>{
            return(
                <div key={ninja.id}>
                     <h1>{ninja.name}</h1> <h1>{ninja.age}</h1>
                </div>
            )
        })
        return (ninjalist)
  
}
export default Ninjas;

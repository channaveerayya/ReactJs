import React from 'react'
const  Ninjas =({ninjas})=> {
        
    //    const ninjalist= ninjas.map(ninja=>{ 
    //        if (ninja.age >22){
    //         return(
    //             <div key={ninja.id}>
    //                  <h1>{ninja.name}</h1> <h1>{ninja.age}</h1>
    //             </div>
    //         )}
    //         else
    //         return null
    //     })
   
  
  return (<div>{
                ninjas.map(ninja =>{
                    return ninja.age>20?( <div key={ninja.id}>
                                         <h1>{ninja.name}</h1> <h1>{ninja.age}</h1>
                                        </div>):null
                                }
                    )}
            </div>
        )
}
export default Ninjas;

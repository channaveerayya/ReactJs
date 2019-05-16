import React from 'react'
const  Ninjas =({ninjas,deleteninja})=> {
        
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

  
  return (<div><ul className="list-group">{
                ninjas.map(ninja =>{
                    return ninja.age>20?( <div key={ninja.id} className="my-2">
                                         <li className="list-group-item active">
                                         <h1>{ninja.name} 
                                         <button className="btn btn-danger" onClick={()=>{deleteninja(ninja.id)}}
                                                   style={{float:'right'}}>Delete</button>
                                         </h1></li>
                                         <li className="list-group-item text-dark ">
                                         <h4>Age:{ninja.age}</h4></li>
                                         <li className="list-group-item text-dark ">
                                         <h4>Mob:{ninja.mob}</h4></li>
                                        </div>):null
                                }
                    )}
                    </ul> </div>
        )
}
export default Ninjas;

import React from 'react'

 const Todos=({todos,deleteTodo})=> {
     const todolist=todos.length ? (
         todos.map(todo=>{
             return(
                 <div className="collection" key={todo.id}>
                     <span onClick={()=>deleteTodo(todo.id)} style={{cursor:"Pointer"}}>{todo.content}</span>
                 </div>
             )
         })
     ) :(<p className="todos collection red-text">You have no todos left yay</p>)
  return (
    <div>
      {todolist}
    </div>
  )
}
export default Todos;
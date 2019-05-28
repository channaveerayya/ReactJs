const initState={
    posts:[
           {
               id:'1',
               title:'squirtle',
               body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus enim molestias suscipit facere explicabo quos temporibus minima voluptatibus beatae, quae praesentium id culpa ullam impedit. Quos nobis expedita eum?'   
           },
            {
                id:'2',
                title:'laid an egg',
                body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus enim molestias suscipit facere explicabo quos temporibus minima voluptatibus beatae, quae praesentium id culpa ullam impedit. Quos nobis expedita eum?'   
           },
           {
                id:'3',
                title:'squifossil was found',
                body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat possimus enim molestias suscipit facere explicabo quos temporibus minima voluptatibus beatae, quae praesentium id culpa ullam impedit. Quos nobis expedita eum?'   
           }
    ]
}

const rootReducer=(state=initState,action)=>{
    return state;

}
export default rootReducer;
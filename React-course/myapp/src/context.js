import React,{Component} from 'react'

const Context =React.createContext();
const reducer=(state,action)=>{
    switch(action.type){
        case 'DELETE_CONTACT':
        return{
            ...state,
            contacts:state.contacts.filter(contact=>
                contact.id!==action.payload)
                
        };
        case 'ADD_CONTACT':
        return{
            ...state,
            contacts:[action.payload,...state.contacts]
                
        };
        default:
            return state;
    }
} 
export class Provider extends Component{
    state={
        contacts:[
            {
                id:1,
                name:'Channu',
                email:'channu@gmail.com',
                phone:'998-097-2009'
            },
            {
                id:2,
                name:'Abi',
                email:'abi@gmail.com',
                phone:'99-000-2222'
            },
            {
                id:3,
                name:'Dinu',
                email:'dinu@gmail.com',
                phone:'918-111-0000'
            }
        ],
        dispatch:action=>{
            this.setState(state=>reducer(state,action))
        }
    }

    render(){
        return(
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}  

export const Consumer=Context.Consumer;

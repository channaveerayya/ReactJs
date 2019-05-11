import React,{Component} from 'react'

const Context =React.createContext();
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
        ]
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

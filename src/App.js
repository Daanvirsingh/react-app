import React from 'react';

import Field from './Field';
import List from './List';




class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            items : []
        }
    }
    dell = (i) =>{
        let yo=this.state.items.filter((item)=>{
            return item.id!==i;
        })
        this.setState({
            items : yo
        })
    }
    addTodo = i =>{
        var flag=true;
        this.state.items.map((id=>{
            if(id.title===i){
                flag=false;
                return flag
            }
        }))

        if(flag){
        const id=this.state.items.length + 1;
        const record = {id: id, title : i};
        
        
        
        this.setState({
            items: [...this.state.items,record]
        })
        }
    }

    render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-4"></div>
                <Field  addTodo={this.addTodo}/>
                <div className="col-sm-4"></div>
                
                <List tasks={this.state.items} dell={this.dell}/>
            </div>
            
        </div>
        );
    };
};

export default App;
import React from 'react';

class List extends React.Component {
    constructor(props){
        super(props);
        this.name="yo";
        this.state={
            onclick: [false]
        };
        
    }
    // componentWillReceiveProps(props){
    //     this.setState({input: [...props.tasks] }, () => {console.log(this.state.input)});
        
    // }
    
    handleClick = (id,prop) =>{
            var yo=prop.map((l)=>{
                if(l.id===id){return true}
                return false
            })
            this.setState({
                 onclick:[...yo]
            });
            console.log(this.state.onclick);
        
    }
    render(){
        return(
            <div className="row">
            <ul >
                
                {   this.props.tasks.map((i) =>{
                     
                return (<div className="row">
                        <div className="col-sm-10">
                        <li className="list-group-item" onClick={this.handleClick.bind(this,i.id,this.props.tasks)}> { this.state.onclick[i.id-1] ? <del>{i.title}</del> : i.title}</li>
                        </div>
                        <div className="col-sm-2">
                        <button className="btn btn-danger" onClick={this.props.dell.bind(this,i.id)}>Delete</button>
                        </div>
                        </div>
                    );})
                }
                
                
                </ul>
                </div>
        );
    }
};

export default List;
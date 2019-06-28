import React from 'react';

class Field extends React.Component {
    constructor(props){
        super(props);
        this.name="yo";
        this.state={};
    }
    handleChange = e =>{
        this.setState({
        input :e.target.value
        });
    }
    handleTodo = () => {
        // const {addTodo}=this.props;
        // const {input}=this.state;
        this.props.addTodo(this.state.input)
        this.setState({
            input: ""
        })
    }

    render() {
        return(
            <div className="col-sm-4">

                <h1 className="text-center">TO DO LIST</h1>

                <input type='text' className="form-control"
                onChange={this.handleChange} value={this.state.input}/>
                <br></br>
                <div className="text-center">
                <button className="btn btn-secondary" onClick={this.handleTodo}>SUBMIT</button>
                </div>
            </div>
        );
    };
};

export default Field;
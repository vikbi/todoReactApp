import React from 'react';

export class AddNewTask extends React.Component{

    constructor(){
        super();
        this.submitted = this.submitted.bind(this);
    }
    submitted(event){
        event.preventDefault();
        var input = event.target.querySelector('input'); //get the value from field
        var value = input.value;
        input.value = '';
        //to add the validation
        if(value){
            //provide the value to parent component
            this.props.updatedList(value);
        }else{
            console.log('please add some input');
        }
    }
    render(){
        var formStyle = {
            textAlign : 'center'
        }

        var addTaskstyle = {
            margin : '20px',
            color : '#45a252',
            border: 'solid 2px #000000'
        }
        var inputStyle = {
            color : '#4165d2',
            borderStyle : 'dashed',
            marginBottom : '2%'
        }
        return (
            <form style={formStyle} onSubmit={this.submitted}> 
            <div style={addTaskstyle}>
                <label>Add new Task</label>
                <br/>
                <input type="text" style={inputStyle}/>
            </div>
            </form>
        );
    }
}
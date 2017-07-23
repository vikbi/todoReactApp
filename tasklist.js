import React from 'react';

export class TaskList extends React.Component{
    constructor(){
        super();
        this.remove = this.remove.bind(this);
    }

    remove(elem){
         var value = elem.target.parentNode.querySelector('span').innerText;
         this.props.remove(value);
    }

    render(){
        var buttonStyle = {
            color : 'red',
            marginLeft : '4%',
            backgroundColor : '#e8b147',
            border : 'crimson'
        }
        var listStyle = {
            border : 'solid 2px #a0e',
            marginLeft : '5%'
        }
        var titleStyle = {
            paddingLeft : '2%'
        }
        var items = this.props.tasks.map((elem, i) => {
                return <li key={i} ><span>{elem}</span><button style={buttonStyle} onClick={this.remove} >X</button></li>;
            });
        return (
            <div style={listStyle}>
                <h4 style={titleStyle}>Available Tasks</h4>
            <ul>
                {items}
            </ul>
            </div>
        );
    }
}
import React from 'react';

import {AddNewTask} from './newtask';
import {TaskList} from './tasklist';

export class ToDo extends React.Component{
    constructor(props) {
        super();
        this.state = { tasks :  props.tasks }; //set tasks in state, to available at other places
        this.updatedList = this.updatedList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    updatedList(text){
        var uptasks = this.state.tasks;
        uptasks.push(text);
        this.setState({tasks : uptasks});
        this.updateStorage(uptasks);
    }

    removeTask(value){
        var removeList = this.state.tasks;
        removeList.splice(removeList.indexOf(value),1);
        this.setState({tasks : removeList });
        this.updateStorage(removeList);
    }

    updateStorage(tasks){
        console.log('task saved');
        localStorage.setItem('stored' ,JSON.stringify(tasks) );
    }
    render() {
        var styles = {
            backgroundColor : '#e0cba9'
        }
        return (
            <div style={styles}>
            <h1> To do App </h1>
             <AddNewTask updatedList={this.updatedList} />
             <TaskList tasks={this.state.tasks} remove={this.removeTask}/>
             </div>
        );
    }
}
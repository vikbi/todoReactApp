import React from 'react';
import ReactDom from 'react-dom';
import {ToDo} from './todo';

var tasklist = ['TAsk1', "test2", "test4"];

var stored = localStorage.getItem('stored');
if(stored){
    tasklist = JSON.parse(stored);
}
ReactDom.render(
    <ToDo tasks={tasklist} />,
    document.getElementById('todo')
);


import React from 'react';
import Todo from './todo';

function todolist(props) {

    return <div>
        <ul>
        {
            props.todos.map((todo, index) => {
                return <Todo key={index} todo={todo}/>
            })
        }
        </ul>
    </div>;

}

export default todolist;

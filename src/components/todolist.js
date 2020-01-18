import React from 'react';
import Todo from './todo';

function todolist({todos, removeToDo}) {

    return <div>
        <ul>
        {
            todos.map((todo, index) => {
                return <Todo id={index} key={index} onClick={removeToDo} todo={todo}/>
            })
        }
        </ul>
    </div>;

}

export default todolist;

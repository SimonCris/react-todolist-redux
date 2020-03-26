import React from 'react';
import Todo from './todo';

function todolist({todos, removeToDo, toggleToDo}) {

    return <div>
        <ul>
        {
            todos.map((todo) => {
                return <Todo id={todo.id} key={todo.id} onClick={toggleToDo} onRemoveTodo={removeToDo} todoItem={todo}/>
            })
        }
        </ul>
    </div>;

}

export default todolist;

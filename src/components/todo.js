import React from 'react';

function todo({todoItem, onClick, id, onRemoveTodo}) {
    return <li className={todoItem.completed ? 'completed ' : ''} onClick= {() => {
        onClick(id, !todoItem.completed)
        }
     }>
     <span className={todoItem.completed ? 'completed ' : 'uncompleted'}></span>
     {todoItem.todo}
     <span className={"cross"} onClick={() => {
         onRemoveTodo(id)
     }}></span>
    </li>

}

export default todo;

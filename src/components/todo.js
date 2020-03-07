import React from 'react';

function todo({todoItem, onClick, id}) {
    return <li className={todoItem.completed ? 'completed ' : ''} onClick= {() => {
        onClick(id)
        }
     }>
     <span className={todoItem.completed ? 'completed ' : 'uncompleted'}></span>
     {todoItem.todo}
    </li>

}

export default todo;

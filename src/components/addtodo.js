import React from 'react';

function addToDo(props) {
    return <div>
        <input ref={props.todoInputRef} />
        <button onClick={props.addToDo}>Add</button>
    </div>
}

export default addToDo;

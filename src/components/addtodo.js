import React from 'react';

function addToDoComponent({addToDo}) {

    /** Memorizza il valore dell'input */
    let inputValue;

    // Dispatch chiama il metodo addToDo presente all'interno di index.js
    return <div>
        <input ref = { val => {inputValue = val} } />
        <button onClick = {
            () => {
                addToDo(inputValue.value);
                inputValue.value = '';
            }
        }>Add</button>
    </div>
}

export default addToDoComponent;

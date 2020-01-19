import React from 'react';

function addToDoComponent({addToDo}) {

    /** Memorizza il valore dell'input */
    let inputValue;

    // Dispatch chiama il metodo addToDo presente all'interno di index.js
    return <div>
        <input
            onKeyUp={
                (event) => {
                    if (+event.keyCode == 13) {
                        addToDo(inputValue.value);
                        inputValue.value = '';
                    }
                }
            }
            ref = { val => {inputValue = val} } />
        <button onClick = {
            () => {
                addToDo(inputValue.value);
                inputValue.value = '';
            }
        }>Add</button>
    </div>
}

export default addToDoComponent;

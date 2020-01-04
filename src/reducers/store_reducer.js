import React from 'react';

/** La funzione reducer serve per inizializzare lo store mediante il metodo createStore.
 * E' una funzione che restituisce uno stato dell'applicazione in funzione dell'azione
 * ricevuta. In questo caso, quando viene passata l'azione ADD_TODO aggiunge il nuovo valore
 * all'array e restituisce lo stato modificato*/
function storeReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos : [
                    action.todoToAdd,
                    ...state.todos
                ]
            };

        case 'REMOVE_TODO':
            return {
                todos: [
                    ...state.todos.slice(0, action.indexToRemove),
                    ...state.todos.slice(action.indexToRemove + 1)
                ]
            };

        default:
            return {...state};
    }
}

export default storeReducer;

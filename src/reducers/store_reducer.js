import React from 'react';

/** La funzione reducer serve per inizializzare lo store mediante il metodo createStore.
 * E' una funzione che restituisce uno stato dell'applicazione in funzione dell'azione
 * ricevuta. In questo caso, quando viene passata l'azione ADD_TODO aggiunge il nuovo valore
 * all'array e restituisce lo stato modificato.
 *
 * In tutte le azioni viene sempre ritornato il nuovo stato a partire
 * da quello già esistente
 *
 * */
function storeReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos : [
                    {
                        id: state.todos.length,
                        todo: action.todoToAdd.text,
                        completed: action.todoToAdd.completed
                    },
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

        case 'TOGGLE_TODO':
            return {
                todos:
                    state.todos.map(todo => {
                        /** Cambio il campo COMPLETED solo nel caso dell'oggetto che ha l'id passato in input */
                        if(todo.id != action.id) {
                            return todo;
                        }
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    })
            };

        default:
            return {...state};
    }
}

export default storeReducer;

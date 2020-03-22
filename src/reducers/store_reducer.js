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
                ...state, // viene eseguito lo spread dello stato che recupera tutti i campi
                activeFilter: 'TO DO',
                todos : [ // sovrascrive solo l'array di todos
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
                ...state, // viene eseguito lo spread dello stato che recupera tutti i campi
                todos: [
                    ...state.todos.slice(0, action.indexToRemove),
                    ...state.todos.slice(action.indexToRemove + 1)
                ]
            };

        case 'TOGGLE_TODO':
            return {
                ...state, // viene eseguito lo spread dello stato che recupera tutti i campi
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

        case 'SET_FILTER':
            return {
                ...state,
                activeFilter: action.activeFilter
            };

        case 'GET_TODOS_FULFILLED':
            return {
                ...state,
                todos: action.payload.data
            };

        default:
            return {...state};
    }
}

export default storeReducer;

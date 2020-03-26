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
        case 'ADD_TODO_FULFILLED':
            return {
                ...state, // viene eseguito lo spread dello stato che recupera tutti i campi
                activeFilter: 'TO DO',
                todos : [
                    action.payload.data, // sovrascrive solo l'array di todos
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

        case 'TOGGLE_TODO_FULFILLED':
            return {
                ...state, // viene eseguito lo spread dello stato che recupera tutti i campi
                todos:
                    state.todos.map(todo => {
                        /** Se l'id è diverso da quello dell'oggetto modificato restituisco l'oggetto originale,
                         * altrimenti prelevo l'oggetto modificato dalla payload della response */
                        if(todo.id != action.payload.data.id) {
                            return todo;
                        }
                        return {
                            ...todo,
                            completed: action.payload.data.completed
                        }
                    })
            };

        case 'SET_FILTER_FULFILLED':
            return {
                ...state,
                activeFilter: action.payload.data.filter
            };

        case 'GET_FILTER_FULFILLED':
            return {
                ...state,
                activeFilter: action.payload.data.filter
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

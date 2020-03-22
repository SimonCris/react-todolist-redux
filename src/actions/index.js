import axios from 'axios';
import {GET_TODOS_URL} from "../config/conf";

/** Azioni **/

/** Recupero la lista di todos mediante una chiamata ad un servizio */
export const getTodos = () => {
    return {
        type: 'GET_TODOS',
        payload: axios.get(GET_TODOS_URL)
    }
};

/** Aggiungo TODO */
export const addToDo = (newTodoValue) => {
    return {
        type: 'ADD_TODO',
        todoToAdd: {
            text: newTodoValue,
            completed: false
        }
    }
};

/** Rimuovo TODO */
export const removeToDo = (toDoIndex) => {
    return {
        type: 'REMOVE_TODO',
        indexToRemove: toDoIndex
    }
};

/** Cambio stato COMPLETED al TODO passato in input */
export const toggleToDo = (toDoIndex) => {
    return {
        type: 'TOGGLE_TODO',
        id: toDoIndex
    }
};

/** imposta un filtro sui todo (ALL, COMPLETED, TODO) */
export const filterToDo = (filter = 'ALL') => {
    return {
        type: 'SET_FILTER',
        activeFilter: filter
    }
};

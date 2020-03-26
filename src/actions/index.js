import axios from 'axios';
import {API_FILTER_URL, API_TODOS_URL} from "../config/conf";

/** Azioni **/

/** Recupero la lista di todos mediante una chiamata ad un servizio */
export const getTodos = () => {
    return {
        type: 'GET_TODOS',
        payload: axios.get(API_TODOS_URL)
    }
};

/** Aggiungo TODO */
export const addToDo = (newTodoValue) => {
    return {
        type: 'ADD_TODO',
        payload: axios.post(API_TODOS_URL, {
            todo: newTodoValue,
            completed: false
        })
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
export const toggleToDo = (toDoIndex, isToDoCompleted) => {
    return {
        type: 'TOGGLE_TODO',
        payload: axios.patch(API_TODOS_URL + '/' + toDoIndex, { // Chiama l'endopoint aggiungendo in queryString l'id dell'oggetto da modificare
            completed: isToDoCompleted                                    // e passa nel json il campo da modificare
        })
    }
};

/** imposta un filtro sui todo (ALL, COMPLETED, TODO) */
export const filterToDo = (filter = 'ALL') => {
    return {
        type: 'SET_FILTER',
        payload: axios.post(API_FILTER_URL, {
            filter: filter
        })
    }
};

/** Recupera il filtro tramite una chiamata ad un servizio */
export const getFilter = () => {
    return {
        type: 'GET_FILTER',
        payload: axios.get(API_FILTER_URL)
    }
};

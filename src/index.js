import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import storeReducer from './reducers/store_reducer';

const initTodos = {
    todos: [
        {
            id: 0,
            todo: 'Fare la spesa',
            completed: false
        },
        {
            id: 1,
            todo: 'Fare i compiti',
            completed: true
        },
        {
            id: 2,
            todo: 'Chiamare la mamma',
            completed: false
        }
    ],
    activeFilter : 'ALL'
};

/** Tramite il metodo createStore viene creato uno stato dell'applicazione.
 * Il metodo prende in input la funzione reducers, in modo che venga restituito
 * uno stato specifico in funzione dell'azione e lo stato iniziale, in questo caso
 * l'array initTodos.
 * Tramite getState possiamo recuperare lo stato corrente dell'applicazione*/
const store = createStore(storeReducer, {todos: [...initTodos.todos]});

/** Ogni volta che cambia lo stato viene stampato in console */
store.subscribe(() => {console.log(store.getState())});

/** Il componente provider di React-Redux si occupa di passare automaticamente
 * lo store a tutti i componenti dell'applicazione che sono racchiusi nel tag <Provider>.
 * I singoli componenti (generalmente containers) che usano componenti che fanno riferimento
 * allo store, utilizzano il metodo connect di react-redux per collegare lo store al
 * componente che si vuole usare*/
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

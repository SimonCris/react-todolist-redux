import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import storeReducer from './reducers/store_reducer';

const initTodos = [
    'Fare la spesa',
    'Fare i compiti',
    'Chiamare a casa'
];

/** Tramite il metodo createStore viene creato uno stato dell'applicazione.
 * Il metodo prende in input la funzione reducers, in modo che venga restituito
 * uno stato specifico in funzione dell'azione e lo stato iniziale, in questo caso
 * l'array initTodos.
 * Tramite getState possiamo recuperare lo stato corrente dell'applicazione*/
const store = createStore(storeReducer, {todos: [...initTodos]});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

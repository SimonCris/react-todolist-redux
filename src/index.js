import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import storeReducer from './reducers/store_reducer';

let initTodos = {
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

/** Prima di inizializzare lo stato dell'applicazione viene effettuato un check
 * nella localstorage del browser e se esiste uno stato precedentemente salvato
 * viene recuperato e ripristinato come stato corrente*/
if (localStorage.getItem('todoListAppStatus')) {
    const stateFromLocalStorage = JSON.parse(localStorage.getItem('todoListAppStatus'));
    if (stateFromLocalStorage) {
        initTodos = stateFromLocalStorage;
    }
}


/** Tramite il metodo createStore viene creato uno stato dell'applicazione.
 * Il metodo prende in input la funzione reducers, in modo che venga restituito
 * uno stato specifico in funzione dell'azione e lo stato iniziale, in questo caso
 * l'array initTodos.
 * Tramite getState possiamo recuperare lo stato corrente dell'applicazione*/
const store = createStore(storeReducer, {...initTodos});

/** Ogni volta che cambia lo stato viene salvato nella localStorage del browser */
store.subscribe(() => {
    const currentState = JSON.stringify(store.getState());
    localStorage.setItem('todoListAppStatus', currentState);
});

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

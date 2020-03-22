import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from "redux";
import {Provider} from 'react-redux';
import storeReducer from './reducers/store_reducer';
import reduxLogger from 'redux-logger';
import promise from 'redux-promise-middleware';
import axios from 'axios';

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

/** Un middleware è una funzione che si frappone nella dispatch delle azioni e può essere
 * recuperato lo stato dello store prima e dopo la chiamata ad un'azione. Dopo che viene eseguita
 * l'azione lo stato può essere modificato e può essere ritornato un result.
 *
 * Param. getstate e dispatch vengono recuperati automaticamente dallo store
 *        next è relativa al prossimo middleware che viene passato allo store e chiamato (ad es. se non viene generato
 *             nessun next(action), il middleware successivo non partirà e si interromperà il flusso dei middleware)
 *        action è relativa all'azione che viene eseguita dalla dispatch*/
const loggerMiddleware = ({getState, dispatch}) => next => action => {
    console.log("PRIMO");
    let result = next(action);
    return result;
};

const loggerMiddleware2 = ({getState, dispatch}) => next => action => {
    console.log("SECONDO");
    let result = next(action);
    return result;
};

/** Tramite il metodo createStore viene creato uno stato dell'applicazione.
 * Il metodo prende in input la funzione reducers, in modo che venga restituito
 * uno stato specifico in funzione dell'azione, lo stato iniziale, in questo caso
 * l'array initTodos e i middleware che gestiranno le azioni chiamate nelle dispatch.
 *
 * Usiamo redux-logger per visualizzare i log su console relativi alle azioni che vengono eseguita dai vari
 * middleware che vengono chiamati*/
const store = createStore(storeReducer, {...initTodos}, applyMiddleware(reduxLogger, promise));

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

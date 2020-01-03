import React, {Component} from 'react';
import {createStore} from "redux";
import './App.css';

/** La funzione reducer serve per inizializzare lo store mediante il metodo createStore.
 * E' una funzione che restituisce uno stato dell'applicazione in funzione dell'azione
 * ricevuta. In questo caso, quando viene passata l'azione ADD_TODO aggiunge il nuovo valore
 * all'array e restituisce lo stato modificato*/
function reducers(state = {}, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos : [
                   action.todoToAdd,
                   ...state.todos
                ]
            };

        default:
            return {...state};
    }
}

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
const store = createStore(reducers, {todos: [...initTodos]});

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        /** Riferimento ad un elemento del DOM, in questo caso all'input di testo */
        this.todoInputRef = React.createRef();
    }

    componentDidMount() {
        this.setState({
            todos: [...store.getState().todos]
        });

        /** La subscribe dello store serve per catturare ogni aggiornamento dello
         * store e svolgere delle azioni */
        store.subscribe(() => {
            this.setState({
                todos: [...store.getState().todos]
            });
        });
    }

    addToDo = () => {
        const newTodoValue = this.todoInputRef.current.value;
        /** Tramite il metodo dispatch dello store, vengono passati
         * alla funzione reducers dello store, l'azione (type) e il valore
         * (todoToAdd in questo caso) che intercetterà l'action e aggiungerà
         * il valore all'array todos*/
        store.dispatch({
            type: 'ADD_TODO',
            todoToAdd: newTodoValue
        })
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    TODO LIST
                </header>
                <div>
                    <input ref={this.todoInputRef} />
                    <button onClick={this.addToDo}>Add</button>
                </div>
                <div>
                    <ul>
                        {
                            this.state.todos.map((todo, index) => {
                                return <li key={index}>{todo}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;

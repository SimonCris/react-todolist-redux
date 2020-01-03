import React, {Component} from 'react';
import {createStore} from "redux";
import './App.css';

/** La funzione reducer serve per inizializzare lo store mediante il metodo createStore.
 * E' una funzione che restituisce uno stato dell'applicazione in funzione dell'azione
 * ricevuta. In questo caso, semplicemente restituisce una copia dello stato senza modificarlo*/
function reducers(state = {}, action) {
    return {...state};
}

const initTodos = [
    'Fare la spesa',
    'Fare i compiti',
    'Chiamare a casa'
    ];

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
        /** Tramite il metodo createStore viene creato uno stato dell'applicazione.
         * Il metodo prende in input la funzione reducers, in modo che venga restituito
         * uno stato specifico in funzione dell'azione e lo stato iniziale, in questo caso
         * l'array initTodos.
         * Tramite getState possiamo recuperare lo stato corrente dell'applicazione*/
        const store = createStore(reducers, {todos: [...initTodos]});
        console.log('store', store.getState());
        this.setState({
            todos: [...store.getState().todos]
        })
    }

    addToDo = () => {
        alert(this.todoInputRef.current.value);
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

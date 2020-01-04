import TodoList from '../components/todolist';
import {connect} from "react-redux";

/** Questo metodo serve per restituire parte dello state dell'applicazione
 * a partire dallo state memorizzato nello store globale */
const mapStateFromProps = (state) => {
    return {
        todos: [
            ...state.todos
        ]
    }
};

/** La funzione connect di React-Redux unisce automaticamente lo store al componente che
 * utilizza lo state dello store (in questo caso TodoList preleva l'array
 * todos dallo store globale).
 * Nei componenti di visualizzazione, va usato il container MyTodoList
 * per visualizzare il componente TodoList con i valori dello store globale*/
const myConnect = connect(mapStateFromProps);
const myTodoList = myConnect(TodoList);

export default myTodoList;

import TodoList from '../components/todolist';
import {connect} from "react-redux";
import {removeToDo, toggleToDo} from "../actions";

/** Questo metodo serve per restituire parte dello state dell'applicazione
 * a partire dallo state memorizzato nello store globale */
const mapStateFromProps = (state) => {
    return {
        todos: filterTodos(state)
    }
};

/** Restituisce i TODO in funzione del filtro settato */
const filterTodos = (state)  => {
    switch (state.activeFilter) {
        case "ALL":
            return state.todos.filter(todo => {
                return todo;
            });

        case 'TO DO':
            return state.todos.filter(todo => {
               return !todo.completed
            });

        case 'COMPLETED':
            return state.todos.filter(todo => {
                return todo.completed
            });

    }
};

/** Connect collega lo store al componente addtodo e passa un oggetto con tutte le azioni che saranno usate
 * nel componente */
const actionsToSendInConnect = {
    removeToDo: removeToDo,
    toggleToDo: toggleToDo
};
export default connect(mapStateFromProps, actionsToSendInConnect )(TodoList);


import TodoList from '../components/todolist';
import {connect} from "react-redux";
import {removeToDo, toggleToDo} from "../actions";

/** Questo metodo serve per restituire parte dello state dell'applicazione
 * a partire dallo state memorizzato nello store globale */
const mapStateFromProps = (state) => {
    return {
        todos: [
            ...state.todos
        ]
    }
};

/** Connect collega lo store al componente addtodo e passa un oggetto con tutte le azioni che saranno usate
 * nel componente */
const actionsToSendInConnect = {
    removeToDo: removeToDo,
    toggleToDo: toggleToDo
};
export default connect(mapStateFromProps, actionsToSendInConnect )(TodoList);


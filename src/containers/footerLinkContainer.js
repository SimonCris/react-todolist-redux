import {connect} from "react-redux";
import TodoListFooter from "../components/todoListFooter";
import {filterToDo} from "../actions";

/** Oggetto contenente le proprietà che saranno usate nel componente TodoListFooter */
const mapStateToProps = (state) => {
    return {
        activeFilter: state.activeFilter
    }
};

/** Connect collega lo store al componente todoListFooter e passa un oggetto con tutte le azioni che saranno usate
 * nel componente */
const actionsToSendInConnect = {
    filterToDo: filterToDo
};

export default connect(mapStateToProps, actionsToSendInConnect )(TodoListFooter);

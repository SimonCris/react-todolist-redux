import addToDoComponent from '../components/addtodo';
import {connect} from "react-redux";
import {addToDo}from '../actions/index'

/** Connect collega lo store al componente addtodo e passa un oggetto con tutte le azioni che saranno usate
 * nel componente */
const actionsToSendInConnect = {
    addToDo: addToDo
};
export default connect(null, actionsToSendInConnect )(addToDoComponent);

import addToDoComponent from '../components/addtodo';
import {connect} from "react-redux";
import {addToDo}from '../actions/index'

/** Connect collega lo store al componente addtodo e passa il metodo addToDo di actions */
export default connect(null, {addToDo} )(addToDoComponent);

import React, {Component} from 'react';
import './App.css';
import MyTodoList from './containers/my_todo_list';
import Header from './components/header';
import MyAddTodo from './containers/addNewTodo';
import FooterLinkContainer from './containers/footerLinkContainer';

/** Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import {getTodos, getFilter} from "./actions";

class App extends Component {

    constructor(props) {
        super(props);
    }

    /** onInit */
    componentDidMount() {
        /** recupera la lista dei todos e il filtro tramite chiamate a due servizi differenti */
        this.props.getTodos();
        this.props.getFilter();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <MyAddTodo/>
                <MyTodoList/>
                <FooterLinkContainer/>
            </div>
        );
    }
}

export default connect (null, {getTodos, getFilter})(App);

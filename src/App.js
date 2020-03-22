import React, {Component} from 'react';
import './App.css';
import MyTodoList from './containers/my_todo_list';
import Header from './components/header';
import MyAddTodo from './containers/addNewTodo';
import FooterLinkContainer from './containers/footerLinkContainer';

/** Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from "react-redux";
import {getTodos} from "./actions";

class App extends Component {

    constructor(props) {
        super(props);
    }

    /** onInit */
    componentDidMount() {
        /** recupera la lista tramite una chiamata ad un servizio */
        this.props.getTodos();
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

export default connect (null, {getTodos})(App);

import React, {Component} from 'react';
import './App.css';
import MyTodoList from './containers/my_todo_list';
import Header from './components/header';
import MyAddTodo from './containers/addNewTodo';
import TodoListFooter from './components/todoListFooter';

/** Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <MyAddTodo/>
                <MyTodoList/>
                <TodoListFooter/>
            </div>
        );
    }
}

export default App;

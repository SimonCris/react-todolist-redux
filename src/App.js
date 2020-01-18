import React, {Component} from 'react';
import './App.css';
import MyTodoList from './containers/my_todo_list';
import Header from './components/header';
import MyAddTodo from './containers/addNewTodo';

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
            </div>
        );
    }
}

export default App;

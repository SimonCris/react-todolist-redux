import React, {Component} from 'react';
import './App.css';
import MyTodoList from './containers/my_todo_list';
import Header from './components/header';
import AddTodo from './components/addtodo';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <AddTodo/>
                <MyTodoList/>
            </div>
        );
    }
}

export default App;

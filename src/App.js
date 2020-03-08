import React, {Component} from 'react';
import './App.css';
import MyTodoList from './containers/my_todo_list';
import Header from './components/header';
import MyAddTodo from './containers/addNewTodo';
import FooterLink from './components/filterLink';

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
                <FooterLink actionType="ALL">
                    ALL
                </FooterLink>
                {' '}
                <FooterLink actionType="TO DO">
                    TO DO
                </FooterLink>
                {' '}
                <FooterLink actionType="COMPLETED">
                    COMPLETED
                </FooterLink>
            </div>
        );
    }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';

const App = () => {
    const todoData = [
        { text: 'Learn React', important: false},
        { text: 'Get an awesome job', important: true},
        { text: 'Get a life', important: false},
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData}/>
        </div>
    );
}

//const el = React.createElement('h1', null, 'Hello world!');

ReactDOM.render(<App />, document.querySelector('#root'));
import React from 'react';
import TodoList from '../todo-list/todo-list';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './app.css';

const App = () => {
    const todoData = [
        { text: 'Learn React', important: false},
        { text: 'Get an awesome job', important: true},
        { text: 'Get a life', important: false},
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todos={todoData}/>
        </div>
    );
}

export default App;



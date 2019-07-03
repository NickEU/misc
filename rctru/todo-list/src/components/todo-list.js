import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({ todos }) => {
    return (
        <ol>
            {todos.map((item, id) => <li key={id}><TodoListItem item={item} /></li>)}
        </ol>
    );
}

export default TodoList;
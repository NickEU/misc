import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {
    const elements = todos.map(
        (item, id) => <li className="list-group-item" 
                          key={`${item.text.slice(0,3)}${id}`}>
                              <TodoListItem item={item} />
                      </li>); 
    return (
        <ul className="todo-list">
            { elements }
        </ul>
    );
}

export default TodoList;
import React from 'react';

const TodoListItem = ({ item }) => {
    let { text, important } = item;
    const style = {
        color: important ? 'red' : 'black',
    }

    return (
        <span style={style} >{ text }</span>
    );
};

export default TodoListItem;
import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
  constructor (props) {
    super(props);
    let { text, important } = this.props.item;
    this.state = {
      text,
      important,
      completed: false,
    };
  }

  handleTextClick = () => {
    this.setState({
      completed: !this.state.completed,
    })
  }

  render() {
    const done = this.state.completed ? ' done' : '';
    const important = this.state.important ? ' important' : '';
    
    return (
      <span className="todo-list-item">
        <span
          onClick={this.handleTextClick}
          className={`todo-list-item-text${done}${important}`}
          >
          {this.state.text}
        </span>
        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
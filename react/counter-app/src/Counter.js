import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.startingAt
    };
    this.handleClickInc = this.handleClickInc.bind(this);
    this.handleClickDec = this.handleClickDec.bind(this);
  }
  handleClickInc() {
    this.setState({count: this.state.count + 1});
  }
  handleClickDec() {
    this.state.count > this.props.startingAt 
        ? this.setState({count: this.state.count - 1}) 
        : console.log('Cannot decrement past the starting value of the counter') 
  }
  render() {
    return (
      <div className="Counter">
        <div>{this.state.count}</div>
        <button onClick={this.handleClickInc}>Increment</button>
        <button onClick={this.handleClickDec}>Decrement</button>
      </div>
    );

  }  
}


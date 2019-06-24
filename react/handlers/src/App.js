import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square'; 

export default class App extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Square size={200} color="blue" /> 
        </header>     
      </div>
    );
  }
}
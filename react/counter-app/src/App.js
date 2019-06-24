import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter startingAt={0}/>
        <Counter startingAt={-15}/>
        <Counter startingAt={25}/>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React is awesome
        </a>
      </header>
    </div>
  );
}

export default App;

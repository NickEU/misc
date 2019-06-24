import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Square isHidden={true} size={50}/>
          <Square initialColor={"blue"} size={80}/>
          <Square initialColor={"green"} size={100}/>
        </div>        
      </header>
    </div>
  );
}

export default App;

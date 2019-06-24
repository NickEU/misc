import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';
import SimpleSquare from './SimpleSquare';
import Hideable from './Hideable';

const HideableSquare = Hideable(SimpleSquare);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Square isHidden={true} size={60}/>
          <Square initialColor={"blue"} size={80}/>
          <Square initialColor={"green"} size={100}/>
          <HideableSquare isHidden={true} size={40} />
          <HideableSquare isHidden={false} size={50} color={'cyan'} />
          <SimpleSquare size={70}/>
        </div>        
      </header>
    </div>
  );
}

export default App;

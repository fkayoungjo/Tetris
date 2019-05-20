import React from 'react';
import Square from './components/square'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Flatiron Tetris</h1>
      </header>
      <Square color="7" />
    </div>
  );
}

export default App;

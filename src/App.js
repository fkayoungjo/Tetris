import React from 'react';
import Board from './components/board';
import Next from './components/next';
import Score from './components/score';
import Controls from './components/controls'
import Message from './components/message'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Flatiron Tetris</h1>
      </header>

      <Next />
      <Board />
      <Score />
      <Controls />
      <Message />
    </div>
  );
}

export default App;

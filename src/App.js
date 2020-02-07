import React from 'react';

// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import GameBoard from './GameBoard';

function App() {
  return (
    <div className="App">
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <GameBoard/>
        </div>
    </div>
  );
}

export default App;

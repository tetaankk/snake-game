import React, { useState, useRef, useEffect} from 'react';
import './App.css';
import Game from "./components/Game"

function App() {
  return (
    <div className="page">
      <div className="gameContainer">
        <Game />
      </div>
    </div>
  );
}

export default App;
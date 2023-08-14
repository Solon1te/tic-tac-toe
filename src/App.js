import React, {useState} from 'react';
import './App.css';

import {Board} from './components/Board';
import {Box} from './components/Box.js';
import {ResetButton} from './components'
import {ScoreBoard} from './components'


function App() {

  const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]

  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null))
  const [scores, setScores] = useState({ xScore: 0, oScore: 0})
  const [gameOver, setGameOver] = useState(false);

  
  return (
    <div className="App">
        <Board board ={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
    </div>
  );
}

export default App;

import './App.css';
import {Board} from './components/Board'
import {Box} from './components/Box.js'

function App() {
  return (
    <div className="App">
        <Board board ={board} onClick={gameOver ? resetBoard : handleBoxClick}/>
    </div>
  );
}

export default App;

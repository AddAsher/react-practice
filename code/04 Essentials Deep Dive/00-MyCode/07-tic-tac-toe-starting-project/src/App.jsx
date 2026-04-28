import {useState } from 'react';

import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {
    //here we are using the callback form of the state setter function 
    // because we are updating the state based on the previous state, 
    // and this ensures that we are always working with the most
    //  up-to-date state value,
    //  even if there are multiple state updates queued up. (preventing stale state issues))
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className ="highlight-player">
          <Player initialName = "player 1" symbol = "X" isActive={activePlayer === 'X'} />
          <Player initialName = "player 2" symbol = "O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      <Log />
    </main>
  );
}

export default App;

import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
        // we do this because even though we are updating the state right,
        // the object reference of the game board is still the same,
        //  so react doesn't know that it needs to re-render.
        //  (value changed but no visual changed as it is the same reference)
        const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; 
        updatedGameBoard[rowIndex][colIndex] = "X";
        return updatedGameBoard;
        
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick = {() => handleSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

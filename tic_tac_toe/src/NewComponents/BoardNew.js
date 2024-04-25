import SquareNew from './SquarNew';
import { useState } from 'react';
import { CalculateWinnerNew } from './CalculateWinnerNew';

export default function BoardNew() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || CalculateWinnerNew(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = CalculateWinnerNew(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  return (
    <>
      <div className="status"> {status}</div>
      <div className="board-row">
        <SquareNew value={squares[0]} onSquareClick={() => handleClick(0)} />
        <SquareNew value={squares[1]} onSquareClick={() => handleClick(1)} />
        <SquareNew value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <SquareNew value={squares[3]} onSquareClick={() => handleClick(3)} />
        <SquareNew value={squares[4]} onSquareClick={() => handleClick(4)} />
        <SquareNew value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <SquareNew value={squares[6]} onSquareClick={() => handleClick(6)} />
        <SquareNew value={squares[7]} onSquareClick={() => handleClick(7)} />
        <SquareNew value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

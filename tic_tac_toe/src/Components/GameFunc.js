import React, { useState } from 'react';
import BoardFunc from './BoardFunc';
import CalculateWinner from './CalculateWinner';
const GameFunc = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null)
    }
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();
    if (CalculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([
      ...newHistory,
      {
        squares: squares
      }
    ]);
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const current = history[stepNumber];
  const winner = CalculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? `Перейти к ходу № ${move}` : 'К началу игры';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `Выиграл ${winner}`;
  } else {
    status = `Следующий ход: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <BoardFunc squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default GameFunc;

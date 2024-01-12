import React, { useState } from "react";
import "./App.css";

const PLAYER_ENUM = [2, 3, 4];
const snakesAndLadders = {
  16: 6,
  47: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78,
};
const App = () => {
  const [numberOfPlayer, setNumberOfPlayer] = useState(2);
  const [showDiceRoll, setShowDiceRoll] = useState(false);
  const [playerPosition, setPlayerPosition] = useState(
    Array(numberOfPlayer).fill(1)
  );
  const [activePlayer, setActivePlayer] = useState(1);
  const [diceValue, setDiceValue] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const handleRollDice = () => {
    if (gameOver) return;
    setShowDiceRoll(true);
    const diceRollValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(diceRollValue);
    const currentPosition = playerPosition[activePlayer - 1];
    const newPosition = currentPosition + diceRollValue;
    const updatedPositions = [...playerPosition];

    if (newPosition > 100) return;
    if (snakesAndLadders[newPosition]) {
      updatedPositions[activePlayer - 1] = snakesAndLadders[newPosition];
    } else {
      updatedPositions[activePlayer - 1] = newPosition;
    }
    setPlayerPosition(updatedPositions);
    if (newPosition === 100) {
      setGameOver(true);
    } else {
      setActivePlayer((activePlayer % numberOfPlayer) + 1);
    }
  };
  const onResetGame = () => {
    setNumberOfPlayer(2);
    setActivePlayer(1);
    setGameOver(false);
    setPlayerPosition(Array(2).fill(1));
    setShowDiceRoll(false);
  };
  return (
    <div className="root">
      <h1>Play Snake And Ladder..!!</h1>
      <div className="board">
        {Array(100)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className={`cell ${
                playerPosition.find((el) => el === index + 1)
                  ? `player${playerPosition.indexOf(index + 1) + 1}`
                  : ""
              }`}
            >
              {index + 1}
            </div>
          ))}
      </div>
      <div className="info">
        <div>number of players : {numberOfPlayer}</div>
        <div>active player : {activePlayer}</div>
        {showDiceRoll && <div>dice value : {diceValue}</div>}
        {playerPosition.map((item, index) => (
          <div className={`button player${index + 1}`}>
            {`player[${index + 1}] position:  ${item}`}
          </div>
        ))}
        <div>
          {gameOver ? (
            <p>Game Over! Player {activePlayer} Wins!</p>
          ) : (
            <button onClick={handleRollDice}>Roll Dice</button>
          )}
          {PLAYER_ENUM.map((item, index) => (
            <button
              onClick={() => {
                onResetGame();
                setPlayerPosition(Array(item).fill(1));
                setNumberOfPlayer(item);
              }}
            >
              Player {item}
            </button>
          ))}
          <button onClick={onResetGame}>Reset Game</button>
        </div>
      </div>
    </div>
  );
};

export default App;

import { useState } from "react";

export const Game = () => {
  const [currentDice, setCurrentDice] = useState(0);
  const [numberSelected, setNumberSelected] = useState();
  const [score, setScore] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  const numberArr = [1, 2, 3, 4, 5, 6];

  const handleNumberSelected = (value) => {
    setNumberSelected(value);
  }


  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * numberArr.length);
    setCurrentDice(randomNumber);

    if (!numberSelected) {
      alert("Please select a number");
      return
    }
    setIsRolling(true);

    if (numberSelected === numberArr[randomNumber]) {
      setScore((prev) => prev + 1);
    } else {
      setScore((prev) => prev - 1);
    }

    setTimeout(() => setIsRolling(false), 1000);
    setNumberSelected(null);
  }

  return (
    <main className="game-container">
      <div className="top-section">
        <div className="score">
          <h1>{score}</h1>
          <h2>Score</h2>
        </div>
        <div className="buttons">
          {numberArr.map((value, i) => {
            return (
              <button onClick={() => handleNumberSelected(value)} className={`select-button ${numberSelected === value ? "selected" : ""}`} key={i}>
                {value}
              </button>
            );
          })}
          <p className="select">Select Number</p>
        </div>
      </div>

      <div className="bottom-section">
        <img onClick={rollDice} src={`/images/dice/dice_${numberArr[currentDice]}.png`} alt="" className={`dice-placeholder ${isRolling ? "animate" : ""}`} />
        <p>Click on the dice to roll</p>
      </div>
    </main>
  );
}
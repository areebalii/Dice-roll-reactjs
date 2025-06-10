export const StartGame = ({handleStartGame}) => {
  return (
    <>
      <main className="start-game-container">
        <div className="left">
          <img src="/images/dices.png" />
        </div>
        <div className="right">
          <div className="start-game">
            <h1>Welcome to the Game!</h1>
            <p>Click the button below to start playing.</p>
            <button className="start-button" onClick={handleStartGame}>Start Game</button>
          </div>
        </div>
      </main>
    </>
  );
}
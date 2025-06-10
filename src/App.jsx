import { useState } from 'react';
import './App.css'
import { StartGame } from './components/StartGame'
import { Game } from './components/Game';

function App() {
  const [startGame, setStartGame] = useState(true);

  const handleStartGame = () => {
    setStartGame((prev) => !prev);
  }

  return (
    <>
     {startGame ? <Game /> : <StartGame handleStartGame={handleStartGame} />}
    </>
  )
}

export default App

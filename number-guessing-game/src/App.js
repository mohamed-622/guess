import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 25) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const makeGuess = () => {
    const parsedGuess = parseInt(guess, 10);
    if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 25) {
      setMessage('Please enter a valid number between 1 and 25.');
    } else {
      setAttempts(attempts + 1);
      if (parsedGuess < number) {
        setMessage('Your guess is too low');
      } else if (parsedGuess > number) {
        setMessage('Your guess is too high');
      } else {
        setMessage(`Congratulations! You guessed the number in ${attempts} attempts.`);
        setGuess('');
      }

      if (attempts === 5 && parsedGuess !== number) {
        setMessage(`Sorry, you didn't guess the number. The correct number was ${number}.`);
        setGuess('');
      }
    }
  };

  return (
    <div className="App">
      <h1>Number Guessing Game</h1>
      <p>{message}</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={makeGuess}>Submit Guess</button>
    </div>
  );
}

export default App;

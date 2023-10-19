import React, { useState } from 'react';
import Home from './components/Home';
import Question from './components/Question';
import Results from './components/Results';
import './App.css';

const App = () => {
  const [gameState, setGameState] = useState('home');
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setGameState('question');
    setScore(0);
  };

  const endQuiz = () => {
    setGameState('results');
  };
  

  return (
    <div className="app">
      {gameState === 'home' && <Home onStartQuiz={startQuiz} />}
      {gameState === 'question' && <Question score={score} endQuiz={endQuiz} setScore={setScore} />}
      {gameState === 'results' && <Results score={score} />}
    </div>
  );
};

export default App;


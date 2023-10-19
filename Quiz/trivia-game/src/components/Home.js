import React from 'react';
import './Home.css';

const Home = ({ onStartQuiz }) => {
  return (
    <div className='home'>
      <h1>Welcome to the Game!</h1>
      <button onClick={onStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default Home;



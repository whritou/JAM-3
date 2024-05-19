import React, { useState } from 'react';
import GoalTracker from './GoalTracker';
import FlameVisualizer from './FlameVisualizer';
import './App.css';

function App() {
  const [completedGoals, setCompletedGoals] = useState(0);
  const [message, setMessage] = useState("");

  const handleGoalAdd = () => {
    setMessage("Bravo! Continuez comme ça!");
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  const handleGoalComplete = (count) => {
    setCompletedGoals(count);
  };

  return (
    <div className="App">
      <h1>Flamme de la Passion</h1>
      {message && <p className="motivation-message">{message}</p>}
      <GoalTracker onGoalAdd={handleGoalAdd} onGoalComplete={handleGoalComplete} />
      <FlameVisualizer completedGoals={completedGoals} />
    </div>
  );
}

export default App;

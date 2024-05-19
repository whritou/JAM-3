import React, { useState } from 'react';

function GoalTracker({ onGoalAdd, onGoalComplete }) {
  const [goals, setGoals] = useState([]);
  const [input, setInput] = useState("");

  const addGoal = () => {
    if (input) {
      const newGoals = [...goals, { text: input, completed: false }];
      setGoals(newGoals);
      setInput("");
      onGoalAdd();
    }
  };

  const toggleGoalCompletion = (index) => {
    const newGoals = [...goals];
    newGoals[index].completed = !newGoals[index].completed;
    setGoals(newGoals);
    onGoalComplete(newGoals.filter(goal => goal.completed).length);
  };

  return (
    <div>
      <h2>Suivi des Objectifs</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ajouter un nouvel objectif"
      />
      <button onClick={addGoal}>Ajouter</button>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={goal.completed}
              onChange={() => toggleGoalCompletion(index)}
            />
            {goal.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalTracker;

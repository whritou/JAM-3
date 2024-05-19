import React from 'react';
import './FlameVisualizer.css';

function FlameVisualizer({ completedGoals }) {
  const flameHeight = 100 + completedGoals * 20; // Increase flame height by 20px per completed goal

  return (
    <div>
      <h2>Visualisation de la Flamme</h2>
      <div className="flame-container">
        <div
          className="flame"
          style={{ height: `${flameHeight}px` }}
        ></div>
      </div>
    </div>
  );
}

export default FlameVisualizer;

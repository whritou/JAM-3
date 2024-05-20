import React, { useState, useEffect } from 'react';
import GoalTracker from './GoalTracker';
import FlameVisualizer from './FlameVisualizer';
import ShareBoard from './ShareBoard';
import './App.css';

function App() {
  const [completedGoals, setCompletedGoals] = useState(0);
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const messages = [
    "Bravo! Continuez comme ça!",
    "Excellent travail!",
    "Vous êtes sur la bonne voie!",
    "Continuez votre excellent travail!",
    "Votre persévérance porte ses fruits!"
  ];

  const handleGoalAdd = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleGoalComplete = (count) => {
    setCompletedGoals(count);
  };

  const handleSharePost = (goalText) => {
    setPosts([...posts, goalText]);
  };

  const handleDeletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h1>Flamme de la Passion</h1>
      {message && <p className="motivation-message">{message}</p>}
      <GoalTracker
        onGoalAdd={handleGoalAdd}
        onGoalComplete={handleGoalComplete}
        onSharePost={handleSharePost}
      />
      {posts.length > 0 && <ShareBoard posts={posts} onDeletePost={handleDeletePost} />}
      <FlameVisualizer completedGoals={completedGoals} />
      <img className="image-container" src="/torche.png" alt="torche" />
    </div>
  );
}

export default App;

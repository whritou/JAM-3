import React from 'react';

function ShareBoard({ posts, onDeletePost }) {
  return (
    <div>
      <h2>Partage des objectifs</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post}
            <button className="delete" onClick={() => onDeletePost(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShareBoard;

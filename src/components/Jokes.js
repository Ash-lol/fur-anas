// src/components/Jokes.js
import React, { useState } from 'react';

const Jokes = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    setLoading(true);
    setJoke('');
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke('Oops! Could not fetch a joke at this time.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Random Jokes</h2>
      <button onClick={fetchJoke}>Get a Joke</button>
      {loading && <div className="spinner"></div>}
      {joke && <div className="joke">{joke}</div>}
    </div>
  );
};

export default Jokes;

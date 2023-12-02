import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // Fetch potential matches from the backend
    axios.get('/users/matches')  // Update the endpoint based on your API
      .then(response => {
        setMatches(response.data);
      })
      .catch(error => {
        console.error('Error fetching matches:', error);
      });
  }, []);

  return (
    <div>
      <h2>Potential Matches</h2>
      <ul>
        {matches.map(match => (
          <li key={match._id}>
            <div>
              <h3>{match.username}</h3>
              {/* Display other match details (e.g., age, interests, etc.) */}
            </div>
            {/* Add buttons or actions for the user to interact with the match */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;


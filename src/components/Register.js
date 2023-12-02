import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      const response = await axios.post('/users/register', { username, password }); // Update the endpoint based on your API

      // Assuming your backend sends a token upon successful registration
      const token = response.data.token;

      // Store the token in local storage or cookies for subsequent requests
      localStorage.setItem('token', token);

      // Redirect to the user's profile or another page
      history.push('/profile');
    } catch (error) {
      setError('Registration failed. Please choose a different username.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <label>
          Confirm Password:
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;


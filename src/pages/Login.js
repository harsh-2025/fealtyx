// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../credentials.json';
import { useAuth } from '../AuthContext';

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      login();
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          placeholder="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

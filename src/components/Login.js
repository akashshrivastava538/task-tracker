// src/components/Login.js
import React, { useState } from 'react';
import { Card, Button, Input } from './styles';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      localStorage.setItem('authToken', 'your-auth-token');
      navigate('/tasks');
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <Card
      bgColor="#e1f5fe"
      color="#333"
      style={{
        padding: '30px', // Increased padding
        borderRadius: '10px', // More rounded corners
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', // Deeper shadow for depth
        maxWidth: '400px', // Set a max width for the card
        margin: 'auto', // Center the card
        marginTop: '100px' // Add top margin for spacing
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '24px' }}>
        Welcome to Your Task Manager
      </h1>
      <form onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            marginBottom: '20px', // Space below input
            padding: '10px', // Increased padding for inputs
            borderRadius: '5px', // Rounded corners for inputs
            border: '1px solid #ccc', // Light border
            transition: 'border-color 0.3s', // Transition for focus effect
          }}
          onFocus={(e) => (e.target.style.borderColor = '#007bff')}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            marginBottom: '30px', // Space below input
            padding: '10px', // Increased padding for inputs
            borderRadius: '5px', // Rounded corners for inputs
            border: '1px solid #ccc', // Light border
            transition: 'border-color 0.3s', // Transition for focus effect
          }}
          onFocus={(e) => (e.target.style.borderColor = '#007bff')}
          onBlur={(e) => (e.target.style.borderColor = '#ccc')}
        />
        <Button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '5px', // Rounded corners for button
            backgroundColor: '#007bff', // Primary button color
            color: '#fff',
            border: 'none',
            fontSize: '16px',
            transition: 'background-color 0.3s', // Transition for hover effect
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Login
        </Button>
      </form>
    </Card>
  );
};

export default Login;





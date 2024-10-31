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
    <Card bgColor="#e1f5fe" color="#333">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button type="submit">Login</Button>
      </form>
    </Card>
  );
};

export default Login;


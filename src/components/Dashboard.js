import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Dashboard;

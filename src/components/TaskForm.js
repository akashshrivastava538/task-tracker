import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('Pending');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const task = {
      id: Date.now(),
      title,
      priority,
      status,
    };
    dispatch(addTask(task));
    setTitle('');
    setPriority('Low');
    setStatus('Pending');
  };

  return (
    <div>
      <h3>Create Task</h3>
      <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default TaskForm;

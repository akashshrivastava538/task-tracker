import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, description, priority, dueDate, notes }));
    setTitle('');
    setDescription('');
    setPriority('Low');
    setDueDate('');
    setNotes('');
  };

  return (
    <div className="form-container">
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="label">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="input-container">
          <label className="label">Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="input-container">
          <label className="label">Priority:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="select"
            required
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="input-container">
          <label className="label">Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div className="input-container">
          <label className="label">Notes:</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="input-field"
          />
        </div>
        <button type="submit" className="button">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;







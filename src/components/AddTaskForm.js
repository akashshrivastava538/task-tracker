// src/components/AddTaskForm.js
import React, { useState, useEffect } from 'react';
import { Card, Button, Input, Select } from './styles';

const AddTaskForm = ({ onAddTask, editingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
      setDueDate(editingTask.dueDate);
      setNotes(editingTask.notes);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ title, description, priority, dueDate, notes });
    setTitle('');
    setDescription('');
    setPriority('Low');
    setDueDate('');
    setNotes('');
  };

  return (
    <Card>
      <h3>{editingTask ? 'Edit Task' : 'Add Task'}</h3>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <Input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Select>
        <Input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
        <Input type="text" placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
        <Button type="submit">{editingTask ? 'Update Task' : 'Add Task'}</Button>
      </form>
    </Card>
  );
};

export default AddTaskForm;


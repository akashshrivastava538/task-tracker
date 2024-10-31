// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { AppContainer } from './components/styles';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === editingTask.id ? { ...task, id: editingTask.id } : t)));
      setEditingTask(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }]);
    }
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Router>
      <AppContainer>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <AddTaskForm onAddTask={addTask} editingTask={editingTask} />
                <TaskList tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;






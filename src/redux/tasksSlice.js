// src/redux/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadTasksFromLocalStorage = () => {
  try {
    const serializedTasks = localStorage.getItem('tasks');
    return serializedTasks ? JSON.parse(serializedTasks) : [];
  } catch (e) {
    console.warn('Failed to load tasks from localStorage', e);
    return [];
  }
};

const saveTasksToLocalStorage = (tasks) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem('tasks', serializedTasks);
  } catch (e) {
    console.warn('Failed to save tasks to localStorage', e);
  }
};

const initialState = {
  tasks: loadTasksFromLocalStorage(),
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = { id: Date.now(), createdAt: Date.now(), ...action.payload };
      state.tasks.push(newTask);
      saveTasksToLocalStorage(state.tasks);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    editTask: (state, action) => {
      const { id, changes } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...changes };
        saveTasksToLocalStorage(state.tasks);
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;





















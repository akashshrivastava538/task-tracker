// src/components/TaskManager.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/tasksSlice';

const TaskManager = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [sortOrder, setSortOrder] = useState('lowToHigh');
  const [editingTask, setEditingTask] = useState(null);
  const [updatedTask, setUpdatedTask] = useState({});

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (id) => {
    dispatch(editTask({ id, changes: updatedTask }));
    setEditingTask(null);
    setUpdatedTask({});
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortOrder === 'lowToHigh') {
      return a.priority.localeCompare(b.priority);
    } else {
      return b.priority.localeCompare(a.priority);
    }
  });

  return (
    <div className="task-manager">
      <h2 className="task-manager-heading">Task Manager</h2>
      <label>Sort by Priority: </label>
      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="select">
        <option value="lowToHigh">High to Low</option>
        <option value="highToLow">Low to High</option>
      </select>
      <table className="task-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Notes</th>
            <th>Created At</th> {/* New column for time tracker */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedTasks.map((task) => (
            <tr key={task.id}>
              <td>{editingTask === task.id ? <input type="text" name="title" defaultValue={task.title} onChange={handleEditChange} /> : task.title}</td>
              <td>{editingTask === task.id ? <input type="text" name="description" defaultValue={task.description} onChange={handleEditChange} /> : task.description}</td>
              <td>{editingTask === task.id ? <select name="priority" defaultValue={task.priority} onChange={handleEditChange} className="select"><option value="Low">Low</option><option value="Medium">Medium</option><option value="High">High</option></select> : task.priority}</td>
              <td>{editingTask === task.id ? <input type="date" name="dueDate" defaultValue={task.dueDate} onChange={handleEditChange} /> : task.dueDate}</td>
              <td>{editingTask === task.id ? <textarea name="notes" defaultValue={task.notes} onChange={handleEditChange} /> : task.notes}</td>
              <td>{new Date(task.createdAt).toLocaleString()}</td> {/* Display creation time */}
              <td>
                {editingTask === task.id ? (
                  <>
                    <button className="button" onClick={() => handleEditSubmit(task.id)}>Save</button>
                    <button className="button" onClick={() => setEditingTask(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="button" onClick={() => setEditingTask(task.id)}>Edit</button>
                    <button className="button" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskManager;















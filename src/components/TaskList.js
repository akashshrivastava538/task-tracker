// src/components/TaskList.js
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { TaskContainer, TaskTable, TableHeader, SortingContainer, SortingSelect } from './styles';

const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
  const [sortCriteria, setSortCriteria] = useState('priority');
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortCriteria === 'priority') {
      const priorityOrder = { High: 3, Medium: 2, Low: 1 };
      return sortOrder === 'asc' ? priorityOrder[a.priority] - priorityOrder[b.priority] : priorityOrder[b.priority] - priorityOrder[a.priority];
    } else if (sortCriteria === 'dueDate') {
      return sortOrder === 'asc' ? new Date(a.dueDate) - new Date(b.dueDate) : new Date(b.dueDate) - new Date(a.dueDate);
    }
    return 0;
  });

  return (
    <TaskContainer>
      <SortingContainer>
        <label>Sort By:</label>
        <SortingSelect value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
        </SortingSelect>
        <SortingSelect value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </SortingSelect>
      </SortingContainer>
      <TaskTable>
        <thead>
          <tr>
            <TableHeader>Title</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Due Date</TableHeader>
            <TableHeader>Priority</TableHeader>
            <TableHeader>Notes</TableHeader>
            <TableHeader>Actions</TableHeader>
            <TableHeader>Time Tracker</TableHeader>
          </tr>
        </thead>
        <tbody>
          {sortedTasks.map((task) => (
            <TaskItem key={task.id} task={task} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
          ))}
        </tbody>
      </TaskTable>
    </TaskContainer>
  );
};

export default TaskList;





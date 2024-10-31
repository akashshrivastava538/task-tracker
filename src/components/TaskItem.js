// src/components/TaskItem.js
import React, { useEffect, useState } from 'react';
import { TableRow, TableCell, Button, Timer } from './styles';

const TaskItem = ({ task, onEditTask, onDeleteTask }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TableRow priority={task.priority}>
      <TableCell>{task.title}</TableCell>
      <TableCell>{task.description}</TableCell>
      <TableCell>{task.dueDate}</TableCell>
      <TableCell>{task.priority}</TableCell>
      <TableCell>{task.notes}</TableCell>
      <TableCell>
        <Button onClick={() => onEditTask(task)}>Edit</Button>
        <Button onClick={() => onDeleteTask(task.id)}>Delete</Button>
      </TableCell>
      <TableCell>
        <Timer>Time Spent: {Math.floor(seconds / 60)}m {seconds % 60}s</Timer>
      </TableCell>
    </TableRow>
  );
};

export default TaskItem;



// src/components/TaskItem.js
import React from 'react';
import TimeTracker from './TimeTracker';

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
        <TableData>{task.title}</TableData> {/* Change TableCell to TableData */}
        <TableData>{task.description}</TableData> {/* Change TableCell to TableData */}
        <TableData>{task.dueDate}</TableData> {/* Change TableCell to TableData */}
        <TableData>{task.priority}</TableData> {/* Change TableCell to TableData */}
        <TableData>{task.notes}</TableData> {/* Change TableCell to TableData */}
        <TableData>
          <Button onClick={() => onEditTask(task)}>Edit</Button>
          <Button onClick={() => onDeleteTask(task.id)}>Delete</Button>
        </TableData> {/* Change TableCell to TableData */}
        <TableData>
          <Timer>Time Spent: {Math.floor(seconds / 60)}m {seconds % 60}s</Timer>
        </TableData> {/* Change TableCell to TableData */}
      </TableRow>
    );
  };
  
  export default TaskItem;














import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '@/dispatchers/task'; // Import deleteTask dispatcher
import { Task ,SFC} from '@/types'; // Import Task type

interface TaskManagementProps {
  task: Task;
}

const TaskManagementComponent: SFC<TaskManagementProps> = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>Date: {task.date}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskManagementComponent;
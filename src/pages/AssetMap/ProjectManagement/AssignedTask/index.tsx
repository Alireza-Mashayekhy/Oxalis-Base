import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAssignedTasks, updateTaskStatus } from '@/dispatchers/task';
import { RootState, TaskStatus ,SFC} from '@/types';
import {getSelf} from '@/selectors/state';
const AssignedTasks: SFC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getSelf).id;
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    if (currentUser !== null) {
      dispatch(fetchAssignedTasks(currentUser));
    }
  }, [dispatch, currentUser]);

  const handleStatusChange = (taskId: number, status: TaskStatus) => {
    if (currentUser !== null) {
      dispatch(updateTaskStatus(taskId, currentUser, status));
    }
  };

  return (
    <div>
      <h2>Assigned Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks assigned.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.date.toString()}</p>
              <button onClick={() => handleStatusChange(task.id, TaskStatus.ACCEPTED)}>Accept</button>
              <button onClick={() => handleStatusChange(task.id, TaskStatus.DECLINED)}>Decline</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AssignedTasks;

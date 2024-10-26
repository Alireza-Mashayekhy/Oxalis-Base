import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store'; // Import RootState type
import { Task, SFC } from '@/types'; // Import Task type
const TaskListComponent: SFC = () => {
    const tasks = useSelector((state: RootState) => state.tasks); // Get tasks from store

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task: Task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskListComponent;
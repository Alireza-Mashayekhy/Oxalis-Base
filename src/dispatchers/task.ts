import { Dispatch } from 'redux';
import {
    createTask as apiCreateTask,
    deleteTask as apiDeleteTask,
    getAllTasks as apiGetAllTasks,
    updateTaskStatus as apiUpdateTaskStatus,
} from '@/api/task'; // Import API functions for tasks
import { CreateTaskPayload, Task, TaskStatus } from '@/types';
import {
    addTask,
    removeTask,
    setTasks,
    updateTaskStatus as updateTaskStatusAction,
} from '@/redux/store/task'; // Import store actions for tasks

export const createTask =
    (taskData: CreateTaskPayload) => async (dispatch: Dispatch) => {
        try {
            const newTask = await apiCreateTask(taskData);
            dispatch(addTask(newTask)); // Dispatch action to add the new task to the store
            return newTask;
        } catch (error) {
            console.error('Error creating task:', error);
            throw error;
        }
    };

export const updateTaskStatus =
    (taskId: number, userId: number, status: TaskStatus) =>
    async (dispatch: Dispatch) => {
        try {
            const updatedTask = await apiUpdateTaskStatus(
                taskId,
                userId,
                status
            );
            dispatch(updateTaskStatusAction(updatedTask)); // Dispatch action to update the task status in the store
            return updatedTask;
        } catch (error) {
            console.error('Error updating task status:', error);
            throw error;
        }
    };

export const deleteTask = (taskId: number) => async (dispatch: Dispatch) => {
    try {
        await apiDeleteTask(taskId);
        dispatch(removeTask(taskId)); // Dispatch action to remove the deleted task from the store
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};

export const getAllTasks = () => async (dispatch: Dispatch) => {
    try {
        const tasks = await apiGetAllTasks();
        dispatch(setTasks(tasks)); // Dispatch action to set all tasks in the store
        return tasks;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

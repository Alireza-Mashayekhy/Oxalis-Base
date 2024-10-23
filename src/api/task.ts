import axios from 'axios';
import { Task, TaskStatus, CreateTaskPayload } from '@/types';

const BASE_URL = `${import.meta.env.VITE_APP_API_URL}/api/tasks`;

export const createTask = async (taskData: CreateTaskPayload): Promise<Task> => {
  try {
    const response = await axios.post<Task>(BASE_URL, taskData);
    return response.data;
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTaskStatus = async (taskId: number, userId: number, status: TaskStatus): Promise<Task> => {
  try {
    const response = await axios.patch<Task>(`${BASE_URL}/${taskId}/status/${userId}`, { status });
    return response.data;
  } catch (error) {
    console.error('Error updating task status:', error);
    // toast.error("خطایی در بروز رسانی وظایف رخ داده است");

    throw error;
  }
};

export const deleteTask = async (taskId: number): Promise<void> => {
  try {
    await axios.delete<void>(`${BASE_URL}/${taskId}`);
  } catch (error) {
    console.error('Error deleting task:', error);
    // toast.error("خطایی در حدف وظایف رخ داده است");

    throw error;
  }
};

export const getAllTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get<Task[]>(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    // toast.error("خطایی در گرفتن وظایف رخ داده است");

    throw error;
  }
};
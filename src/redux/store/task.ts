import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Task, TaskState, TaskStatus } from '@/types';

const initialState: TaskState = {
  tasks: []
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTaskStatus: (
      state,
      action: PayloadAction<{ taskId: number; userId: number; status: TaskStatus }>
    ) => {
      const { taskId, userId, status } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.assignedUserStatus[userId] = status;
      }
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    }
  }
});

export const { addTask, removeTask, updateTaskStatus, setTasks } = taskSlice.actions;
export default taskSlice.reducer;

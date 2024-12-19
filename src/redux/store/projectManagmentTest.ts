import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProjectState } from "@/types/projectManagment";

const initialState: ProjectState = {
  subject: "",
  title: "",
  projectDescription: "",
  projectDueDate: null,
  peopleTasks: [
    {
      id: null,
      name: "",
      comment: [],
      task: "",
      file: [],
      hasUploadFile: false,
      startDate: null,
      endDate: null,
      completeStatus: false,
      evaluation: null,
    },
  ],
};

const projectManagmentTestSlice = createSlice({
  name: "projectManagment",
  initialState,
  reducers: {
    setProjectState: (state, action: PayloadAction<ProjectState>) => {
      return action.payload;
    },
    toggleCompleteStatus: (
      state,
      action: PayloadAction<{ id: string | number; completeStatus: boolean }>
    ) => {
      const { id, completeStatus } = action.payload;

      const task = state.peopleTasks.find((task) => task.id === id);
      if (task) {
        task.completeStatus = completeStatus;
      }
    },
    addComment: (
      state,
      action: PayloadAction<{ id: string | number; comment: string }>
    ) => {
      const { id, comment } = action.payload;
      const person = state.peopleTasks.find((p) => p.id === id);
      if (person) {
        if (!person.comment) {
          person.comment = []; // Initialize the comment array if it doesn't exist
        }
        person.comment.push(comment); // Add the new comment
      }
    },
    addFiles: (
      state,
      action: PayloadAction<{ id: string | number; files: string | string[] }>
    ) => {
      const { id, files } = action.payload;
      const person = state.peopleTasks.find((p) => p.id === id);
      if (person) {
        if (!person.file) {
          person.file = []; // Initialize the file array if it doesn't exist
        }
        // Check if 'files' is an array and concatenate, otherwise push the single file
        person.file = Array.isArray(files)
          ? person.file.concat(files)
          : person.file.concat([files]);
      }
    },
    deleteFile: (
      state,
      action: PayloadAction<{ id: string | number; fileName: string }>
    ) => {
      const { id, fileName } = action.payload;
      const person = state.peopleTasks.find((p) => p.id === id);
      if (person && person.file) {
        person.file = person.file.filter((file) => file !== fileName);
      }
    },
  },
});

export const {
  setProjectState,
  toggleCompleteStatus,
  addComment,
  addFiles,
  deleteFile,
} = projectManagmentTestSlice.actions;
export default projectManagmentTestSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import { Data } from "@/types";

interface DataState {
  data: Data[];
  filters: string[];
}

const initialState: DataState = {
  data: [],
  filters: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    setFilters: (state, action) => {
      return {
        ...state,
        filters: action.payload,
      };
    },
  },
});

export const { setData, setFilters } = dataSlice.actions;
export default dataSlice.reducer;

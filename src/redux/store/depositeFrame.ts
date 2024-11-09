import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Deposite_Frame } from "@/types";

interface DepositeState {
  data: Deposite_Frame[];
  filters: string[];
}

const initialState: DepositeState = {
  data: [],
  filters: [],
};

const depositeFrameSlice = createSlice({
  name: "depositeFrame",
  initialState,
  reducers: {
    setDepositeFrame: (state, action) => {
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

export const { setDepositeFrame, setFilters } = depositeFrameSlice.actions;
export default depositeFrameSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShareFrame } from "@/types";

interface ShareState {
  data: ShareFrame[];
  filters: string[];
}

const initialState: ShareState = {
  data: [],
  filters: [],
};

const shareFrameSlice = createSlice({
  name: "shareFrame",
  initialState,
  reducers: {
    setShareFrame: (state, action: PayloadAction<ShareFrame[]>) => {
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

export const { setShareFrame, setFilters } = shareFrameSlice.actions;
export default shareFrameSlice.reducer;

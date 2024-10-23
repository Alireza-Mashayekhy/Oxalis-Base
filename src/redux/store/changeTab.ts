import { ChangeTabs } from "@/types/changeTabHome";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ChangeTabs = { activeTabIndex: 0 };

const changeTabSlice = createSlice({
  name: "changeTab",
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<number>) {
      state.activeTabIndex = action.payload;
    },
  },
});

export const { setActiveTab } = changeTabSlice.actions;
export default changeTabSlice.reducer;

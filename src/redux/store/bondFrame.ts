import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BondFrame } from '@/types';

const initialState: BondFrame[] = [];

const bondFrameSlice = createSlice({
  name: 'bondFrame',
  initialState,
  reducers: {
    setBondFrame: (state, action: PayloadAction<BondFrame[]>) => {
      return action.payload;
    },
  },
});

export const { setBondFrame } = bondFrameSlice.actions;
export default bondFrameSlice.reducer;
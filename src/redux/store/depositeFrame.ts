import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Deposite_Frame } from '@/types';

const initialState: Deposite_Frame[] = [];

const depositeFrameSlice = createSlice({
  name: 'depositeFrame',
  initialState,
  reducers: {
    setDepositeFrame: (state, action: PayloadAction<Deposite_Frame[]>) => {
      return action.payload;
    },
  },
});

export const { setDepositeFrame } = depositeFrameSlice.actions;
export default depositeFrameSlice.reducer;
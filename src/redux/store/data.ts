import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Data } from '@/types';

const initialState: Data[] = [];

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Data[]>) => {
      return action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SalesData } from '@/types/new_data';


const initialState: SalesData[] = [];

const salesDataSlice = createSlice({
  name: 'salesData',
  initialState,
  reducers: {
    setSalesData: (state, action: PayloadAction<SalesData[]>) => {
      return action.payload;
    },
  },
});

export const { setSalesData } = salesDataSlice.actions;
export default salesDataSlice.reducer;
import { createSlice , PayloadAction} from '@reduxjs/toolkit';

import {SalesData} from '@/types/new_data';

const initialState: SalesData[] = [];

const salesFilteredDataSlice = createSlice({
  name: 'salesFilterData',
  initialState,
  reducers: {
    setSalesFilteredData: (state, action:PayloadAction<SalesData[]>) => {
      return action.payload; 
    },
    clearSalesFilteredData: () => {
      return []; 
    }
  }
});
export const { setSalesFilteredData , clearSalesFilteredData} = salesFilteredDataSlice.actions;
export default salesFilteredDataSlice.reducer;

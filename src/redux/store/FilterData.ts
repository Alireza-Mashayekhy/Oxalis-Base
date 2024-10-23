import { createSlice , PayloadAction} from '@reduxjs/toolkit';
import {FinancialData} from '@/types/new_data';

const initialState: FinancialData[] = [];

const filteredDataSlice = createSlice({
  name: 'filteredData',
  initialState,
  reducers: {
    setFilteredData: (state, action:PayloadAction<FinancialData[]>) => {
      return action.payload; 
    },
    clearFilteredData: () => {
      return []; 
    }
  }
});
export const { setFilteredData , clearFilteredData} = filteredDataSlice.actions;
export default filteredDataSlice.reducer;

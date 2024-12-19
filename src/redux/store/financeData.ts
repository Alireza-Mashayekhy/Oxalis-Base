import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FinancialData } from '@/types/new_data';


const initialState: FinancialData[] = [];

const financeDataSlice = createSlice({
  name: 'financeData',
  initialState,
  reducers: {
    setFinanceData: (state, action: PayloadAction<FinancialData[]>) => {
      return action.payload;
    },
  },
});

export const { setFinanceData } = financeDataSlice.actions;
export default financeDataSlice.reducer;
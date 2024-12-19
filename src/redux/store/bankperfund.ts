import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BankPerFund } from '@/types';

const initialState: BankPerFund[] = [];

const bankperfundSlice = createSlice({
  name: 'bankperfund',
  initialState,
  reducers: {
    setBankPerFund: (state, action: PayloadAction<BankPerFund[]>) => {
      return action.payload;
    },
  },
});

export const { setBankPerFund } = bankperfundSlice.actions;
export default bankperfundSlice.reducer;
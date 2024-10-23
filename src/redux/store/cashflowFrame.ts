import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CashFlowFrame } from '@/types';

const initialState: CashFlowFrame[] = [];

const cashflowFrameSlice = createSlice({
  name: 'cashflow',
  initialState,
  reducers: {
    setcashflowFrame: (state, action: PayloadAction<CashFlowFrame[]>) => {
      return action.payload;
    },
  },
});

export const { setcashflowFrame } = cashflowFrameSlice.actions;
export default cashflowFrameSlice.reducer;
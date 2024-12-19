import { createSlice } from '@reduxjs/toolkit';

import { CashFlowFrame } from '@/types';

interface CashState {
    data: CashFlowFrame[];
    filters: string[];
}

const initialState: CashState = {
    data: [],
    filters: [],
};

const cashflowFrameSlice = createSlice({
    name: 'cashflow',
    initialState,
    reducers: {
        setcashflowFrame: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
        setFilters: (state, action) => {
            return {
                ...state,
                filters: action.payload,
            };
        },
    },
});

export const { setcashflowFrame, setFilters } = cashflowFrameSlice.actions;
export default cashflowFrameSlice.reducer;

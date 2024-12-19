import { createSlice } from '@reduxjs/toolkit';

import { BondFrame } from '@/types';

interface BondState {
    data: BondFrame[];
    filters: string[];
}

const initialState: BondState = {
    data: [],
    filters: [],
};

const bondFrameSlice = createSlice({
    name: 'bondFrame',
    initialState,
    reducers: {
        setBondFrame: (state, action) => {
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

export const { setBondFrame, setFilters } = bondFrameSlice.actions;
export default bondFrameSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface JobTitleFilterState {
    filteredJobTitles: string[];
}

const initialState: JobTitleFilterState = {
    filteredJobTitles: []
};

const jobTitleFilterSlice = createSlice({
    name: 'jobTitleFilter',
    initialState,
    reducers: {
        toggleJobTitle(state, action: PayloadAction<string>) {
            const index = state.filteredJobTitles.indexOf(action.payload);
            if (index === -1) {
                state.filteredJobTitles.push(action.payload);
            } else {
                state.filteredJobTitles.splice(index, 1);
            }
        },
        resetFilters(state) {
            state.filteredJobTitles = [];
        }
    }
});

export const { toggleJobTitle, resetFilters } = jobTitleFilterSlice.actions;
export const selectFilteredJobTitles = (state: any) => state.jobTitleFilter.filteredJobTitles;
export default jobTitleFilterSlice.reducer;

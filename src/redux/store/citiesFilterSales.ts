import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CityFilterState {
  selectedCities: string[];
}

const initialState: CityFilterState = {
  selectedCities: [],
};

const citiesFilterSlice = createSlice({
  name: 'citiesFilter',
  initialState,
  reducers: {
    toggleCity(state, action: PayloadAction<string>) {
      const { payload: city } = action;
      if (state.selectedCities.includes(city)) {
        state.selectedCities = state.selectedCities.filter(c => c !== city);
      } else {
        state.selectedCities.push(city);
      }
    },
    clearCitiesFilter(state) {
      state.selectedCities = []; 
    },
  },
});

export const { toggleCity, clearCitiesFilter } = citiesFilterSlice.actions;
export default citiesFilterSlice.reducer;

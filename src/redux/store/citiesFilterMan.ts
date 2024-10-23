import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CityFilterState {
  selectedCities: string[];
}

const initialState: CityFilterState = {
  selectedCities: [],
};

const citiesFilterManSlice = createSlice({
  name: 'citiesFilterMan',
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

export const { toggleCity , clearCitiesFilter} = citiesFilterManSlice.actions;
export default citiesFilterManSlice.reducer;

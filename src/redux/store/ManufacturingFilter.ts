import { createSlice , PayloadAction} from '@reduxjs/toolkit';
import {ManufacturingData} from '@/types/new_data';

const initialState: ManufacturingData[] = [];

const manufacturingFilterData = createSlice({
  name: 'manufacturingFilterData',
  initialState,
  reducers: {
    setmanufacturingFilterData: (state, action:PayloadAction<ManufacturingData[]>) => {
      return action.payload; 
    },
    clearmanufacturingFilterData: () => {
      return []; 
    }
  }
});
export const { setmanufacturingFilterData , clearmanufacturingFilterData} = manufacturingFilterData.actions;
export default manufacturingFilterData.reducer;

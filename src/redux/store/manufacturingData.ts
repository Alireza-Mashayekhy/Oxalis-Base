import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ManufacturingData } from '@/types/new_data';


const initialState: ManufacturingData[] = [];

const manufacturingDataSlice = createSlice({
  name: 'manufacturingDataData',
  initialState,
  reducers: {
    setManData: (state, action: PayloadAction<ManufacturingData[]>) => {
      return action.payload;
    },
  },
});

export const { setManData } = manufacturingDataSlice.actions;
export default manufacturingDataSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HRData } from '@/types/new_data';


const initialState: HRData[] = [];

const hrSlice = createSlice({
  name: 'hrData',
  initialState,
  reducers: {
    setHrData: (state, action: PayloadAction<HRData[]>) => {
      return action.payload;
    },
  },
});

export const { setHrData } = hrSlice.actions;
export default hrSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ShareFrame } from '@/types';

const initialState: ShareFrame[] = [];

const shareFrameSlice = createSlice({
  name: 'shareFrame',
  initialState,
  reducers: {
    setShareFrame: (state, action: PayloadAction<ShareFrame[]>) => {
      return action.payload;
    },
  },
});

export const { setShareFrame } = shareFrameSlice.actions;
export default shareFrameSlice.reducer;
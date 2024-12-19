import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Event } from '@/types';

const initialState: Event[] = [];

const events = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEvent: (state, { payload }: PayloadAction<Event>) => {
      state.push(payload);
    },
    setEvents: (state, { payload }: PayloadAction<Event[]>) => {
      return payload;
    },
  },
});

export const { addEvent, setEvents } = events.actions;
export default events.reducer;
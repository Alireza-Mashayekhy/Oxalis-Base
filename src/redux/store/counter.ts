
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Counter } from '@/types';

interface CountersState {
  countersList: Counter[];
  [key: string]: Counter | Counter[];
}

const initialState: CountersState = {
  countersList: []
};

const counters = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, { payload }: PayloadAction<string>) => {
      const id = payload;
      const counter = state.countersList.find(counter => counter.id === id);
      if (counter) {
        counter.value += 1;
      }
    },
    decrement: (state, { payload }: PayloadAction<string>) => {
      const id = payload;
      const counter = state.countersList.find(counter => counter.id === id);
      if (counter) {
        counter.value -= 1;
      }
    },
    addCounter: (state, { payload }: PayloadAction<Counter>) => {
      state.countersList.push(payload);
      state[payload.id] = payload;
    },
    setCounters: (state, { payload }: PayloadAction<Counter[]>) => {
      state.countersList = payload;
      payload.forEach(counter => {
        state[counter.id] = counter;
      });
    },
    updateCounter: (state, { payload }: PayloadAction<Counter>) => {
      const index = state.countersList.findIndex(counter => counter.id === payload.id);
      if (index !== -1) {
        state.countersList[index] = payload;
        state[payload.id] = payload;
      }
    },
    deleteCounter: (state, { payload }: PayloadAction<string>) => {
      state.countersList = state.countersList.filter(counter => counter.id !== payload);
      delete state[payload];
    },
  },
});

export const { increment, decrement, addCounter, setCounters, updateCounter, deleteCounter } = counters.actions;
export default counters.reducer;

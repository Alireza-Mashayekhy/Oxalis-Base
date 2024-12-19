import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BondData } from "@/types";

interface BondDataState {
  data: BondData[];
  loading: boolean;
  error: string | null;
}

const initialState: BondDataState = {
  data: [],
  loading: false,
  error: null,
};

const bondsDataSlice = createSlice({
  name: "bondData",
  initialState,
  reducers: {
    setBondsData: (state, action: PayloadAction<BondData[]>) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
      // state.data = action.payload;
      // state.loading = false;
      // state.error = null;
    },
    updateBondData: (state, action: PayloadAction<BondData[]>) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
      // state.data = action.payload;
      // state.loading = false;
      // state.error = null;
    },
    uploadBondRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    uploadBondSuccess: (state) => {
      state.loading = false;
    },
    uploadBondFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setBondsData,
  updateBondData,
  uploadBondRequest,
  uploadBondSuccess,
  uploadBondFailure,
} = bondsDataSlice.actions;
export default bondsDataSlice.reducer;

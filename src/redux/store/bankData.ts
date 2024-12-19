import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BankData } from "@/types";

interface BankDataState {
  data: BankData[];
  loading: boolean;
  error: string | null;
}

const initialState: BankDataState = {
  data: [],
  loading: false,
  error: null,
};

const bankDataSlice = createSlice({
  name: "bankData",
  initialState,
  reducers: {
    setBankData: (state, action: PayloadAction<BankData[]>) => {
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
    updateBankData: (state, action: PayloadAction<BankData[]>) => {
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
    uploadBankRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    uploadBankSuccess: (state) => {
      state.loading = false;
    },
    uploadBankFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setBankData,
  updateBankData,
  uploadBankRequest,
  uploadBankSuccess,
  uploadBankFailure,
} = bankDataSlice.actions;
export default bankDataSlice.reducer;

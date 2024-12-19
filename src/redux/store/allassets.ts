import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AllAssets } from "@/types";
import { getSelectedFundNameData } from "@/utils/headersFunctions";

const initialState: {
  loading: boolean;
  allAssets: AllAssets[];
  selectedAsset: AllAssets[] | null;
} = {
  loading: false,
  allAssets: [],
  selectedAsset: null,
};
// const initialState: AllAssets[] = [];

const allassetsSlice = createSlice({
  name: "allassets",
  initialState,
  reducers: {
    setAllAssetesLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setAllAssets: (state, action: PayloadAction<AllAssets[]>) => {
      state.allAssets = action.payload;
      const selectedFund = getSelectedFundNameData(action.payload, "امین");
      state.selectedAsset = selectedFund;
    },
    setSelectedAssets: (state, action: PayloadAction<AllAssets[]>) => {
      // return action.payload;
      state.selectedAsset = action.payload;
    },
  },
});

export const { setAllAssets, setSelectedAssets, setAllAssetesLoading } =
  allassetsSlice.actions;
export default allassetsSlice.reducer;

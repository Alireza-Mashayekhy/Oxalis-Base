import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductFilterState {
  selectedProducts: string[];
}

const initialState: ProductFilterState = {
  selectedProducts: [],
};

const productsFilterSlice = createSlice({
  name: 'productsFilter',
  initialState,
  reducers: {
    toggleproduct(state, action: PayloadAction<string>) {
      const { payload: product } = action;
      if (state.selectedProducts.includes(product)) {
        state.selectedProducts = state.selectedProducts.filter(c => c !== product);
      } else {
        state.selectedProducts.push(product);
      }
    },
    resetFilters(state) {
      state.selectedProducts = [];
    },
  },
});

export const { toggleproduct ,resetFilters } = productsFilterSlice.actions;
export default productsFilterSlice.reducer;

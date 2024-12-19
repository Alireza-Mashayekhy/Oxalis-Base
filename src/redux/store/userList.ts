import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Import your API function
import { UserListState, UserReadSerializer } from '@/types';

const initialState: UserListState = {
  users: [],
  loading: false,
  error: null
};

const userList = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    getAllUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getAllUsersSuccess: (state, action: PayloadAction<UserReadSerializer[]>) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAllUsersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { getAllUsersRequest, getAllUsersSuccess, getAllUsersFailure } = userList.actions;

export default userList.reducer;

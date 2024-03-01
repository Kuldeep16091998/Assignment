import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { users: [], token: null },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    clearUsers: (state) => {
      state.users = [];
    },
  },
});

export const { setUsers, clearUsers } = userSlice.actions;

export default userSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import User from '../types/UserType';

interface UserState {
  userList: User[];
}

const initialState: UserState = {
  userList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserList: (state, action: PayloadAction<User[]>) => {
      state.userList = action.payload;
    },
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

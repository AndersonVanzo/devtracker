import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface UsersSlice {
  selectedUser?: UserData;
  lastSearched: Array<UserData>;
}

const initialState: UsersSlice = {
  selectedUser: undefined,
  lastSearched: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSelectedUser: (state: Draft<UsersSlice>, action: PayloadAction<UserData>): void => {
      state.selectedUser = action.payload;
    },
    removeSelectedUser: (state: Draft<UsersSlice>): void => {
      state.selectedUser = undefined;
    },
    addLastSearched: (state: Draft<UsersSlice>, action: PayloadAction<UserData>): void => {
      const newLastSearched = state.lastSearched;
      if (newLastSearched.length === 5) {
        newLastSearched.shift();
      }
      newLastSearched.push(action.payload);
      state.lastSearched = newLastSearched;
    },
    clearLastSearched: (state: Draft<UsersSlice>): void => {
      state.lastSearched = [];
    },
  },
});

export const { setSelectedUser, removeSelectedUser, addLastSearched, clearLastSearched } = usersSlice.actions;
export const getSelectedUser = (state: RootState) => state.selectedUser;
export const getLastSearched = (state: RootState) => state.lastSearched;
export default usersSlice.reducer;

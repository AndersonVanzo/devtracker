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
      const newLastSearched = [...state.lastSearched];
      const userIndex = state.lastSearched.findIndex(item => item.id === action.payload.id);
      if (userIndex !== -1) {
        newLastSearched[userIndex] = action.payload;
      } else {
        if (newLastSearched.length === 5) {
          newLastSearched.pop();
        }
        newLastSearched.unshift(action.payload);
      }
      state.lastSearched = newLastSearched;
    },
    updatedSearchedUser: (state: Draft<UsersSlice>, action: PayloadAction<UserData>): void => {
      const newLastSearched = [...state.lastSearched];
      const userIndex = newLastSearched.findIndex(item => item.id === action.payload.id);
      if (userIndex === -1) {
        return;
      }
      newLastSearched[userIndex] = action.payload;
      state.lastSearched = newLastSearched;
    },
    clearLastSearched: (state: Draft<UsersSlice>): void => {
      state.lastSearched = [];
    },
  },
});

export const { setSelectedUser, removeSelectedUser, addLastSearched, updatedSearchedUser, clearLastSearched } = usersSlice.actions;
export const getSelectedUser = (state: RootState) => state.selectedUser;
export const getLastSearched = (state: RootState) => state.lastSearched;
export default usersSlice.reducer;

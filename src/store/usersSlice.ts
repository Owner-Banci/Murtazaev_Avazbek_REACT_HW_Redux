import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
}

interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: [
    { id: 1, name: 'Murtazaev Avazbek' },
    { id: 2, name: 'John Doe' },
  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    updateUserName: (state, action: PayloadAction<{ id: number; name: string }>) => {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (user) {
        user.name = action.payload.name;
      }
    },
  },
});

export const { updateUserName } = usersSlice.actions;
export default usersSlice.reducer;

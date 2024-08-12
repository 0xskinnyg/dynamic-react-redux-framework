import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  username: string;
  password: string;
};

export interface AppState {
  currentApp: string | null;
  user: User
}

const initialState: AppState = {
  currentApp: null,
  user: {
    username: '',
    password: ''
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loadApp: (state, action: PayloadAction<string>) => {
      state.currentApp = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { loadApp, setUser } = appSlice.actions;
export default appSlice.reducer;

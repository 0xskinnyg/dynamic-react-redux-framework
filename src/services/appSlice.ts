import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  currentApp: string | null;
}

const initialState: AppState = {
  currentApp: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loadApp: (state, action: PayloadAction<string>) => {
      state.currentApp = action.payload;
    },
  },
});

export const { loadApp } = appSlice.actions;
export default appSlice.reducer;

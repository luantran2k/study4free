import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface AuthState {
  name: string | null;
  token: string | null;
  unserInformation: any;
}

const initialState: AuthState = {
  name: null,
  token: null,
  unserInformation: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ name: string; token: string; userInfo: any }>
    ) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          name: action.payload.name,
          token: action.payload.token,
        })
      );
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.unserInformation = action.payload.userInfo;
      console.log(state.unserInformation);
    },
    logOut: (state) => {
      localStorage.removeItem('user');
      state.name = null;
      state.token = null;
      state.unserInformation = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;

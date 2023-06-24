import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

export interface AuthState {
  name: string | null;
  token: string | null;
  userInformation: any;
}

const initialState: AuthState = {
  name: null,
  token: null,
  userInformation: null,
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
          userInfo: action.payload.userInfo
        })
      );
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.userInformation = action.payload.userInfo;
      console.log(state.userInformation);
    },
    logOut: (state) => {
      localStorage.removeItem('user');
      state.name = null;
      state.token = null;
      state.userInformation = null;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;

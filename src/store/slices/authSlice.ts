import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import IUser from '../../interfaces/User';

export interface AuthState {
  name: string;
  token: string;
  userInformation: IUser;
}

const initialState: Partial<AuthState> = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ name: string; token: string; userInfo: IUser }>
    ) => {
      localStorage.setItem(
        'user',
        JSON.stringify({
          name: action.payload.name,
          token: action.payload.token,
          userInfo: action.payload.userInfo,
        })
      );
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.userInformation = action.payload.userInfo;
    },
    logOut: () => {
      localStorage.removeItem('user');
      return {};
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const { setUser, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const userInformation = (state: RootState) => state.auth.userInformation;

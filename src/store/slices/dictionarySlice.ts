import { createSlice } from '@reduxjs/toolkit';

// const initialState: examSliceState = {};

export const dictonarySlice = createSlice({
  name: 'exam',
  initialState: {
    keyWord: '',
  },
  reducers: {
    setInputKeyWord: (state, action) => {
      console.log('s');
    },
    renderWord: (state, action) => {
      console.log('sss');
    },
  },
});

export const { setInputKeyWord } = dictonarySlice.actions;

export const dictionaryReducer = dictonarySlice.reducer;

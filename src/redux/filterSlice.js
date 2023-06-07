import { createSlice } from '@reduxjs/toolkit';

const filterInitState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitState,
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

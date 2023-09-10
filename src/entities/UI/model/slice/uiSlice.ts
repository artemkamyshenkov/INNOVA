import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ScrollPosition, UISchema } from '../types';

const initialState: UISchema = {
  scroll: {},
};

export const uiSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<ScrollPosition>) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;

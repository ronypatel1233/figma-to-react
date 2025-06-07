import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './slices/settingsSlice';
import blogsReducer from './slices/blogsSlice';

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    blogs: blogsReducer,
  },
}); 
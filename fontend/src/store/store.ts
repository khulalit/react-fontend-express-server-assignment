import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;

// Define RootState type
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

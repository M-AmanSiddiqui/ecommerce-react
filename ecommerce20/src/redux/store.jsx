import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Import the reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the reducer here
  },
});

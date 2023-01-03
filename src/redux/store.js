import { configureStore } from '@reduxjs/toolkit'
import wall_reducer from "./wall/wall_slice";

export const store = configureStore({
  reducer: {
    wall: wall_reducer
  },
})
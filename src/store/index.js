import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./Slices/movieSlice";
import { songsSlice } from "./Slices/songSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    songs: songsSlice.reducer
  }
});

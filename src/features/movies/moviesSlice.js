import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFilter } from "../../utils/arrayHelper";
import axios from "axios";

const apiKey = import.meta.env.VITE_OMDB_API_KEY;
// console.log(apiKey);

export const fetchMovies = createAsyncThunk(
    "movies/fetchMovies",
    async ({ search, page }) => {
        const response = await axios(`/api/?i=tt3896198&apikey=${apiKey}&s=${search}&page=${page}`, {
            headers: {
                Accept: 'application/json',
            },
        });

        // console.log("movies response", response.data);

        return response.data;
    }
)

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        movies: [],
        favorites: [],
        status: "idle",
        error: null,
    },
    reducers: {
        addToFavorites: (state, action) => {
            for (let i = 0; i < state.favorites.length; i++) {
                if (state.favorites[i].imdbID === action.payload.imdbID) {
                    return;
                }
            }

            state.favorites[state.favorites.length] = action.payload;
        },
        removeFromFavorites: (state, action) => {
            state.favorites = customFilter(state.favorites, (fav) => fav.imdbID !== action.payload.imdbID);
        },
    },
    extraReducers: (builder) => {
        builder.
            addCase("movies/fetchMovies/pending", (state) => {
                state.status = "loading";
            })
            .addCase("movies/fetchMovies/fulfilled", (state, action) => {
                state.status = "succeeded";
                state.movies = action.payload.Search || [];
                state.totalResults = parseInt(action.payload.totalResults) || 0;
            })
            .addCase("movies/fetchMovies/rejected", (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
})

export const { addToFavorites, removeFromFavorites } = moviesSlice.actions;
export default moviesSlice.reducer;
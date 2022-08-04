import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {genresReducer, movieReducer, reviewReducer} from "../slices";

const comb = combineReducers({
    movies:movieReducer,
    genres:genresReducer,
    review:reviewReducer
});

const setupStore = () => configureStore({
    reducer:comb
});

export {
    setupStore
}
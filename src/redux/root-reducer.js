import { combineReducers } from "redux";
import { moviesReducer } from "./movies/movies.reducers";

export default combineReducers({ moviesReducer });

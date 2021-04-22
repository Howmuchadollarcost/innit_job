import { combineReducers } from "redux";
import {moviesReducer} from './moviesReducer';
import {watchListReducer} from './watchListReducer';

export default combineReducers({
	movies: moviesReducer,
	favMovies:watchListReducer
})
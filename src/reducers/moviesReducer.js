import {
	START_FETCHING_MOVIES, 
	END_FETCHING_MOVIES,
	START_FETCHING_MOVIE_BY_ID,
	END_FETCHING_MOVIE_BY_ID
} from '../actions/actionTypes';

const initialState = {
	movies:null,
	loading: false,
	singleMovie: null,
	page:1,
}

export const moviesReducer = (state=initialState, action) => {
	switch(action.type){
		case START_FETCHING_MOVIES:
			return{
				...state,
				loading: true
			}
		case END_FETCHING_MOVIES:
			return{
				...state,
				loading: false,
				movies: action.payload
			}
		case START_FETCHING_MOVIE_BY_ID: 
			return{
				...state,
				loading: true,
			}
		case END_FETCHING_MOVIE_BY_ID: 
			return{
				...state,
				loading: false,
				singleMovie: action.payload
			}
		
		default:
			return state;
	}
}
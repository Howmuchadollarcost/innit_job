import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../actions/actionTypes';

const initialState = {
	watchlist: [],
}

export const watchListReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_WATCHLIST:
			if (state.watchlist.filter(el => el.id === action.payload.imdbID).length === 0) {
				return {
					...state,
					watchlist: [...state.watchlist, { movie: action.payload, favorite: true, id: action.payload.imdbID }]
				}
			}
		case REMOVE_FROM_WATCHLIST:
			return {
				...state,
				watchlist: state.watchlist.filter((watchListMovie) => watchListMovie.id !== action.payload.imdbID)
			}
		default:
			return state;
	}
}
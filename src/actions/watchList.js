import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST  } from './actionTypes'

export const watchList = (movie) => async dispatch => {
	dispatch(
		{type:ADD_TO_WATCHLIST, payload: movie})
}

export const removeFromWatchlist = (imdbID) => async dispatch => {
	dispatch({
		type: REMOVE_FROM_WATCHLIST,
		payload: imdbID
	})
}
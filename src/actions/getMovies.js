
import { START_FETCHING_MOVIES, END_FETCHING_MOVIES, START_FETCHING_MOVIE_BY_ID, END_FETCHING_MOVIE_BY_ID } from './actionTypes'

const API_KEY = process.env.REACT_APP_OMDB_API;

export const getMovies = (searchTerm) => async dispatch => {
	dispatch({ type: START_FETCHING_MOVIES });
	try {
		const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}&page=1`);
		const data = await response.json();
		dispatch({
			type: END_FETCHING_MOVIES,
			payload: data.Search
		})
	} catch (error) {
		console.log(error)
	};
}

export const getMovieById = (id) => async dispatch => {
	dispatch({type: START_FETCHING_MOVIE_BY_ID});
	try {
		const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=c3f46d34&plot=full`);
		const data = await response.json();

		dispatch({
			type: END_FETCHING_MOVIE_BY_ID,
			payload: data
		})

	} catch (error) {
		console.log(error)
	};

}
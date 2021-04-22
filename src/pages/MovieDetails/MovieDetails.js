import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { getMovieById } from '../../actions/getMovies';
import { Loading } from '../../components';


const Container = styled.div`	
	width: 100%;
	height: 140vh;
	background-color: #222;
	padding: 10px;
`

const GoBack = styled(Link)`
	padding: 10px 20px;
	background-color: rgba(185, 28, 28, 1);
	border:none;
	justify-content: center;
	color: #fff;
	border-radius: 10px;
	text-decoration: none;
	margin-top: 20px;
	cursor: pointer;
`


const MovieDetailsContainer = styled.div`
	padding: 10px;

`

const MovieContent = styled.div`
	max-width: 800px;
	margin-top: 20px;
	display:flex;
	justify-content: center;
	align-content: center;

	 @media (max-width: 700px) {
    flex-direction: column;
  }

`

const MovieImage = styled(motion.img)`
	width: 100%;
	object-fit: contain;
	border-radius: 40px;

	@media (max-width: 700px) {
    height: 500px;
		border-radius: 40px;
  }
`

const MovieInfoContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	margin-left: 16px;
	margin-right: 16px;
	background: #222;
	padding: 4px;
`


const MovieInformation = styled.div`
	padding: .5em 0;
`



const MovieTitle = styled.h1`
	font-size:30px;
	color: #fff;
	font-weight: bold;
	margin-bottom: 10px;
	letter-spacing: -1px;

`

const MovieActors = styled.h3`
	font-size:14px;
	color: #fff;
	font-weight: normal;
`

const MovieRuntime = styled.span`
	color:#fff;
	margin: 0px 2px 0 0;
	font-size: 14px;
	display: block;
	font-weight:300;
`
const MoviePlot = styled.div`
	color: #fff;
	font-size: 14px;
	font-weight: lighter;
	margin-top:8px;
`

const WatchListButton = styled.button`
	color: #fff;
	display: block;
	background: linear-gradient(
    20deg,
    hsl(262, 83.25581395348837%, 57.84313725490197%),
    hsl(0, 84.23645320197043%, 60.19607843137255%)
  );
	margin-top: 20px;
	padding: 8px 8px;
	border-radius:12px;
	outline:none;
	border: none;
cursor: pointer;
	width: 100px;

`

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function MovieDetailsComponent() {
	let { id } = useParams();

	const [movieDetails, setMovieDetails] = React.useState(null);
	const [loading, setLoading] = React.useState(false);
	const [favorite, setFavorite] = React.useState(false);

	const dispatch = useDispatch();
	const detailState = useSelector(state => state.movies);
	const watchlist = useSelector(state => state.favMovies.watchlist)

	React.useEffect(() => {
		setMovieDetails(detailState.singleMovie);
		setLoading(detailState.loading);
		if (movieDetails) {
			const storedMovie = watchlist.find(o => o.movie.imdbID === movieDetails.imdbID);
			setFavorite(storedMovie ? true : false)
		}
	}, [detailState]);

	React.useEffect(() => {
		dispatch(getMovieById(id));
	}, [dispatch]);



	if (loading) {
		return <Loading name="Loading" />
	}

	return (
		<Container>
			<MovieDetailsContainer>
				<GoBack to="/">
					Back
					</GoBack>


				<MovieContent>
					{
						movieDetails && movieDetails.Poster !== 'N/A' ?
							<MovieImage
								src={movieDetails.Poster} alt="poster"
								initial={{ opacity: 0, y: -100 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 0 }}
								whileHover={{ scale: 0.9 }}
								transition={transition}
							/>
							:
							<div style={{ borderRadius: 10, width: '333px', height: '500px', backgroundColor: 'gray' }} />
					}

					<MovieInfoContainer
						initial={{ opacity: 0, y: 20 }}
						animate={{
							opacity: 1,
							y: 0,
							transition: { delay: 1, ...transition },
						}}
					>
						<MovieInformation>


							{
								movieDetails && movieDetails.Genre.split(',').map((item, i) => {
									return <Genres genreTitle={item} key={i} />
								})
							}

						</MovieInformation>

						<MovieInformation>
							<MovieTitle>{movieDetails && movieDetails.Title}</MovieTitle>
							<MovieActors>{movieDetails && movieDetails.Actors}</MovieActors>
						</MovieInformation>


						<MovieInformation>
							<MovieRuntime>Runtime: {movieDetails && movieDetails.Runtime}</MovieRuntime>
							<MovieRuntime>Released: {movieDetails && movieDetails.Year}</MovieRuntime>
						</MovieInformation>


						<MovieInformation>
							<MoviePlot>
								{movieDetails && movieDetails.Plot}
							</MoviePlot>

							<WatchListButton>
								{!favorite ? 'Not in Watchlist' : 'In Watchlist'}
							</WatchListButton>

						</MovieInformation>

						<MovieInformation>

							<RatingContainer>
								<RatingValue>{movieDetails && movieDetails.imdbRating}</RatingValue>
								<RatingSource>imdb</RatingSource>
							</RatingContainer>

							{
								movieDetails && movieDetails.Ratings.map((rating, i) => {
									return <Ratings rating={rating} key={i} />
								})
							}

						</MovieInformation>
					</MovieInfoContainer>
				</MovieContent>
			</MovieDetailsContainer>

		</Container>
	)
}


const GenreContainer = styled.div`
	margin: 5px;
	display: inline-block;
	border-radius: 20px;
	background: linear-gradient(
    20deg,
    hsl(262.1229050279329, 83.25581395348837%, 57.84313725490197%),
    hsl(0, 84.23645320197043%, 60.19607843137255%)
  );

`

const GenreTitle = styled.h1`
	color: #fff;
	font-size: 12px;
	font-weight:normal;
	padding: 1px 10px;
`


const Genres = ({ genreTitle }) => {
	return (
		<GenreContainer>
			<GenreTitle>{genreTitle}</GenreTitle>
		</GenreContainer>
	)
}

const RatingContainer = styled.div`
	display: inline-block;
	margin: 10px;
`

const RatingValue = styled.h1`
	color: #fff;
	font-size: 32px;
`
const RatingSource = styled.p`
	color: #fff;
	font-weight:300;
	text-transform: uppercase;
	font-size: 12px;
	margin-top:4px;

`

const Ratings = ({ rating }) => {
	return (
		<RatingContainer>
			<RatingValue className="text-white text-4xl">{rating.Value}</RatingValue>
			<RatingSource>{rating.Source}</RatingSource>
		</RatingContainer>
	)
}


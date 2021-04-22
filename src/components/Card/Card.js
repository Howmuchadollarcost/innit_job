import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { watchList } from '../../actions/watchList';
import styled from 'styled-components';
import { getMovieById } from '../../actions/getMovies';


const CardContainer = styled(motion.div)`
	margin-bottom: 14px;
	background-color: white;
	overflow: hidden;
	padding: 8px;
	border-radius: 8px;
	position: relative;
	width: auto;
	margin-right: 10px;
`

const CardContent = styled.div`
	padding: 8px;
`

const CardTitle = styled.h1`
	font-size: 18px;
	color: #000;
	margin-top: 8px;
	font-weight: bold;
`

const CardYear = styled.p`
	font-size: 14px;
	font-weight:300;
	margin-bottom: 12px;
`

const SeeMoreButton = styled(Link)`
  padding-left: 16px ;
  padding-right: 16px;
	border-radius:4px;
	color: #fff;
	background-color: rgba(185, 28, 28,1);
	cursor: pointer;
	text-decoration: none;
	padding: 5px 20px;

`

const CardImage = styled.img`
	width: 350px;
	height: 500px;
	border-radius: 8px;
`

const FavoriteButton = styled(motion.button)`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	border-radius: 6px;
	color: #fff;
	font-weight: bold;
	font-size: 18px;
	top: 20px;
	right: 20px;
	padding-top: 8px;
  padding-bottom: 8px;
	padding-left: 16px;
  padding-right: 16px;
	background-color: #222;
	border:none;
	cursor: pointer;

	&:focus{
		  outline: 2px solid transparent;
  		outline-offset: 2px;
	}

`

const Card = ({ movie }) => {
	const dispatch = useDispatch()
	const [favorite, setFavorite] = React.useState(false);

	const watchlist = useSelector(state => state.favMovies.watchlist)

	React.useEffect(() => {
		const storedMovie = watchlist.find(o => o.movie.imdbID === movie.imdbID)
		setFavorite(storedMovie ? true : false)
	}, [watchlist, movie.imdbID]);

	const listItem = {
		hidden: { opacity: 0 },
		show: { opacity: 1 }
	};

	return (
		<CardContainer
			variants={listItem}
		>

			{
				movie && movie.Poster !== 'N/A' ?
					<CardImage
						src={movie.Poster}
						alt={'poster'}
					/> : <div style={{ borderRadius: 10, width: '333px', height: '500px', backgroundColor: 'gray' }} />}
			<FavoriteButton
				onClick={() => { dispatch(watchList(movie)); }}
				whileTap={{rotate: 360}}
			>
				{!favorite ? <span>&#10084;</span> : <span>&times;</span>}
			</FavoriteButton>

			<CardContent>
				<CardTitle>{movie.Title.length > 30 ? movie.Title.slice(0, 30) + "..." : movie.Title}</CardTitle>
				<CardYear>{movie.Year && movie.Year}</CardYear>
				<SeeMoreButton onClick={() => dispatch(getMovieById(movie.imdbID))} to={`/movie/${movie.imdbID}`}>More</SeeMoreButton>
			</CardContent>
		</CardContainer>

	)
}

export default Card;
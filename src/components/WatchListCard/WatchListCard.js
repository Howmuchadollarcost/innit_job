import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromWatchlist} from '../../actions/watchList';
import {motion} from 'framer-motion';
import styled from 'styled-components';


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

const CardImage = styled.img`
	width: 300px;
	height: 450px;
	border-radius: 8px;
`

const FavoriteButton = styled.button`
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


const WatchListCard = ({ movie }) => {
	const dispatch = useDispatch()
	return (
		<CardContainer>


			{
				movie.movie && movie.movie.Poster !== 'N/A' ?
					<CardImage
						src={movie.movie.Poster}
						alt={'poster'}
					/> : <div style={{ borderRadius: 10, width: '333px', height: '500px', backgroundColor: 'gray' }} />}
			<FavoriteButton
				onClick={() => dispatch(removeFromWatchlist(movie.movie))}
			>
			&times;
			</FavoriteButton>

			<CardContent>
				<CardTitle>{movie.movie.Title.length > 30 ? movie.movie.Title.slice(0, 30) + "..." : movie.movie.Title}</CardTitle>
				<CardYear>{movie.movie.Year && movie.movie.Year}</CardYear>
			</CardContent>
		</CardContainer>

	)
}

export default WatchListCard;
import React from 'react'
import { useSelector } from 'react-redux';
import {WatchListCard} from '../../components';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';


const Container = styled.div`
	height: 100%;
	background-color: #222;
	padding: 20px;
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

const MovieContent = styled.div`
	max-width: 800px;
	margin-top: 20px;
	display:flex;
	align-content: center;
	flex-wrap:wrap;

	 @media (max-width: 700px) {
    flex-direction: column;
  }

`

const MoviesContainer = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	background-color: #222;

	&:last-child{
		margin-right: auto;
	}
`

export default function WatchListComponents() {
	const [watchlist, setWatchList] = React.useState([]);
	
	const watchListState = useSelector(state => state.favMovies);

	React.useEffect(() => {
		setWatchList(watchListState.watchlist);
	},[watchListState]);



	return (
		<Container>
			<GoBack to="/">
					Back
				</GoBack>
			
			<MoviesContainer>
				<MovieContent>
						{watchlist.length === 0 ? <h2 style={{color: '#fff', padding: '4px'}}>No Favorites Movies</h2> : null }

					{
						watchlist && watchlist.map((movie,index) => {
							return 	<WatchListCard movie={movie} key={index}/>
					})
					}
				</MovieContent>
			</MoviesContainer>
		</Container>
	)
}

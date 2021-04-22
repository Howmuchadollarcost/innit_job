import React from 'react'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { Loading, NavBar, Card } from '../../components';
import styled from 'styled-components';


const Container = styled.div`
	height: 100%;
	background-color: #222;
`

const MoviesContainer = styled(motion.div)`
	display: flex;
	margin: 10px;
	flex-wrap: wrap;
	justify-content: center;
	background-color: #222;

	&:last-child{
		margin-right: auto;
	}
`


export default function Home() {
	const [movies, setMovies] = React.useState(null);
	const [loading, setLoading] = React.useState(false);

	const moviesState = useSelector(state => state.movies);

	React.useEffect(() => {
		setMovies(moviesState.movies);
		setLoading(moviesState.loading);
	}, [moviesState]);

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	return (
		<Container>
			<NavBar />
			{
				loading ? <Loading name="loading" /> :

					<MoviesContainer variants={container} initial="hidden" animate="show">
						{
							movies && movies.map((movie, index) => {
								return <Card movie={movie} key={index} />
							})
						}
					</MoviesContainer>
			}

		</Container>
	)
}

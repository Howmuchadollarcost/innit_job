import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home, WatchList, MovieDetails, WelcomeScreen} from './pages';

import styled from 'styled-components';


const Container = styled.div`
	top:0;
	left: 0;
	height: 100vh;
	width: 100%;

`

export default function MovieApp() {
	return (
		<Router>
			<Container>
				<WelcomeScreen />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/watchlist" component={WatchList} />
					<Route path="/movie/:id" exact={true} children={<MovieDetails />} />
				</Switch>
				
			</Container>
		</Router>
	)
}


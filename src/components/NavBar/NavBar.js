import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getMovies } from '../../actions/getMovies';

const NavBarContainer = styled.nav`
	display: flex;
	flex-direction: row;
	width: 100%;
	background-color: #000;
	justify-content: space-between;
`

const SubContainer = styled.div`
	padding: 10px;
	display: flex;

`

const Logo = styled(Link)`
	font-size: 30px;
	font-weight: bold;
	color: #fff;
	text-decoration:none;
	cursor: pointer;
`

const TextInput = styled.input`
  padding: 0.5em 1em;
  margin: 0.5em;
  color: ${props => props.inputColor || "white"};
  background: #262626;
  border: none;
  border-radius: 3px;
	width: 100%;

	&:focus{
		outline: none
	}
`

const SearchButton = styled.button`
 padding:4px;
 border: none;
 cursor: pointer;
 background:none;
 &:active{
	 outline: none;
 }
 &:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
 }
`

const WatchListButton = styled(Link)`
	color: #fff;
	font-size: 18px;
	background-color: rgba(239, 68, 68, 1);
	border-radius:6px;
	text-decoration:none;
	cursor: pointer;
	padding:4px;
	border: none;
	display:flex;
	align-items:center;
	justify-content: center;
`



export default function NavBar() {
	const dispatch = useDispatch()
	const [term, setTerm] = React.useState('');


	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getMovies(term));
		setTerm('');
	}


	return (
		<NavBarContainer>
			<SubContainer>
				<Logo to="/">
					MovieDB
				</Logo>
			</SubContainer>
			<SubContainer>
				<form onSubmit={handleSubmit}>
					<span style={{ position: 'absolute', display: 'flex', padding: '10px' }}>
						<SearchButton disabled={!term ? true : false} type="submit">
							<svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
						</SearchButton>
					</span>
					<TextInput type="text"
						value={term}
						placeholder="Search..."
						autoComplete="off"
						onChange={(e) => setTerm(e.target.value)}
					/>
				</form>
			</SubContainer>
			<SubContainer>
				<WatchListButton to="/watchlist">
					WatchList
				</WatchListButton>
			</SubContainer>
		</NavBarContainer>
	)
}

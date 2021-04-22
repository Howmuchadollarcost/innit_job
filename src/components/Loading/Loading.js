import styled, { keyframes } from 'styled-components'

const Wrapper = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	left:0;
	top:0;
`

const LoadingText = styled.div`
	color: ${props => props.white ? 'white' : '#222'};
	position: absolute;
	top: 50%;
	left:50%;
	width: 100px;
	height: 30px;
	text-align: center;
	font-size: 20px;
	font-weight: 300;
	transform: translate(-50%,-50%);
`

const loader = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`

const LoadingContent = styled.div`
		display: block;
		position: relative;
		top: 50%;
		left:50%;
		transform: translate(-50%,-50%);
		width: 150px;
		height: 150px;
		border-radius: 50%;

		&:before{
			content: "";
			position: absolute;
			left: 5px;
			right: 5px;
			top: 5px;
			bottom: 5px;
			border: 3px solid #0F0;
			border: 3px solid transparent;
			border-top-color: #D4CC6A;
			border-bottom-color: #D4CC6A;
			border-radius: 50%;
			animation-name: ${loader};
			animation-duration: 1.5s;
			animation-iteration-count: infinite;
			}

		&:after{
			content: '';
			position:absolute;
			left: 15px;
			right: 15px;
			top: 15px;
			bottom: 15px;
			border: 3px solid #00F;
			border: 3px solid transparent;
			border-top-color: #84417C;
			border-bottom-color: #84417C;
			border-radius: 50%;
			animation-name: ${loader};
			animation-duration: 3s;
			animation-iteration-count: infinite;
		}
`


export default function Loading({ name, white }) {
	return (
		<Wrapper>
			<LoadingText white={white}>{name}</LoadingText>
			<LoadingContent></LoadingContent>
		</Wrapper>
	)
}

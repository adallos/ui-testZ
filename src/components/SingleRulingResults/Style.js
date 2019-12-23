import Styled from 'styled-components';
import Theme from '../../Shared/Theme';

export const ResultsContainer = Styled.div`
	display: flex;
	flex-flow: row wrap;
	height: 40px;
	position: absolute;
  top: calc(100% - 40px);
	width: 100%;
	opacity: 0.9;
	color:${Theme.white};
`;

export const VotesContainer = Styled.div`
	display: flex;
	flex-flow: row wrap;
	height: 80px;
	width: 100%;
	opacity: 0.8;
	position: absolute;
	left: 0px;
	bottom: 0px;
	z-index: 4;
`;

export const ThumbsBar = Styled.div`
	font-weight: ${Theme.light};
	width: ${props => props.widthPct}%;
	background-color: ${props => (
		props.thumbType === 'up'
			? Theme.thumbsUp
			: Theme.thumbsDown
	)}CC;
	box-sizing: border-box;
	padding: 0px 5px;
	display: flex;
  align-items: center;
	justify-content: ${props => (
		props.thumbType === 'up'
			? 'flex-start'
			: 'flex-end'
	)}
`;

export const LightThumbsBar = Styled.button`
	font-weight: ${Theme.light};
	width: 50%;
	background-color: ${props => (
		props.thumbType === 'up'
			? Theme.thumbsUp
			: Theme.thumbsDown
	)}CC;
	box-sizing: border-box;
	padding: 0px 5px;
	display: flex;
  align-items: center;
	justify-content: center;
	border: none;
	&:hover {
		cursor: pointer;
		background-color: ${props => (
		props.thumbType === 'up'
			? Theme.thumbsUp
			: Theme.thumbsDown
	)};
	};
	&:focus {
		outline: none;
	};
	&:active {
		background-color: ${props => (
		props.thumbType === 'up'
			? Theme.thumbsUp
			: Theme.thumbsDown
	)}CC;
	}
`;

export const ThumbIcon = Styled.img`
	height: 28px;
	padding: 0px 5px;
	opacity: 1;
`;

export const PercentNumber = Styled.span`
	font-size: 25px;
	padding: 0px 5px;
`;

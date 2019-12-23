import Styled from 'styled-components';
import Theme from '../../Shared/Theme';
import coverBkg from '../../assets/img/pedestrians.png';

export const AddRulingContainer = Styled.div`
	color: ${Theme.textDark};
	padding: 24px 27px;
	display: flex;
	justify-content: space-between;
	background-image: url(${coverBkg});
	align-items: center;
	font-weight: ${Theme.regular};
	margin: 30px 0px;
`;

export const AddSomeonePhrase = Styled.span`
	font-size: 30px;
	filter: blur(0px);
`;

export const SubmitNameButton = Styled.button`
	padding: 18px 40px;
	font-size: 20px;
	background-color: transparent;
	border: 3px solid ${Theme.textDark};
	filter: blur(0px);
	&:hover {
		cursor: pointer;
		background-color: ${Theme.lightGray}66;
	},
	&:focus {
		outline: none;
	},
`;

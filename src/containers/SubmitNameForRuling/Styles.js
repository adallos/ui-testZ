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

	@media ${Theme.mobile} {
		flex-direction: column;
	};

	@media ${Theme.laptop} {
		flex-direction: row;
	};
`;

export const AddSomeonePhrase = Styled.span`
	
	filter: blur(0px);
	@media ${Theme.mobile} {
		font-size: 20px;
	};

	@media ${Theme.laptop} {
		font-size: 30px;
	};
`;

export const CompanyPhrase = Styled.p`
	font-size: 20px;
	display: flex;
	display: inline-block;
	margin: 0px;
	text-align: center;

`;

export const SubmitNameButton = Styled.button`
	
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

	@media ${Theme.mobile} {
		padding: 15px 20px;
	};

	@media ${Theme.laptop} {
		padding: 18px 40px;
	};
`;

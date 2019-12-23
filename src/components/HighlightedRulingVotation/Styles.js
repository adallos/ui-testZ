import styled from 'styled-components';
import Theme from '../../Shared/Theme';

export const InfoContainer = styled.div`

	z-index: 3;
	background-color: rgba(0,0,0, 0.4);
	font-size: 16px;
	color:${Theme.white};
	font-weight:${Theme.light};
	padding: 40px 35px 80px;
	position: relative;
	
	
	@media ${Theme.mobile} {
		font-size: 30px;
  }

	@media ${Theme.laptop} {
		box-sizing: border-box;
		width: 80%;
		justify-content: center;
  }

	@media ${Theme.desktop} {
		width: 40%;
		display: block;
  }
`;

export const RulingName = styled.span`
	font-weight: ${Theme.regular};
	opacity: 1;
	display: block;

	@media ${Theme.mobile} {
		font-size: 30px;
  }

	@media ${Theme.laptop} {
		font-size: 45px;
  }

	@media ${Theme.desktop} {
		font-size: 60px;
  }
`;

export const RulingAbout = styled.p`
	margin: 27px 0px;
	font-size: 21px; 
`;

export const WikiInfo = styled.a`
	font-size: 14px;
	display: flex;
	align-items: center;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
	&:visited {
		color:${Theme.white};
  }
	@media ${Theme.mobile} {
		display: none;
  }

	@media ${Theme.laptop} {
		display: block;
  }
`;

export const WikiIcon = styled.img`
	height: 12px;
	margin-right: 3px;
`;

export const VerdictQuestion = styled.span`
	font-size: 20px;

	font-weight: ${Theme.bold};
	

	@media ${Theme.mobile} {
		display: none;
  }

	@media ${Theme.laptop} {
		display: inline-block;
		margin: 20px 0px;
  }
`;

export const VoteAgainButton = styled.button`
	width: 100%;
	border: solid 1px ${Theme.white};
	padding: 12px 25px;
	margin: 20px 0px;
	font-size: 14px;
	color: ${Theme.white};
	background-color: ${Theme.darkGray}33;
	&:hover {
		cursor: pointer;
		background-color: ${Theme.darkGray}55;
	};
	&:focus {
		outline: none;
	};
	&:active {
		background-color: ${Theme.darkGray}77;
	}

	@media ${Theme.mobile} {
		width: 50%;
  }

	@media ${Theme.laptop} {
		width: 80%;
  }

`;

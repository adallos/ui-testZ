import styled from 'styled-components';
import Theme from '../../Shared/Theme';

export const InfoContainer = styled.div`
	width: 40%;
	z-index: 3;
	background-color: rgba(0,0,0, 0.4);
	font-size: 16px;
	color:${Theme.white};
	font-weight:${Theme.light};
	padding: 40px 35px 80px;
	position: relative;
`;

export const RulingName = styled.span`
	font-size: 60px;
	font-weight: ${Theme.regular};
	opacity: 1;
	display: block;
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
`;

export const WikiIcon = styled.img`
	height: 12px;
	margin-right: 3px;
`;

export const VerdictQuestion = styled.span`
	font-size: 20px;
	margin: 20px 0px;
	font-weight: ${Theme.bold};
	display: inline-block;
`;

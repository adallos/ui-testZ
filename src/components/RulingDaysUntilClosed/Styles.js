import styled from 'styled-components';
import Theme from '../../Shared/Theme';

export const OuterContainer = styled.div`
	align-items: center;
	background-color: ${Theme.darkGray}33;
	top: calc(100vh - 210px);
	color: ${Theme.white};
	flex-wrap: nowrap;
	font-size: 13px;
	font-weight: ${Theme.regular};
	justify-content: flex-end;
	left: 0px;
	position: absolute;
	text-transform: uppercase;
	width: 100vw;
	

	@media ${Theme.mobile} {
		display: none;
  }

	@media ${Theme.laptop} {
		display: flex;
  }
`;

export const DaysLeft = styled.span`
	background-color: ${Theme.white}59;
	color: ${Theme.textGray};
	display: inline-block;
	font-size: 36px;
	font-weight: ${Theme.light};
	margin-left: 10px;
	padding: 11px 0px 5px 16px;
	text-transform: lowercase;
	width: 70%;
`;

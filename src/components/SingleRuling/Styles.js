import styled from 'styled-components';
import Theme from '../../Shared/Theme';

export const RulingContainer = styled.div`
	position: relative;
	height: 400px;
`;

export const RulingImage = styled.img`
	width: 100%;
	height: 100%;
`;

export const RulingContent = styled.div`
	background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.01), #000000);
	bottom: 40px;
	color: ${Theme.white};
	padding: 0px 20px 0px 41px;
	position: absolute;
	width: 100%;
  box-sizing: border-box;
`;

export const RulingContentName = styled.span`
	font-size: 45px;
	display: block;
`;

export const RulingContentInfo = styled.p`
	font-size: 16px;
	display: block;
	margin: 0px;
	padding-right: 50px;
`;

export const FullReportButton = styled.button`
	border: solid 1px ${Theme.white};
	padding: 12px 25px;
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
`;

export const RulingExtraInfo = styled.div`
	display: flex;
	flex-direction: row nowrap;
	justify-content: space-between;
	margin: 25px 0px;
`;

export const RulingTimeAndCategory = styled.div`
	display: flex;
	flex-direction: column;
	text-align: end; 
`;

export const MonthsSinceClosed = styled.span`
`;

export const Category = styled.span`
`;

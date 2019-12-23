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
	
	display: block;

	@media ${Theme.mobile} {
		font-size: 30px;
  }

	@media ${Theme.laptop} {
		font-size: 35px;
	}

	@media ${Theme.desktop} {
		font-size: 45px;
	}
`;

export const RulingContentInfo = styled.p`
	font-size: 16px;
	
	margin: 0px;
	padding-right: 50px;

	@media ${Theme.mobile} {
		display: none;
  }

	@media ${Theme.laptop} {
		display: block;
	}
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
	flex-direction: column;
	text-align: end; 
	@media ${Theme.mobile} {
		display: none;
  }

	@media ${Theme.laptop} {
		display: flex;
  }
`;

export const MonthsSinceClosed = styled.span`
	
`;

export const Category = styled.span`
`;

import styled from 'styled-components';
import Theme from '../Shared/Theme';

export const MainContainer = styled.div`
	box-sizing: border-box;
	font-family: 'Lato', sans-serif;
	position: absolute;
	top: 0px;
	
`;

export const ViewContent = styled.div`
	box-sizing: border-box;
	position: absolute;
	top: 150px;
	width: 100vw;

	@media ${Theme.mobile} {
		padding: 5px 30px;
  }

	@media ${Theme.laptop} {
		padding: 5px 80px;
  }

	@media ${Theme.desktop} {
		padding: 5px 133px;
  }
`;

export const HeadingOuterContainer = styled.div`
	width: 100vw;
	position: relative;
`;

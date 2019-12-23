import styled from 'styled-components';
import Theme from '../../Shared/Theme';

export const RulingsContainer = styled.section`
	position: relative;
`;

export const RulingsTitle = styled.span`
	font-size: 40px;
	font-weight: ${Theme.light};
	color: ${Theme.textDark};
	padding-bottom: 20px;
`;

export const RulingsList = styled.div`
	display: grid;
	grid-gap: 40px;
	padding: 20px 0px;

	@media ${Theme.mobile} {
		grid-template-columns: auto;
  }

	@media ${Theme.laptop} {
		grid-template-columns: auto auto;
  }

	@media ${Theme.desktop} {
		grid-template-columns: auto auto auto;
  }
`;

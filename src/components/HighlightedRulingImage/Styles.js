import styled from 'styled-components';
import Theme from '../../Shared/Theme';

const HighlightedImage = styled.img`
	position: absolute;
	
	
	z-index: -1;
	left: 0;

	@media ${Theme.mobile} {
		width: 100%;
		top: -150px;
  }

	@media ${Theme.laptop} {
		height: 100vh;
		width: 100%;
		top: -150px;
  }
	`;

export default HighlightedImage;

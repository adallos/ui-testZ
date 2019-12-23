import styled from 'styled-components';
import Theme from '../../Shared/Theme';

const Container = styled.div`
	
	@media ${Theme.mobile} {
		height: auto;
  }

	@media ${Theme.laptop} {
		height: calc(100vh - 150px);
  }
`;

export default Container;

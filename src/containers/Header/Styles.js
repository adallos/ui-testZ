import styled from 'styled-components';
import Theme from '../../Shared/Theme';

export const Container = styled.header`
	background-image: linear-gradient(to bottom, #333333, rgba(51, 51, 51, 0));
	padding: 41px 133px;
	display: flex;
	justify-content: space-between; 
	color: ${Theme.textWhite};
	position: absolute;
	width: 100vw;
	box-sizing: border-box;
	z-index: 2;
`;

export const Title = styled.h1`
	font-size: 32px;
	font-weight: ${Theme.regular};
`;

export const NavAndSearch = styled.div`
	width: 40vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Navbar = styled.ul`
	list-style: none;
	display: flex;
	width: 60%;
	justify-content: space-between;
	
`;

export const NavItem = styled.li`
	font-weight: ${Theme.light};
	&:hover {
		text-decoration: underline;
		cursor: pointer;
  }
`;

export const Searchbar = styled.div`
	
`;

import styled from 'styled-components';
import Theme from '../../Shared/Theme';

export const Container = styled.header`
	background-image: linear-gradient(to bottom, #333333, rgba(51, 51, 51, 0));
	box-sizing: border-box;
	color: ${Theme.textWhite};
	display: flex;
	justify-content: space-between; 
	padding: 41px 133px;
	position: absolute;
	top: 0px;
	width: 100vw;
	z-index: 2;
`;

export const Title = styled.h1`
	font-size: 32px;
	font-weight: ${Theme.regular};
`;

export const NavAndSearch = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
	width: 40vw;
`;

export const Navbar = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;
	width: 60%;
	
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

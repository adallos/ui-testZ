import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Theme from '../../Shared/Theme';

export const Container = styled.header`
	background-image: linear-gradient(to bottom, #333333, rgba(51, 51, 51, 0.01));
	box-sizing: border-box;
	color: ${Theme.textWhite};
	display: flex;
	justify-content: space-between; 
	position: absolute;
	top: 0px;
	width: 100vw;
	z-index: 2;
	flex-direction: row;
	align-items: center;

	@media ${Theme.mobile} {
		padding: 20px;
  }

	@media ${Theme.laptop} {
		padding: 35px 133px;
  }

	@media ${Theme.desktop} {
		padding: 35px 133px;
  }
`;

export const Title = styled(Link)`
	font-size: 32px;
	font-weight: ${Theme.regular};
	width: 30%;
	text-decoration: none;
	color: ${Theme.white};
	&:hover {
		text-decoration: underline;
		cursor: pointer;
  };
`;

export const NavAndSearch = styled.div`
	display: flex;
	width: 70%;
	justify-content: flex-end;
	
`;

export const Navbar = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;
	width: 75%;
	margin: 0px;
	padding: 0px;
	flex-direction: row;
`;

export const NavItem = styled.li`
	
`;

export const NavLink = styled(Link)`
	font-weight: ${Theme.light};
	color: ${Theme.white};
	text-decoration: none;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
  };
`;

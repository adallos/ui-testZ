import React from 'react';

import {
	Container,
	Title,
	NavAndSearch,
	Navbar,
	NavItem,
	NavLink,
} from './Styles';

function Header() {
	const NavItems = [
		{
			text: 'Past Trials',
			redirectsTo: '/pasttrials',
			key: 'pasttrials',
		},
		{
			text: 'How It Works',
			redirectsTo: '/howitworks',
			key: 'howitworks',
		},
		{
			text: 'Log In / Sign Up',
			redirectsTo: '/login',
			key: 'login',
		},
	];

	return (
		<Container>
			<Title to="/">Rule of Thumb</Title>
			<NavAndSearch>
				<Navbar>
					{NavItems.map(item => (
						<NavItem
							key={item.key}
						>
							<NavLink to={item.redirectsTo}>{item.text}</NavLink>
						</NavItem>
					))}
				</Navbar>
			</NavAndSearch>
		</Container>
	);
}

export default Header;

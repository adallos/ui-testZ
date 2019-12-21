import React from 'react';
import {
	Container,
	Title,
	NavAndSearch,
	Navbar,
	Searchbar,
	NavItem,
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
			<Title>Rule of Thumb</Title>
			<NavAndSearch>
				<Navbar>
					{NavItems.map(item => (
						<NavItem
							key={item.key}
						>
							{item.text}
						</NavItem>
					))}
				</Navbar>
				<Searchbar />
			</NavAndSearch>
		</Container>
	);
}

export default Header;

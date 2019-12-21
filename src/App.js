import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Home from './views/Home/Home';
import PastTrials from './views/PastTrials/PastTrials';
import HowItWorks from './views/HowItWorks/HowItWorks';
import Login from './views/Login/Login';
import MainContainer from './views/GlobalStyles';

const AppContainer = styled.div`
	height: 100vh;
	width: 100vw;
`;

const routes = [
	{
		path: '/',
		component: Home,
		exact: true,
	},
	{
		path: '/pasttrials',
		component: PastTrials,
	},
	{
		path: '/howitworks',
		component: HowItWorks,
	},
	{
		path: '/login',
		component: Login,
	},
];

function App() {
	return (
		<AppContainer>
			<Router>
				<MainContainer>
					{routes.map(route => (
						<Route
							key={Math.random().toString(36)}
							path={route.path}
							exact={route.exact}
							component={route.component}
						/>
					))}
				</MainContainer>
			</Router>
		</AppContainer>
	);
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Provider } from './store';
import './App.css';
import Home from './views/Home/Home';
import PastTrials from './views/PastTrials/PastTrials';
import HowItWorks from './views/HowItWorks/HowItWorks';
import Login from './views/Login/Login';
import { MainContainer } from './views/GlobalStyles';
import Header from './containers/Header/Header';

const AppContainer = styled.div`
	top: 0px;
	height: 100vh;
	width: 100vw;
	margin: 0px;
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
		<Provider>
			<AppContainer>
				<Router>
					<MainContainer>
						<Header />
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
		</Provider>
	);
}

export default App;

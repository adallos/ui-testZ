import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import PollsReducer from './PollsReducer';
import getPolls from '../Utils/Services/apiConnector';

const Store = React.createContext();

const CreateStore = (reducer, initialState) => {
	const [reducerState, dispatch] = useReducer(reducer, initialState);
	return { reducerState, dispatch };
};

const localStorageInfo = () => localStorage.getItem('uiPoll');

const localPollsState = () => {
	let storedPolls = [];
	if (!localStorageInfo()) {
		getPolls()
			.then((data) => {
				localStorage.setItem('uiPoll', JSON.stringify(data));
				storedPolls = data;
			})
			.catch(err => console.log(err.message));
	} else {
		storedPolls = JSON.parse(localStorage.getItem('uiPoll'));
	}
	return { polls: storedPolls };
};

const Provider = ({ children }) => {
	const store = CreateStore(PollsReducer, localPollsState());
	return <Store.Provider value={store}>{children}</Store.Provider>;
};

Provider.propTypes = {
	children: PropTypes.shape([]).isRequired,
};

export { Store, Provider };

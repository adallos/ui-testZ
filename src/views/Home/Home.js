import React, { useContext } from 'react';
import { Store } from '../../store';
import { ViewContent } from '../GlobalStyles';

function Home() {

	const {
		reducerState,
		dispatch,
	} = useContext(Store);

	console.log(reducerState);
	

	return (
		<ViewContent>
			Home content goes here
		</ViewContent>
	);
}

export default Home;

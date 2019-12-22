import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../../store';
import { ViewContent } from '../GlobalStyles';
import HighlightedRuling from '../../containers/HighlightedRuling/HighlightedRuling';
import PreviousRulings from '../../containers/PreviousRulings/PreviousRulings';
import RuleOfThumbDescription from '../../containers/RuleOfThumbDescription/RuleOfThumbDesc';
import SubmitNameForRuling from '../../containers/SubmitNameForRuling/SubmitNameForRuling';

function Home() {
	const [componentData, updateComponentData] = useState({
		polls: [],
		highlightedPollName: 'Pope Francis',
		highlightedPollContent: {},
	});
	
	const {
		dispatch,
		reducerState: { polls },
	} = useContext(Store);

	useEffect(() => {
		const {
			highlightedPollName,
		} = componentData;

		const highlightedPollContent = componentData.polls.filter(
			singlePoll => singlePoll.name === highlightedPollName,
		);
		updateComponentData({
			...componentData,
			highlightedPollContent,
			polls,
		});
	}, [polls]);

	return (
		<ViewContent>
			<HighlightedRuling
				poll={componentData.polls.filter(singlePoll => singlePoll.name === componentData.highlightedPollName)}
			/>
			<RuleOfThumbDescription />
			<PreviousRulings />
			<SubmitNameForRuling />
		</ViewContent>
	);
}

export default Home;

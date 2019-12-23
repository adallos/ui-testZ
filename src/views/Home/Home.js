import React, { useContext, useState } from 'react';
import { Store } from '../../store';
import { ViewContent } from '../GlobalStyles';
import HighlightedRuling from '../../containers/HighlightedRuling/HighlightedRuling';
import PreviousRulings from '../../containers/PreviousRulings/PreviousRulings';
import RuleOfThumbDescription from '../../containers/RuleOfThumbDescription/RuleOfThumbDesc';
import SubmitNameForRuling from '../../containers/SubmitNameForRuling/SubmitNameForRuling';
import Footer from '../../components/Footer/Footer';


function Home() {
	const {
		reducerState: { polls },
	} = useContext(Store);

	const [componentData] = useState({
		highlightedPoll: polls.filter(poll => poll.pollInfo.monthsSincePosted < 1)[0],
		previousPolls: polls.filter(poll => poll.pollInfo.monthsSincePosted >= 1),
	});


	return (
		<ViewContent>
			<HighlightedRuling poll={componentData.highlightedPoll} />
			<RuleOfThumbDescription />
			<PreviousRulings rulings={componentData.previousPolls} />
			<SubmitNameForRuling />
			<Footer />
		</ViewContent>
	);
}

export default Home;

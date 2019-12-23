import React, { useContext } from 'react';
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
		reducerState: { highlightedPoll: [highlightedPoll] },
	} = useContext(Store);

	return (
		<ViewContent>
			<HighlightedRuling poll={highlightedPoll} />
			<RuleOfThumbDescription />
			<PreviousRulings rulings={polls} />
			<SubmitNameForRuling />
			<Footer />
		</ViewContent>
	);
}

export default Home;

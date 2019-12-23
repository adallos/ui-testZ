import React from 'react';
import PropTypes from 'prop-types';
import HighlightedRulingImage from '../../components/HighlightedRulingImage/HighlightedRulingImage';
import HighlightedRulingVotation from '../../components/HighlightedRulingVotation/HighlightedRulingVotation';
import RulingDaysUntilClosed from '../../components/RulingDaysUntilClosed/RulingDaysUntilClosed';
import Container from './Styles';

function HighlightedRuling(props) {
	const {
		poll: { image },
		poll: { pollInfo },
		poll,
	} = props;
	return (
		<Container>
			<HighlightedRulingImage rulingImage={image} />
			<HighlightedRulingVotation rulingInfo={poll} />
			<RulingDaysUntilClosed dateAndCatecory={pollInfo} />
		</Container>
	);
}

HighlightedRuling.defaultProps = {
	poll: {},
};

HighlightedRuling.propTypes = {
	poll: PropTypes.shape({
		image: PropTypes.string,
		info: PropTypes.string,
		name: PropTypes.string,
		pollInfo: PropTypes.shape({
			monthsSincePosted: PropTypes.number,
			category: PropTypes.string,
		}),
		votes: PropTypes.shape({
			thumbsUp: PropTypes.number,
			thumbsDown: PropTypes.number,
		}),
	}),
};

export default HighlightedRuling;

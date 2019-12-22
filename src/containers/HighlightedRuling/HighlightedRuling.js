import React from 'react';
import PropTypes from 'prop-types';
import HighlightedRulingImage from '../../components/HighlightedRulingImage/HighlightedRulingImage';
import HighlightedRulingVotation from '../../components/HighlightedRulingVotation/HighlightedRulingVotation';
import { Container } from './Styles';

function HighlightedRuling(props) {
	const {
		poll: [image],
		poll,
	} = props;

	return (
		<Container>
			<HighlightedRulingImage imageSource={image} />
			<HighlightedRulingVotation info={poll} />
		</Container>
	);
}

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
	}).isRequired,
};

export default HighlightedRuling;

import React from 'react';
import PropTypes from 'prop-types';
import {
	ResultsContainer,
	ThumbsBar,
	ThumbIcon,
	PercentNumber,
} from './Style';
import thumbsUpIcon from '../../assets/img/thumbs-up-solid.svg';
import thumbsDownIcon from '../../assets/img/thumbs-down-solid.svg';

function SingleRulingVotes(props) {
	const {
		votes: { thumbsUp },
		votes: { thumbsDown },
	} = props;

	const getPercent = total => Math.round(total * 100 / (thumbsDown + thumbsUp));

	return (
		<ResultsContainer>
			<ThumbsBar thumbType="up" widthPct={getPercent(thumbsUp)}>
				<ThumbIcon src={thumbsUpIcon} />
				<PercentNumber>
					{getPercent(thumbsUp)}
					%
				</PercentNumber>
			</ThumbsBar>
			<ThumbsBar thumbType="down" widthPct={getPercent(thumbsDown)}>
				<PercentNumber>
					{getPercent(thumbsDown)}
					%
				</PercentNumber>
				<ThumbIcon src={thumbsDownIcon} />
			</ThumbsBar>
		</ResultsContainer>
	);
}

SingleRulingVotes.defaultProps = {
	votes: {},
};

SingleRulingVotes.propTypes = {
	votes: PropTypes.shape({
		thumbsUp: PropTypes.number,
		thumbsDown: PropTypes.number,
	}),
};

export default SingleRulingVotes;

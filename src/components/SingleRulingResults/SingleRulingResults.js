import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
	ResultsContainer,
	ThumbsBar,
	ThumbIcon,
	PercentNumber,
} from './Style';
import thumbsUpIcon from '../../assets/img/thumbs-up-solid.svg';
import thumbsDownIcon from '../../assets/img/thumbs-down-solid.svg';
import { Store } from '../../store';

function SingleRulingVotes(props) {
	const {
		votes: { thumbsUp },
		votes: { thumbsDown },
	} = props;

	const {
		dispatch,
	} = useContext(Store);

	const {
		callbackWhenVote,
		rulingInfo,
	} = props;

	const getPercent = total => Math.round(total * 100 / (thumbsDown + thumbsUp));

	const vote = (action) => {
		dispatch({ type: action, payload: rulingInfo });
	};

	return (
		<ResultsContainer>
			<ThumbsBar
				thumbType="up"
				widthPct={getPercent(thumbsUp)}
				onClick={() => {
					vote('THUMBS_UP');
					callbackWhenVote();
				}}
			>
				<ThumbIcon src={thumbsUpIcon} />
				<PercentNumber>
					{getPercent(thumbsUp)}
					%
				</PercentNumber>
			</ThumbsBar>
			<ThumbsBar
				thumbType="down"
				widthPct={getPercent(thumbsDown)}
				onClick={() => {
					vote('THUMBS_DOWN');
					callbackWhenVote();
				}}
			>
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
	callbackWhenVote: undefined,
	rulingInfo: {},
};

SingleRulingVotes.propTypes = {
	callbackWhenVote: PropTypes.func,
	rulingInfo: PropTypes.shape({
		name: PropTypes.string,
		info: PropTypes.string,
		wiki: PropTypes.string,
		pollInfo: PropTypes.shape({
			monthsSincePosted: PropTypes.number,
		}),
		votes: PropTypes.shape({
			thumbsUp: PropTypes.number,
			thumbsDown: PropTypes.number,
		}),
	}),
};

export default SingleRulingVotes;

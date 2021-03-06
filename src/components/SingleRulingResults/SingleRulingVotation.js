import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { VotesContainer, LightThumbsBar, ThumbIcon } from './Style';
import thumbsUpIcon from '../../assets/img/thumbs-up-solid.svg';
import thumbsDownIcon from '../../assets/img/thumbs-down-solid.svg';
import { Store } from '../../store';

function SingleRulingVotation(props) {
	const {
		dispatch,
	} = useContext(Store);

	const {
		rulingInfo,
		callbackWhenVote,
	} = props;

	const vote = (action) => {
		dispatch({ type: action, payload: rulingInfo });
	};

	return (
		<VotesContainer>
			<LightThumbsBar
				thumbType="up"
				onClick={() => {
					vote('THUMBS_UP');
					callbackWhenVote('THUMBS_UP');
				}}
			>
				<ThumbIcon src={thumbsUpIcon} />
			</LightThumbsBar>
			<LightThumbsBar
				thumbType="down"
				onClick={() => {
					vote('THUMBS_DOWN');
					callbackWhenVote('THUMBS_DOWN');
				}}
			>
				<ThumbIcon src={thumbsDownIcon} />
			</LightThumbsBar>
		</VotesContainer>
	);
}

SingleRulingVotation.defaultProps = {
	callbackWhenVote: undefined,
	rulingInfo: {},
};

SingleRulingVotation.propTypes = {
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

export default SingleRulingVotation;

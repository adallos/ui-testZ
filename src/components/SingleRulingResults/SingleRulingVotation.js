import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { VotesContainer, LightThumbsBar, ThumbIcon } from './Style';
import thumbsUpIcon from '../../assets/img/thumbs-up-solid.svg';
import thumbsDownIcon from '../../assets/img/thumbs-down-solid.svg';
import { Store } from '../../store';

function SingleRulingVotation(props) {
	const {
		dispatch,
		reducerState,
	} = useContext(Store);

	const {
		callbackWhenVote,
	} = props;

	const vote = (action) => {
		dispatch({ type: action, payload: reducerState });
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
};

SingleRulingVotation.propTypes = {
	callbackWhenVote: PropTypes.func,
};

export default SingleRulingVotation;

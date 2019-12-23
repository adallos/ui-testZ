import React from 'react';
import PropTypes from 'prop-types';
import { VotesContainer, LightThumbsBar, ThumbIcon } from './Style';
import thumbsUpIcon from '../../assets/img/thumbs-up-solid.svg';
import thumbsDownIcon from '../../assets/img/thumbs-down-solid.svg';

function SingleRulingVotation(props) {
	const {
		votes: { thumbsUp },
		votes: { thumbsDown },
	} = props;

	console.log(props);
	
	return (
		<VotesContainer>
			<LightThumbsBar thumbType="up">
				<ThumbIcon src={thumbsUpIcon} />
			</LightThumbsBar>
			<LightThumbsBar thumbType="down">
				<ThumbIcon src={thumbsDownIcon} />
			</LightThumbsBar>
		</VotesContainer>
	);
}

SingleRulingVotation.defaultProps = {
	votes: {},
};

SingleRulingVotation.propTypes = {
	votes: PropTypes.shape({
		thumbsUp: PropTypes.number,
		thumbsDown: PropTypes.number,
	}),
};

export default SingleRulingVotation;

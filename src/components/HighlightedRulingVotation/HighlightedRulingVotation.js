import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	InfoContainer,
	RulingName,
	RulingAbout,
	WikiInfo,
	WikiIcon,
	VerdictQuestion,
	VoteAgainButton,
} from './Styles';
import iconwiki from '../../assets/img/wiki.png';
import SingleRulingVotation from '../SingleRulingResults/SingleRulingVotation';
import SingleRulingResults from '../SingleRulingResults/SingleRulingResults';

function HighlightedRulingContainer(props) {
	const {
		rulingInfo: { name },
		rulingInfo: { info },
		rulingInfo: { wiki },
		rulingInfo: { votes },
	} = props;

	const [areResultsHidden, toggleVisibility] = useState(false);

	const childVotation = () => toggleVisibility(!areResultsHidden);

	return (
		<InfoContainer>
			{
				areResultsHidden
					? (
						<React.Fragment>
							What&apos;s your opinion on
							<RulingName>
								{name}
								?
							</RulingName>
							<RulingAbout>
								{info}
							</RulingAbout>
							<WikiInfo
								href={wiki}
								target="_blank"
								rel="noopener noreferrer"
							>
								<WikiIcon
									src={iconwiki}
									alt={`Search ${name} on Wikipedia`}
								/>
								More information
							</WikiInfo>
							<VerdictQuestion>
								What&apos;s your Verdict?
							</VerdictQuestion>
							<SingleRulingVotation
								callbackWhenVote={childVotation}
							/>
						</React.Fragment>
					)
					: (
						<React.Fragment>
							<RulingName> Thanks for voting!</RulingName>
							<VoteAgainButton
								onClick={() => toggleVisibility(!areResultsHidden)}
							>
									Vote again
							</VoteAgainButton>
							<SingleRulingResults
								votes={votes}
							/>
						</React.Fragment>
					)
			}
		</InfoContainer>
	);
}
HighlightedRulingContainer.defaultProps = {
	rulingInfo: {},
};

HighlightedRulingContainer.propTypes = {
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

export default HighlightedRulingContainer;

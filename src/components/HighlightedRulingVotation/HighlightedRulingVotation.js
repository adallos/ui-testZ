import React from 'react';
import PropTypes from 'prop-types';
import {
	InfoContainer,
	RulingName,
	RulingAbout,
	WikiInfo,
	WikiIcon,
	VerdictQuestion,
} from './Styles';
import iconwiki from '../../assets/img/wiki.png';

function HighlightedRulingContainer(props) {
	const {
		rulingInfo: { image },
		rulingInfo: { name },
		rulingInfo: { info },
		rulingInfo: { wiki },
		rulingInfo: { pollInfo },
		rulingInfo: { votes },
	} = props;

	return (
		<InfoContainer>
			What&apos;s your opinion on
			<RulingName>
				{name}
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
			category: PropTypes.string,
		}),
		votes: PropTypes.shape({
			thumbsUp: PropTypes.number,
			thumbsDown: PropTypes.number,
		}),
	}),
};

export default HighlightedRulingContainer;

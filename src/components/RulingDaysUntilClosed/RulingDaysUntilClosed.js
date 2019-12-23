import React from 'react';
import PropTypes from 'prop-types';
import {
	OuterContainer,
	DaysLeft,
} from './Styles';

function RulingDaysUntilClosed() {
	return (
		<OuterContainer
			role="contentinfo"
			aria-label="Days left until the current ruling closes"
		>
			Closing in
			<DaysLeft>
				<b>22 </b>
				days
			</DaysLeft>
		</OuterContainer>
	);
}

RulingDaysUntilClosed.defaultProps = {
	dateAndCategory: {},
};

RulingDaysUntilClosed.propTypes = {
	dateAndCategory: PropTypes.shape({
		monthsSincePosted: PropTypes.number,
	}),
};

export default RulingDaysUntilClosed;

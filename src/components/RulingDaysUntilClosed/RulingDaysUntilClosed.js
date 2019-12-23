import React from 'react';
import PropTypes from 'prop-types';
import {
	OuterContainer,
	DaysLeft,
} from './Styles';

function RulingDaysUntilClosed() {
	return (
		<OuterContainer>
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

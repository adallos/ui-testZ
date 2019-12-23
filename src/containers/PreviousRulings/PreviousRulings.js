import React from 'react';
import PropTypes from 'prop-types';
import { Store } from '../../store';
import { RulingsContainer, RulingsTitle, RulingsList } from './Styles';
import SingleRuling from '../../components/SingleRuling/SingleRuling';

function PreviousRulings(props) {
	const {
		rulings,
	} = props;

	return (
		<RulingsContainer>
			<RulingsTitle>
				Previous Rulings
			</RulingsTitle>
			<RulingsList>
				{rulings.map(ruling => (
					<SingleRuling
						rulingInfo={ruling}
						key={ruling.name}
					/>
				))}
			</RulingsList>
		</RulingsContainer>
	);
}

PreviousRulings.defaultProps = {
	rulings: [],
};

PreviousRulings.propTypes = {
	rulings: PropTypes.shape([]),
};

export default PreviousRulings;

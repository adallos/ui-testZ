import React from 'react';
import PropTypes from 'prop-types';
import {
	RulingContainer,
	RulingImage,
	RulingContent,
	RulingContentName,
	RulingContentInfo,
	FullReportButton,
	RulingExtraInfo,
	RulingTimeAndCategory,
	MonthsSinceClosed,
	Category,
} from './Styles';
import SingleRulingResults from '../SingleRulingResults/SingleRulingResults';

function SingleRuling(props) {
	const {
		rulingInfo: { image },
		rulingInfo: { name },
		rulingInfo: { info },
		rulingInfo: { pollInfo: { monthsSincePosted } },
		rulingInfo: { pollInfo: { category } },
		rulingInfo: { votes },
	} = props;

	return (
		<RulingContainer
			role="contentinfo"
			aria-label={`Results for the ruling of ${name}`}
		>
			<RulingImage
				src={image}
				role="img"
				aria-label={`Image of ${name}`}
				draggable="false"
			/>
			<RulingContent>
				<RulingContentName>{name}</RulingContentName>
				<RulingContentInfo>{info}</RulingContentInfo>
				<RulingExtraInfo>
					<FullReportButton>
						View Full Report
					</FullReportButton>
					<RulingTimeAndCategory>
						<MonthsSinceClosed>
							{`${monthsSincePosted} ${monthsSincePosted > 1 ? 'months' : 'month'} ago`}
						</MonthsSinceClosed>
						<Category>
							in&nbsp;
							<b>{category}</b>
						</Category>
					</RulingTimeAndCategory>
				</RulingExtraInfo>
			</RulingContent>
			<SingleRulingResults
				votes={votes}
			/>
		</RulingContainer>
	);
}

SingleRuling.defaultProps = {
	rulingInfo: {},
};

SingleRuling.propTypes = {
	rulingInfo: PropTypes.shape({
		image: PropTypes.string,
		name: PropTypes.string,
		info: PropTypes.string,
		wiki: PropTypes.string,
		pollInfo: PropTypes.shape({
			monthsSincePosted: PropTypes.number,
			category: PropTypes.string,
		}),
		votes: PropTypes.shape({}),
	}),
};

export default SingleRuling;

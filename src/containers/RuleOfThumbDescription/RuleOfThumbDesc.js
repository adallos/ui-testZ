import React from 'react';
import {
	DescriptionContainer,
	WhatIsRuleOfThumb,
	CompanyPhrase,
	BeCountedPhrase,
} from './Styles';

function RuleOfThumbDescription() {
	return (
		<DescriptionContainer>
			<CompanyPhrase>
				Speak out. Be heard.
				<BeCountedPhrase>
					Be counted
				</BeCountedPhrase>
			</CompanyPhrase>
			<WhatIsRuleOfThumb>
				Rule of Thumb is a crowd sourced court of public
				opinion where anyone and everyone can speak out and
				speak freely. It’s easy: You share your opinion, we
				analyze and put the data in a public report.
			</WhatIsRuleOfThumb>
		</DescriptionContainer>
	);
}

export default RuleOfThumbDescription;

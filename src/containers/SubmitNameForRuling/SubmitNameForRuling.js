import React from 'react';
import { AddRulingContainer, AddSomeonePhrase, SubmitNameButton } from './Styles';

function SubmitNameForRuling() {
	return (
		<AddRulingContainer>
			<AddSomeonePhrase>
				Is there anyone else you would want us to add?
			</AddSomeonePhrase>
			<SubmitNameButton>
				Submit a Name
			</SubmitNameButton>
		</AddRulingContainer>
	);
}

export default SubmitNameForRuling;

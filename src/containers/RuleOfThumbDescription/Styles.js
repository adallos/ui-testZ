import styled from 'styled-components';
import Theme from '../../Shared/Theme';

export const DescriptionContainer = styled.div`
	display: flex;
	margin: 39px 0px;
	background-color: ${Theme.lighterGray};
	font-weight: ${Theme.light};
	padding: 24px 27px;
	justify-content: space-between;
	color: ${Theme.textDark};
	align-items: center;
`;

export const WhatIsRuleOfThumb = styled.p`
	font-size: 15px;
	display: inline;
	margin: 0px;
	width: 75%;
	line-height: 1.53;
`;

export const CompanyPhrase = styled.p`
	font-size: 20px;
	display: flex;
	display: inline-block;
	margin: 0px;
	text-align: center;
	width: 25%;
`;

export const BeCountedPhrase = styled.span`
	display: block;
	font-weight: ${Theme.bold};
	font-size: 37px;
`;

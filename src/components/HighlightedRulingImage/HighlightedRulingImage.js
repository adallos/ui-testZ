import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HighlightedImage } from './Styles';

function HighlightedRulingImage(props) {
	const [photoToRender, updatePhoto] = useState({});

	const {
		rulingImage,
	} = props;

	return (
		<HighlightedImage src={rulingImage} draggable="false" />
	);
}

HighlightedRulingImage.defaultProps = {
	rulingImage: '',
};

HighlightedRulingImage.propTypes = {
	rulingImage: PropTypes.string,
};

export default HighlightedRulingImage;

import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, onClick }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
  <img src={src} onClick={onClick} alt="img" />
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Image;

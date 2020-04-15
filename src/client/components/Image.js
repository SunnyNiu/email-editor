import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src }) => <img src={src} alt="img" />;

Image.propTypes = {
  // eslint-disable-next-line react/require-default-props
  src: PropTypes.string,
};
export default Image;

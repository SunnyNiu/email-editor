import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text }) => <input value={text} readOnly />;

Text.propTypes = {
  text: PropTypes.string,
};

Text.defaultProps = {
  text: '',
};

export default Text;

import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text, onClick }) => {
  return <input value={text} onClick={onClick} readOnly />;
};

Text.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Text.defaultProps = {
  text: '',
};

export default Text;

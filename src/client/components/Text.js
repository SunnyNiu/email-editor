import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ text }) => {
  const editText = () => {};

  return <input value={text} onClick={() => editText()} readOnly />;
};

Text.propTypes = {
  text: PropTypes.string,
};

Text.defaultProps = {
  text: '',
};

export default Text;

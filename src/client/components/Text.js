import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ value }) => <input value={value} readOnly />;

Text.propTypes = {
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.string,
};
export default Text;

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Preview = ({ emailHtml }) => {
  const createMarkup = () => ({ __html: `${emailHtml}` });

  // eslint-disable-next-line react/no-danger-with-children
  return <div dangerouslySetInnerHTML={createMarkup()} />;
};

const mapStateToProps = state => {
  return {
    emailHtml: state.content.emailHtml,
  };
};

Preview.propTypes = {
  emailHtml: PropTypes.string,
};

Preview.defaultProps = {
  emailHtml: '',
};
export default connect(mapStateToProps, null)(Preview);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSectionCreator } from '../reducers/actions';
import Section from './Section';

const Sidebar = ({ fetchSections, sections }) => {
  useEffect(() => {
    fetchSections();
  }, []);

  return (
    <div>
      {Object.entries(sections).map(([key, section]) => (
        <Section key={key} section={section} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  sections: state.app.sections,
});

const mapDispatchToProps = dispatch => ({
  fetchSections: () => dispatch(fetchSectionCreator()),
});

Sidebar.propTypes = {
  fetchSections: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  sections: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

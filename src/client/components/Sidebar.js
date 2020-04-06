import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSectionCreator } from '../reducers/actions';
import Section from './Section';

const Sidebar = ({ fetchSections, sections }) => {
  const sectionsArray = [];
  for (const [key, value] of Object.entries(sections)) {
    sectionsArray.push({ [key]: value });
  }

  useEffect(() => {
    fetchSections();
  }, []);

  return (
    <div>
      {sectionsArray.map(section => (
        <Section key={Object.keys(section)[0]} section={section} />
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
  // sections: PropTypes.shape(PropTypes.objectOf(string)).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

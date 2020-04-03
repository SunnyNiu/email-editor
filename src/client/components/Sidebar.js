import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSectionPathCreator } from '../reducers/actions';
import Section from './Section';

const Sidebar = ({ fetchSectionPaths, paths }) => {
  useEffect(() => {
    fetchSectionPaths();
  }, []);

  return (
    <div>
      {paths.map(path => (
        <Section key={path} path={path} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  paths: state.app.paths,
});

const mapDispatchToProps = dispatch => ({
  fetchSectionPaths: () => dispatch(fetchSectionPathCreator()),
});

Sidebar.propTypes = {
  fetchSectionPaths: PropTypes.func.isRequired,
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

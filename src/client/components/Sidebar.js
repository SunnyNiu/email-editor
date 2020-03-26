import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSectionPathCreator } from '../reducers/actions';

const Section = styled.div`
  height: 83px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #4285f4;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-button: 20px;
  }
`;

const Sidebar = ({ fetchSectionPaths, paths }) => {
  useEffect(() => {
    fetchSectionPaths();
  }, []);

  return (
    <div>
      {paths.map(path => (
        <Section key={path} />
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

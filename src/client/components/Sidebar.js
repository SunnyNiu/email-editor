import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPathCreator } from '../reducers/actions';

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

const Sidebar = ({ fetchPath, paths }) => {
  useEffect(() => {
    const fetchFunc = async () => {
      fetchPath();
    };

    fetchFunc();
  }, []);

  return (
    <div>
      {paths.length > 0
        ? paths.map((item, index) => <Section key={index} />)
        : null}
    </div>
  );
};

const mapStateToProps = state => ({
  paths: state.app.paths,
});

const mapDispatchToProps = dispatch => ({
  fetchPath: () => dispatch(fetchPathCreator()),
});

Sidebar.propTypes = {
  fetchPath: PropTypes.func.isRequired,
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

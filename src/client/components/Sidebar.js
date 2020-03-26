import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchPath } from '../reducers/actions';

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

const Sidebar = ({ fetchPath }) => {
  useEffect(() => {
    const fetchFunc = async () => {
      fetchPath();
    };

    fetchFunc();
  }, []);
  return (
    <div>
      <Section />
      <Section />
      <Section />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchPath: () => dispatch(fetchPath()),
});

export default connect(null, mapDispatchToProps)(Sidebar);

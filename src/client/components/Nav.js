import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveTextCreator } from '../reducers/contents.actions';

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-button: 20px;
  }
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
`;

const SaveButton = styled.button`
  min-width: 100px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background-color: #4285f4;
  color: white;
`;

const Nav = ({ text, saveText }) => {
  const url = window.location.href;
  const index = url.indexOf('email=');
  const userId = url.substr(index + 6, url.length);
  return (
    <HeaderContainer>
      <Icon src="/assets/movie-icon.png" alt="Movie Recommendation" />
      <SaveButton onClick={() => saveText(userId, text)}> save </SaveButton>
    </HeaderContainer>
  );
};

const mapStateToProps = state => ({
  text: state.content.text,
});

const mapDispatchToProps = dispatch => ({
  saveText: (userId, text) => dispatch(saveTextCreator(userId, text)),
});

Nav.propTypes = {
  text: PropTypes.string.isRequired,
  saveText: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);

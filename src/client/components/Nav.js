import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveSectionsCreator } from '../reducers/contentsActions';

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

const Nav = ({ email, saveSections, userId, disable }) => {
  return (
    <HeaderContainer>
      <Icon src="/assets/movie-icon.png" alt="logo" />
      <SaveButton
        onClick={() => saveSections(userId, email)}
        disabled={disable}
      >
        save
      </SaveButton>
    </HeaderContainer>
  );
};

const mapStateToProps = state => {
  const userId = window.location.href.split('email=')[1];
  return {
    email: state.content.email,
    disable: state.ui.isEmailSaving,
    userId,
  };
};

const mapDispatchToProps = dispatch => ({
  saveSections: (userId, email) => dispatch(saveSectionsCreator(userId, email)),
});

Nav.propTypes = {
  email: PropTypes.arrayOf(PropTypes.string),
  saveSections: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
};

Nav.defaultProps = {
  email: undefined,
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);

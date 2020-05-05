import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  saveEmailCreator,
  jsonToHtmlCreator,
} from '../reducers/contentsActions';

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

const Button = styled.button`
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

const SaveButton = Button;

const PreviewButton = Button;

const Nav = ({ email, saveEmail, emailId, disable, jsonToHtml }) => {
  return (
    <HeaderContainer>
      <Icon src="/public/movie-icon.png" alt="logo" />
      <SaveButton onClick={() => saveEmail(emailId, email)} disabled={disable}>
        Save
      </SaveButton>
      <PreviewButton onClick={() => jsonToHtml(email)}>Preview</PreviewButton>
    </HeaderContainer>
  );
};

const mapStateToProps = state => {
  const emailId = window.location.href.split('email=')[1];
  return {
    email: state.content.email,
    disable: state.ui.isEmailSaving,
    emailId,
  };
};

const mapDispatchToProps = dispatch => ({
  saveEmail: (emailId, email) => dispatch(saveEmailCreator(emailId, email)),
  jsonToHtml: email => dispatch(jsonToHtmlCreator(email)),
});

Nav.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  email: PropTypes.object,
  saveEmail: PropTypes.func.isRequired,
  disable: PropTypes.bool.isRequired,
  emailId: PropTypes.string.isRequired,
  jsonToHtml: PropTypes.func.isRequired,
};

Nav.defaultProps = {
  email: {},
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);

import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { Grid } from 'styled-css-grid';
import {
  addSectionCreator,
  fetchEmailCreator,
} from '../reducers/contentsActions';
import { ItemTypes } from '../util';
import Sections from './Sections';

const Container = styled(Grid)`
  height: 300px;
  justify-content: center;
  background-color: #4285f4;
  align-items: center;
`;
const Content = props => {
  const { fetchEmail, email, addSection, emailId } = props;
  useEffect(() => {
    fetchEmail(emailId);
  }, []);

  const [, drop] = useDrop({
    accept: ItemTypes.XML,
    drop: ({ section }) => {
      addSection(section);
    },
  });

  return (
    <Container columns={1} ref={drop}>
      {email.map(section => (
        <Sections key={section.id} section={section} />
      ))}
    </Container>
  );
};

const mapStateToProps = state => {
  const emailId = window.location.href.split('email=')[1];
  return {
    email: state.content.email,
    emailId,
  };
};

const mapDispatchToProps = dispatch => ({
  addSection: section => dispatch(addSectionCreator(section)),
  fetchEmail: emailId => dispatch(fetchEmailCreator(emailId)),
});

Content.propTypes = {
  addSection: PropTypes.func.isRequired,
  fetchEmail: PropTypes.func.isRequired,
  email: PropTypes.arrayOf(PropTypes.object),
  emailId: PropTypes.string,
};

Content.defaultProps = {
  email: [],
  emailId: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);

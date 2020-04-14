import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { Grid } from 'styled-css-grid';
import {
  addSectionCreator,
  fetchSectionsCreator,
} from '../reducers/contentsActions';
import { ItemTypes } from '../util';
import DroppedSection from './DroppedSection';

const Container = styled(Grid)`
  height: 300px;
  justify-content: center;
  background-color: #4285f4;
  align-items: center;
`;
const Content = props => {
  const { fetchSections, email, addSection, emailId } = props;
  useEffect(() => {
    fetchSections(emailId);
  }, []);

  const [, drop] = useDrop({
    accept: ItemTypes.XML,
    drop: ({ section }) => addSection(JSON.stringify(section)),
  });

  return (
    <Container columns={1} ref={drop}>
      {email.map((section, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <DroppedSection key={index} section={section} />
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
  fetchSections: emailId => dispatch(fetchSectionsCreator(emailId)),
});

Content.propTypes = {
  addSection: PropTypes.func.isRequired,
  fetchSections: PropTypes.func.isRequired,
  email: PropTypes.arrayOf(PropTypes.string),
  emailId: PropTypes.string,
};

Content.defaultProps = {
  email: [],
  emailId: undefined,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
